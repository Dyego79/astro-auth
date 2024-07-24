import { defineAction, z } from "astro:actions";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  type AuthError,
} from "firebase/auth";
import { firebase } from "src/firebase/config";

export const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ name, password, remember_me, email }, { cookies }) => {
    if (remember_me) {
      cookies.set("email", email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        path: "/",
      });
    } else {
      cookies.delete("email", {
        path: "/",
      });
    }
    //CREACION DE USUARIO
    try {
      const user = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );

      //Actualizar nombre (displayName)
      updateProfile(firebase.auth.currentUser!, { displayName: name });

      //Verificar el email
      await sendEmailVerification(firebase.auth.currentUser!, {
        //url: "/protected?emailVerifed=true",
        url: `${import.meta.env.WEBSITE_URL}/protected?emailVerifed=true`,
      });
      return user;
    } catch (error) {
      const firebaseError = error as AuthError;
      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error("El usuario ya está en uso. :(D");
      }
      throw new Error("Algo salió mal.");
    }
  },
});
