import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";

export function SignIn(){
  return (
    <>
      <Helmet title='Login' />
      <div className="p-24">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acesse sua conta</h1>
            <p className="text-sm text-muted-foreground">Informe seu e-mail e senha para entrar</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-MAIL</Label>
              <Input id="email" type="email"></Input>
            </div>
            <Button className="w-full" type="submit">Acessar</Button>
          </form>
        </div>
      </div>
    </>
  )
}