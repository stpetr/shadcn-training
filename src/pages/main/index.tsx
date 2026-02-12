import { AppleIcon, LogIn } from "lucide-react"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FieldGroup, FieldLabel, FieldSeparator } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export const MainPage = () => {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-muted">
      <h1 className="mb-4 text-xl font-medium">UI Kit Training</h1>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-lg text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">Login with your Apple or Google account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Button variant="outline">
              <AppleIcon  /> Login with Apple
            </Button>
            <Button variant="outline">
              <LogIn /> Login with Google
            </Button>
          </div>
          <FieldSeparator>Or continue with</FieldSeparator>
          <form className="flex flex-col gap-6">
            <FieldGroup className="gap-0">
              <FieldLabel className="mb-2" htmlFor="email">Email</FieldLabel>
              <Input id="email" placeholder="m@example.com" />
            </FieldGroup>
            <FieldGroup className="gap-0">
              <FieldLabel className="w-full flex justify-between mb-2" htmlFor="password">
                Password
                <Button variant="link" className="p-0 text-sm font-light">Forgot your password?</Button>
              </FieldLabel>
              <Input id="password" type="password" />
            </FieldGroup>
            <Button type="submit" className="mb-0">Login</Button>
            <div className="text-center text-sm font-light">
              Don't have an account yet? <Button className="p-0 text-sm font-light underline" variant="link">Sign up</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
