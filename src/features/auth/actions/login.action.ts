"use server";

import { AuthError } from "next-auth";
import { signIn } from "../next-auth/auth";
import { loginSchema } from "../schemas";

type LoginState = {
  success: boolean;
  message?: string;
};

export async function loginAction(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const result = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "Usuário ou senha faltando.",
    };
  }

  const { email, password } = result.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });

    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return {
          success: false,
          message: "*Usuário ou senha inválidos.",
        };
      }

      return {
        success: false,
        message: "*Não foi possível realizar o login.",
      };
    }

    throw error;
  }
}
