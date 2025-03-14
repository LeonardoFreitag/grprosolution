'use client'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toaster, Toaster } from "@/app/components/ui/toaster"
import PageSpinner from '@/app/components/PageSpinner/PageSpinner'

import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/app/hooks/AuthContext'

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
})

interface SignInData {
  email: string
  password: string
}

export default function SignIn() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useContext(AuthContext)
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSignIn = async (data: SignInData) => {
    setIsLoading(true)
    const response = await signIn(data)
    console.log(response)
    if (response) {
      toaster.create({
        title: 'Sucesso',
        description: 'E-Mail de Recuperação Enviado com Sucesso!',
        type: 'success',
        duration: 2000,
      })
      await new Promise(resolve => setTimeout(resolve, 2000))
      router.push('/ClientArea/Geral/Users')
    } else {
      toaster.create({
        title: 'Erro',
        description: 'O E-Mail ou senha utizilados podem ser inválidos!',
        type: 'error',
        duration: 2000,
      })
      await new Promise(resolve => setTimeout(resolve, 2000))
      router.push('/Institutional/SignIn')
    }
    setIsLoading(false)
  }

  return (
    <div className="grid w-full h-screen bg-slate-100 justify-center items-center">
      <div className="flex bg-white border-2 shadow-md rounded-md">
        <div className="flex flex-col w-96 h-96 rounded-lg p-5">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form className="flex flex-col gap-6 mt-5">
            <input
              type="text"
              placeholder="E-mail"
              className="border border-gray-300 bg-white rounded-md p-2"
              {...register('email')}
            />
            <input
              type="password"
              placeholder="Senha"
              className="border border-gray-300 bg-white rounded-md p-2"
              {...register('password')}
            />
            <button
              className="bg-green-400 text-white rounded-md p-2"
              onClick={handleSubmit(handleSignIn)}
            >
              Entrar
            </button>
          </form>
          <div className="flex flex-col justify-center items-center gap-5 pt-8">
            <a
              href="/Institutional/SignUp"
              className="w-56 rounded-md text-center text-sm p-2 hover:bg-green-300 transition duration-300"
            >
              Criar uma conta
            </a>
            <a
              href="/Institutional/ForgotPassword"
              className="text-xs text-green-400"
            >
              Esqueceu a senha?
            </a>
            {isLoading && <PageSpinner />}
                        <Toaster />
          </div>
        </div>
      </div>
    </div>
  )
}
