import { defineAction } from "astro:actions";
import { signOut } from "firebase/auth";
import { firebase } from "src/firebase/config";

export const logout = defineAction({
  accept: "json",
  handler: async () => {
    return await signOut(firebase.auth);
  },
});
