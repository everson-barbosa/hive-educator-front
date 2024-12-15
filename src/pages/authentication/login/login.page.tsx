import { useForm } from "react-hook-form"
import { signInSchema, SignInSchema } from "./schemas/sign-in.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../../components/ui/input/input.component"
import { Label } from "../../../components/ui/label/label.component"
import { signInService } from "../../../services/authentication/sign-in/sign-in.service"

export function LoginPage() {
  const { register, handleSubmit } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  })

  const handleSubmitForm = async ({ email, password }: SignInSchema) => {
    try {
      await signInService({ email, password }) 
    } catch (error) {
      console.error('Error on try to sign-in', error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input {...register('email')} id="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input {...register('password')} id="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}