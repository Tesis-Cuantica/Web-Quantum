import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="login-container min-h-screen relative overflow-hidden">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      <div className="login-background min-h-screen flex items-center justify-center p-4">
        <div className="login-card w-full max-w-md relative z-10">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
