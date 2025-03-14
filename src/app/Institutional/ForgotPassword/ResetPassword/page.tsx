'use client'
import { useEffect, useState, Suspense } from "react";
import { Lock } from "lucide-react";
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toaster, Toaster } from "@/app/components/ui/toaster"
import { useRouter, useSearchParams } from 'next/navigation'

const ResetPasswordSchema = Yup.object().shape({
  token: Yup.string().required('Token obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'As senhas não coincidem')
    .required('Confirmação de senha obrigatória'),
})

interface ResetPasswordData {
  token: string
  password: string
  passwordConfirmation: string
}

function ResetPasswordContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [ working, setWorking ] = useState(false)
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: {
      token: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  useEffect(() => {
    const readingToken = async () => {
      setWorking(true)
      try {
        const token = searchParams.get('token')
        if (token) {
          setValue('token', token)
        }
      } finally {
        setWorking(false)
      }
    }
    readingToken()
  }, [])

  const onSubmit = async (data: ResetPasswordData) => {
    console.log("Nova senha enviada:", data)
    toaster.create({
      title: 'Sucesso',
      description: 'Senha redefinida com sucesso!',
      type: 'success',
      duration: 2000,
    })
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.push('/Institutional/SignIn')
  }

  return (
    <>
      {!working && <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md w-96">
          <Lock className="w-16 h-16 text-green-500" />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            Redefinir Senha
          </h2>
          <p className="mt-2 text-gray-600 text-center">
            Insira sua nova senha abaixo.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4 flex flex-col gap-4">
            <input
              type="hidden"
              {...register('token')}
            />
            <input
              type="password"
              placeholder="Nova senha"
              {...register('password')}
              className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="password"
              placeholder="Confirmar senha"
              {...register('passwordConfirmation')}
              className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
            >
              Confirmar Nova Senha
            </button>
          </form>
          <Toaster />
        </div>
      </div>}
    </>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}