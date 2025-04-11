'use client'

import { Button } from '@/app/components/ui/button'
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog'
import { Field } from '@/app/components/ui/field'
import { Input } from '@chakra-ui/react'
import PropertySelect from './PropertySelect'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react'
import { AuthContext } from '@/app/hooks/AuthContext'
import api from '@/app/services/apiClient'
import { toaster } from '@/app/components/ui/toaster'

// Esquema de validação com Yup
const SectorSchema = Yup.object().shape({
  customerId: Yup.string().required('O ID do cliente é obrigatório'),
  farmId: Yup.string().required('O ID da propriedade é obrigatório'),
  sectorName: Yup.string().required('O nome do setor é obrigatório'),
})

interface SectorData {
  customerId: string
  farmId: string
  sectorName: string
}

export function SectorDialog() {
  const { user } = useContext(AuthContext) // Obter o token e o customerId do contexto
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<SectorData>({
    resolver: yupResolver(SectorSchema),
    defaultValues: {
      customerId: user?.user.customerId || '',
      farmId: '',
      sectorName: '',
    },
  })

  const handleCreateSector = async (data: SectorData) => {
    try {
      // Validação adicional para garantir que os dados estão completos
      if (!data.customerId || !data.farmId || !data.sectorName) {
        toaster.create({
          title: 'Erro',
          description: 'Todos os campos são obrigatórios.',
          type: 'error',
          duration: 2000,
        })
        return
      }
  
      setIsSubmitting(true)
      console.log('Dados do setor:', data) // Log dos dados do setor
  
      const response = await api.post(
        '/sector',
        {
          customerId: data.customerId,
          farmId: data.farmId,
          sectorName: data.sectorName,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`, // Enviar o token no cabeçalho
          },
        }
      )
  
      if (response.status === 200) {
        toaster.create({
          title: 'Sucesso',
          description: 'Setor criado com sucesso!',
          type: 'success',
          duration: 2000,
        })
        reset() // Limpar o formulário
      } else {
        toaster.create({
          title: 'Erro',
          description: 'Erro ao criar o setor!',
          type: 'error',
          duration: 2000,
        })
      }
    } catch (error) {
      console.error('Erro ao criar o setor:', error)
      toaster.create({
        title: 'Erro',
        description: 'Erro ao criar o setor. Tente novamente.',
        type: 'error',
        duration: 2000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function setValue(field: string, value: string): void {
    const currentValues = watch(); // Get current form values
    reset({
      ...currentValues,
      [field]: value, 
    });
  }

  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button
          className="bg-green-400 w-32 h-10 text-white text-sm text-center"
          variant="outline"
        >
          Novo Setor
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-slate-100 w-full z-40 relative ">
        <DialogHeader>
          <DialogTitle>Novo Setor</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleCreateSector)}>
          <DialogBody className="flex flex-col gap-4">
          <Field label="Propriedade">
           <PropertySelect
             value={watch('farmId')} // Obter o valor do campo farmId do formulário
             onChange={(value) => setValue('farmId', value)} // Atualizar o valor do campo farmId com o id da propriedade
           />
           {errors.farmId && (
              <p className="text-red-500 text-sm">{errors.farmId.message}</p>
           )}
          </Field>
            <Field label="Nome do Setor">
              <Input
                placeholder="Nome do Setor"
                {...register('sectorName')}
                className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition duration-300"
              />
              {errors.sectorName && (
                <p className="text-red-500 text-sm">{errors.sectorName.message}</p>
              )}
            </Field>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button
                type="button"
                className="bg-red-400 w-20 h-8"
                onClick={() => reset()}
              >
                Cancelar
              </Button>
            </DialogActionTrigger>
            <Button
              type="submit"
              className="bg-green-400 w-20 h-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Concluir'}
            </Button>
          </DialogFooter>
        </form>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}