import { useForm } from "react-hook-form"
import { signInSchema, SignInSchema } from "./schemas/sign-in.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../../components/ui/input/input.component"
import { Label } from "../../../components/ui/label/label.component"
import { useAuthentication } from "../../../contexts/authentication"

export function LoginPage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: 'everson.silva2706@gmail.com',
      password: '123'
    }
  })

  const { signIn } = useAuthentication()
  
  const handleSubmitForm = async ({ email, password }: SignInSchema) => {
    try {
      signIn.withEmailAndPassword({ email, password }) 
    } catch (error) {
      console.log(error)
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
      <button type="submit" disabled={isSubmitting}>Login</button>
    </form>
  )
}