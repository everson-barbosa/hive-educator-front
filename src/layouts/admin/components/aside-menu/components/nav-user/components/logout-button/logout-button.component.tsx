import { Button } from "@/components/ui/button/button.component";
import { useAuthentication } from "@/contexts/authentication/authentication.context";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const { signOut } = useAuthentication()

  return (
    <Button 
      className="px-2 py-1\.5 h-8 w-full justify-start hover:bg-transparent" 
      variant='ghost' 
      type="button" 
      onClick={signOut}
      >
      <LogOut />
      Log out
    </Button>
  )
}