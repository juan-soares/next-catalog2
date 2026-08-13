"use server";

import { loginSchema } from "../schemas";
import { authenticateUser } from "../services";

export async function loginAction(formData: FormData) {
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

  const user = await authenticateUser({ email, password });

  if (!user) {
    return {
      success: false,
      message: "Usuário ou senha incorretos.",
    };
  }
}
