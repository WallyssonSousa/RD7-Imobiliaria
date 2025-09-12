import { LoginForm } from "@/components/login-form"
import { LoginHero } from "@/components/login-hero"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-md mx-auto lg:mx-0 lg:max-w-none">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Home className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-foreground">RD7</span>*/}
              <Image src={logo} alt="RD7 Logo" className="h-20 w-auto" />
            </Link> 
          </div>

          <LoginForm />

          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Voltar ao site
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:block flex-1">
        <LoginHero />
      </div>
    </div>
  )
}
