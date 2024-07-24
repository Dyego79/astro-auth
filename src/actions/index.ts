import { loginUser, loginWithGoogle, logout, registerUser } from "./auth";

export const server = {
  //acciones
  registerUser,
  logout,
  loginUser,
  loginWithGoogle,
};
