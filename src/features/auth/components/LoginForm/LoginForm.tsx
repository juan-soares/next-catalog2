"use client";

import { useActionState } from "react";
import { loginAction } from "../../actions";
import { LoaderIcon } from "lucide-react";

const initialState = {
  success: false,
  message: "",
};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="email">Usuário:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="*****"
          required
        />
      </div>

      {state.message && <p>{state.message}</p>}

      <button type="submit" disabled={pending}>
        {pending ? <LoaderIcon /> : "Entrar"}
      </button>
    </form>
  );
}
