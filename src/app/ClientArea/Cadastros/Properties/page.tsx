'use client'
import { Input, Tabs } from '@chakra-ui/react'
import { Button } from '../../../components/ui/button'
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
} from '../../../components/ui/dialog'
import { Field } from '@/app/components/ui/field'
import PropertiesTable from '@/app/components/ClientArea/Cadastros/Propriedades/PropertiesTable'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback, useContext, useState } from 'react'
import api from '@/app/services/apiClient'
import { AuthContext } from '@/app/hooks/AuthContext'
import { Toaster, toaster } from '@/app/components/ui/toaster'

const PropertySchema = Yup.object().shape({
  customerId: Yup.string().required('O ID do cliente é obrigatório'),
  farmName: Yup.string().required('O nome da propriedade é obrigatório'),
})



interface PropertyData {
  customerId: string
  farmName: string
}

export default function Properties() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const [reloadFlag, setReloadFlag] = useState(false)
  
  const reloadProperties = useCallback(() => {
    setReloadFlag((prev) => !prev) // Alterna o estado para forçar a atualização
  }, [])
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PropertyData>({
    resolver: yupResolver(PropertySchema),
    defaultValues: {
      customerId: user?.user.customerId || '', // Use o ID do cliente do contexto
      farmName: '',
    },
  })

  const handleCreateProperty = async (data: PropertyData) => {
    try {
      setIsSubmitting(true)
      const response = await api.post('/farm', data)

      if (response.status === 200) {
        toaster.create({
          title: 'Sucesso',
          description: 'Propriedade criada com sucesso!',
          type: 'success',
          duration: 2000,
        })
        reset()
        setIsDialogOpen(false) // Fecha o diálogo
        reloadProperties()
      } else {
        toaster.create({
          title: 'Erro',
          description: 'Erro ao criar a propriedade!',
          type: 'error',
          duration: 2000,
        })
      }
    } catch (error) {
      console.error(error)
      toaster.create({
        title: 'Erro',
        description: 'Erro ao criar a propriedade. Tente novamente.',
        type: 'error',
        duration: 2000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex w-full h-screen bg-slate-100 justify-center items-start pt-4">
      <div className="w-11/12 h-5/6 p-2 bg-slate-100 border-2 border-green-200 shadow-lg shadow-green-300">
        <Tabs.Root
          colorPalette="green"
          variant={'line'}
          defaultValue="property"
          className=""
        >
          <Tabs.List className="flex gap-8">
            <Tabs.Trigger value="property" className="">
              Propriedade
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="property"
            inset="0"
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '300ms',
            }}
            _closed={{
              animationName: 'fade-out, scale-out',
              animationDuration: '120ms',
            }}
          >
            <DialogRoot>
              <DialogTrigger asChild>
                <Button
                  className="bg-green-400 w-32 h-10 text-white text-sm text-center"
                  variant="outline"
                >
                  Nova Propriedade
                </Button>
              </DialogTrigger>
              <DialogContent className=" bg-slate-100 z-40 relative">
                <DialogHeader>
                  <DialogTitle>Nova Propriedade</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(handleCreateProperty)}>
                  <DialogBody className="flex flex-col gap-4">
                    
                    <Field label="Nome da Propriedade">
                      <Input
                        placeholder="Nome da Propriedade"
                        className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition duration-300"
                        {...register('farmName')}
                      />
                      {errors.farmName && (
                        <p className="text-red-500 text-sm">
                          {errors.farmName.message}
                        </p>
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
            <PropertiesTable reloadFlag={reloadFlag} />
            <Toaster /> {/* Adicione o componente Toaster aqui para exibir as mensagens */}
          </Tabs.Content>
          
        </Tabs.Root>
      </div>
    </div>
  )
}
