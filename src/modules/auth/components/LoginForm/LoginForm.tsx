import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form>
      <label>Usuário:</label>
      <input
        type="email"
        placeholder="email"
        id="email"
        name="email"
        required
      />

      <label>Senha:</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        name="password"
        required
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
