import { APP_ROUTES } from "@/app/Constants/app-routes"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"

interface PrivateRouteProps {
    children: ReactNode
    isAuthenticated: boolean
    isPrivate: boolean // Nova prop para indicar se a rota é privada
}
const PrivateRoute = ({ children, isAuthenticated, isPrivate }: PrivateRouteProps) => {
    const router = useRouter()
  
    useEffect(() => {
        console.log(`isPrivate: ${isPrivate}, isAuthenticated: ${isAuthenticated}`)
      if (isPrivate && !isAuthenticated) {
        router.push(APP_ROUTES.public.signIn)
      }
    }, [isAuthenticated, isPrivate, router])
  
    return (
      <>
        {children}
      </>
    )
  }
  
  export default PrivateRoute