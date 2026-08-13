import { loginAction } from "../../actions";

export function LoginForm() {
  return (
    <form action={loginAction}>
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

      <button type="submit">Entrar</button>
    </form>
  );
}
