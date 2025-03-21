'use client'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toaster, Toaster } from "@/app/components/ui/toaster"
import PageSpinner from '@/app/components/PageSpinner/PageSpinner'

import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/app/hooks/AuthContext'

const ForgotSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
})

interface ForgotData {
  email: string
}

export default function ForgotPassword() {
  const router = useRouter()
    const { forgotPassword } = useContext(AuthContext)
      const [isLoading, setIsLoading] = useState(false)
    
    const { register, handleSubmit } = useForm({
      resolver: yupResolver(ForgotSchema),
      defaultValues: {
        email: '',
      },
    })

   
    const handleForgot = async (data: ForgotData) => {
      setIsLoading(true)
    const success = await forgotPassword(data)
    console.log(success)
    if (success) {
      toaster.create({
        title: 'Sucesso',
        description: 'E-Mail de Recuperação Enviado com Sucesso!',
        type: 'success',
        duration: 2000,
      })
      await new Promise(resolve => setTimeout(resolve, 2000))
      router.push('ForgotPassword/PasswordResetSent')
    } else {
      toaster.create({
        title: 'Erro',
        description: 'O E-Mail utizilado pode ser inválido!',
        type: 'error',
        duration: 2000,
      })
      
    }
    setIsLoading(false)
      
  }
  return (
    <div className="grid w-full h-screen bg-slate-100 justify-center items-center">
      <div className="flex bg-white border-2 shadow-md rounded-md">
        <div className="flex flex-col w-96 h-52 rounded-lg p-5">
          <h1 className="text-xl font-bold text-center">Esqueceu sua senha?</h1>
          <form className="flex flex-col  gap-6 mt-5" onSubmit={handleSubmit(handleForgot)}>
            <input
              type="text"
              placeholder="Informe seu e-mail de cadastro"
              className="border border-gray-300 rounded-md p-2 bg-white"
              {...register('email')}
            />
            <button className="bg-green-400 text-white rounded-md p-2" type="submit">
              Enviar
            </button>
            {isLoading && <PageSpinner />}
            <Toaster />
          </form>
        </div>
      </div>
    </div>
  )
}
