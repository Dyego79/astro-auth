import { defineAction, z } from "astro:actions";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { firebase } from "src/firebase/config";

export const loginWithGoogle = defineAction({
  accept: "json",
  input: z.any(),
  handler: async (credencials) => {
    const credential = GoogleAuthProvider.credentialFromResult(credencials);
    if (!credential) {
      throw new Error("Google SigIn Falló");
    }
    await signInWithCredential(firebase.auth, credential);
    return { ok: true };
  },
});
