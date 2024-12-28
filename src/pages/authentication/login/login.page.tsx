import { useForm } from "react-hook-form"
import { signInSchema, SignInSchema } from "./schemas/sign-in.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../../components/ui/input/input.component"
import { Label } from "../../../components/ui/label/label.component"
import { useAuthentication } from "../../../contexts/authentication/authentication.context"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button/button.component"
import { useToast } from "@/hooks/use-toast/use-toast.hook"

export function LoginPage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: 'everson.silva2706@gmail.com',
      password: '123'
    }
  })

  const { toast } = useToast()
  const { signIn } = useAuthentication()
  
  const handleSubmitForm = async ({ email, password }: SignInSchema) => {
    try {
      await signIn.withEmailAndPassword({ email, password })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao realizar autenticação",
        description: "Verifique seu e-mail e senha e tente novamente",
      })

      throw error
    }
  }
  
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input {...register('email')} id="email" type="email" required />
      </div>
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            to="#"
            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        <Input {...register('password')} id="password" type="password" required />
      </div>
      <Button type="submit" disabled={isSubmitting}>Login</Button>
    </form>
  )
}