export function ForgetPasswordPage() {
  return (
    <form action="">
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />
      </div>
      <button type="submit">Send</button>
    </form>
  )
}