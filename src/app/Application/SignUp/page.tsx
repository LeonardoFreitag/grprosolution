'use client'
import api from '@/app/services/apiClient'
import React, { useCallback, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { toaster, Toaster } from "@/app/components/ui/toaster"
import PageSpinner from '@/app/components/PageSpinner/PageSpinner'

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
  confirm_password: Yup.string().required('Confirmação de senha obrigatória'),
})

interface SignUpData {
  email: string
  password: string
  confirm_password: string
}

export default function SignUp() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
  })

  useEffect(() => {
    toaster.create({
      title: 'Teste',
      description: 'Toaster funcionando!',
      type: 'success',
      duration: 5000,
    })
  }, [])

  const handleSignUp = useCallback( async (data: SignUpData) => {
    if (data.password !== data.confirm_password) {
      toaster.create({
        title: 'Erro',
        description: 'As senhas não coincidem!',
        type: 'error',
        duration: 2000,
      })
    }
    try {
      setIsLoading(true)
      const newCustomer = {
        email: data.email,
        password: data.password,
        password_confirmation: data.confirm_password,
      }
      const response = await api.post('/customer', newCustomer)
      if (response.status === 200) {
        toaster.create({
          title: 'Sucesso',
          description: 'Cadastro realizado com sucesso!',
          type: 'success',
          duration: 2000,
        })
        router.push('/Application/SignIn')
      } else {
        toaster.create({
          title: 'Erro',
          description: 'Erro ao realizar cadastro!',
          type: 'error',
          duration: 2000,
        })
      }
    } catch (error) {
      toaster.create({
        title: 'Erro',
        description: 'Erro ao realizar cadastro!',
        type: 'error',
        duration: 2000,
      })
    } finally {
      setIsLoading(false)
    }

  }, [])

  return (
    <div className="flex flex-col overflow-y-hidden w-full min-h-[calc(100vh-56px)] bg-slate-100 justify-center items-center">
      <div className="flex bg-white border-2 shadow-md rounded-md ">
        <div className="flex flex-col w-96 h-96 rounded-lg p-5">
          <h1 className="text-2xl font-bold text-center">Cadastre-se</h1>
          <form className="flex flex-col gap-10 mt-6" onSubmit={handleSubmit(handleSignUp)}>
            <input
              type="text"
              placeholder="E-mail"
              className="border border-gray-300 rounded-md p-2 bg-white"
              {...register('email')}
            />
            <input
              type="password"
              placeholder="Senha"
              className="border border-gray-300 rounded-md p-2 bg-white"
              {...register('password')}
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="border border-gray-300 rounded-md p-2 bg-white"
              {...register('confirm_password')}
            />
            <button
              className="bg-green-400 text-white rounded-md p-2"
              type="submit"
            >
              Quero ser Agro !
            </button>
            <Toaster />
            {isLoading && <PageSpinner />}
          </form>
        </div>
      </div>
    </div>
  )
}
