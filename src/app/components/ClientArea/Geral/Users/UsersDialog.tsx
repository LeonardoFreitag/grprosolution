import { useContext, useCallback, useState } from 'react'
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
import api from '@/app/services/apiClient'
import { AuthContext } from '@/app/hooks/AuthContext'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toaster } from "@/app/components/ui/toaster"

const UserSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  cellphone: Yup.string().required('Celular obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
})

interface UserData {
  name: string
  cellphone: string
  email: string
  password: string
}

interface UsersDialogProps {
  onUserAdded: () => void; // Callback para notificar a adição de um usuário
}

const UsersDialog: React.FC<UsersDialogProps> = ({onUserAdded}) => {
  const { user } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(UserSchema),
    defaultValues: {
      name: '',
      cellphone: '',
      email: '',
      password: '',
    },
  })

  const handleCreateUser = useCallback(async (data: UserData) => {
    try {
      const newProfile = {
        customerId: user?.user.customerId,
        isAdmin: false,
        name: data.name,
        email: data.email,
        cellphone: data.cellphone,
        password: data.password,
      }

      const response = await api.post('/user', newProfile)
      if (response.status === 200) {
        toaster.create({
          title: 'Sucesso',
          description: 'Usuário criado com sucesso!',
          type: 'success',
          duration: 2000,
        })
        reset()
        onUserAdded() // Chama o callback para notificar a adição do usuário
        setIsOpen(false) // Fecha o modal após a criação do usuário
      } else {
        toaster.create({
          title: 'Erro',
          description: 'Erro ao criar usuário!',
          type: 'error',
          duration: 2000,
        })
      }
    } catch (error) {
      toaster.create({
        title: 'Erro',
        description: 'Erro ao criar usuário!',
        type: 'error',
        duration: 2000,
      })
    }
  }, [user, reset, onUserAdded])

  return (
    <DialogRoot open={isOpen} onOpenChange={({ open }) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button
          className="bg-green-400 w-32 h-10 text-white text-sm text-center"
          variant="outline"
        >
          Novo Usuário
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-slate-100 ">
        <DialogHeader>
          <DialogTitle>Novo Usuário</DialogTitle>
        </DialogHeader>
        <DialogBody className="">
          <form onSubmit={handleSubmit(handleCreateUser)}>
            <Field label="Nome">
              <Input
                placeholder="Nome do Usuário"
                className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                {...register('name')}
              />
            </Field>
            <Field label="Celular">
              <Input
                placeholder="(00) 0 0000-0000"
                className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                {...register('cellphone')}
              />
            </Field>
            <Field label="E-mail">
              <Input
                placeholder="exemplo@email.com"
                className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                {...register('email')}
              />
            </Field>
            <Field label="Senha">
              <Input
                placeholder="**********"
                className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                {...register('password')}
              />
            </Field>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button className="bg-red-400 w-20 h-8">Cancelar</Button>
              </DialogActionTrigger>
              <Button className="bg-green-400 w-20 h-8" type="submit">
                Concluir
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default UsersDialog