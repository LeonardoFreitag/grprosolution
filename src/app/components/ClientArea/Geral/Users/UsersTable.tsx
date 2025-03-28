'use client'
import { useEffect, useRef, useState } from 'react'
import { Button, HStack, Input, Stack, Table, SkeletonText } from '@chakra-ui/react'
import { withMask } from 'use-mask-input'
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '../../../ui/pagination'
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
} from '../../../ui/dialog'
import { Field } from '@/app/components/ui/field'
import { PenLine, Trash } from 'lucide-react'
import api from '@/app/services/apiClient'
import { IUser, UserAuthModel } from '@/app/Models/UserAuthModel'

interface UsersTableProps {
  customerId: string;
  reloadFlag: boolean;
}

const UsersTable = ({ customerId, reloadFlag }: UsersTableProps) => {
  interface User {
    id: string;
    name: string;
    cellphone: string;
    createdAt: string;
  }
  
  const [users, setUsers] = useState<IUser[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const isMounted = useRef(true)
  const formatPhoneNumber = (phone: string) => {
    if (!phone) return '';
    return phone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
  };


  const loadUsers = async () => {
    try {
      setIsLoading(true)
      const response = await api.get<IUser[]>('/user', {
        params: { customerId },
      })
      const data = response.data
      if (isMounted.current) {
        setUsers(data)
        console.log('Usuários carregados:', data)
      }
    } catch (error) {
      if (isMounted.current) {
        console.error('Erro ao buscar usuários:', error)
      }
    } finally {
      if (isMounted.current) {
        setIsLoading(false)
      }
    }
  }

  const updateUser = async (userId: string, updatedData: Partial<IUser>) => {
    console.log('Atualizando usuário:', userId, updatedData);
    try {
      const response = await api.patch('/user/', updatedData, {
        params: { id: userId },
      });
      if (response.status === 200) {
        console.log('Usuário atualizado com sucesso:', response.data);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId ? { ...user, ...updatedData } : user
          )
        ); 
      } else {
        console.error('Erro ao atualizar usuário:', response);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao atualizar usuário:', (error as any)?.response?.data || error.message);
      } else {
        console.error('Erro ao atualizar usuário:', error);
      }
    }
  };

  const deleteUser = async (userId: string) => {
    console.log('Deletando usuário:', userId)
    try {
      const response = await api.delete('/user', {
        params: { id: userId },
      });
      console.log('Resposta da API:', response);
      if (response.status === 204) {
        console.log('Usuário deletado com sucesso:', userId);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // Remove o usuário da lista
      } else {
        console.error('Erro ao deletar usuário:', response);
      }
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  useEffect(() => {
    isMounted.current = true
    loadUsers()

    return () => {
      isMounted.current = false
    }
  }, [customerId, reloadFlag]) // Recarrega os usuários quando reloadFlag muda

  if (isLoading) {
    return (
      <Stack width="full" gap="20">
        <SkeletonText noOfLines={7} gap="4" />
      </Stack>
    )
  }

  return (
    <Stack width="full" gap="20">
      <Table.Root size="md">
        <Table.Header>
          <Table.Row className="bg-slate-100 border-b-2 border-gray-300">
            <Table.ColumnHeader className="text-black">Nome</Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">Celular</Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">E-Mail</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
  {users.map((user) => (
    <Table.Row key={user.id} className="bg-slate-100">
      <Table.Cell className="border-b-2 border-gray-300 text-black">{user?.name}</Table.Cell>
      <Table.Cell className="border-b-2 border-gray-300">
        {formatPhoneNumber(user?.cellphone || '')}
      </Table.Cell>
      <Table.Cell className="border-b-2 border-gray-300">{user?.email}</Table.Cell>
      <Table.Cell className="border-b-2 border-gray-300">
        <div className="flex justify-center items-center gap-2">
          <DialogRoot>
            <DialogTrigger asChild>
              <Button
                className="bg-green-400 w-10 h-8 text-white text-sm text-center"
                variant="outline"
                onClick={() => setSelectedUser(user)} // Define o usuário selecionado
              >
                <PenLine size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent className=" bg-slate-100 ">
              <DialogHeader>
                <DialogTitle>Editar Usuário</DialogTitle>
              </DialogHeader>
              <DialogBody className="">
                <Field label="Nome">
                  <Input
                    placeholder="Nome do Usuário"
                    className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    value={selectedUser?.name || ''}
                    onChange={(e) =>
                      setSelectedUser((prev) => prev ? { ...prev, name: e.target.value } : null)
                    }
                  />
                </Field>
                <Field label="Celular">
                  <Input
                    placeholder="(00) 0 0000-0000"
                    className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    value={selectedUser?.cellphone || ''}
                    onChange={(e) =>
                      setSelectedUser((prev) => prev ? { ...prev, cellphone: e.target.value } : null)
                    }
                  />
                </Field>
                <Field label="E-mail">
                  <Input
                    placeholder="exemplo@email.com"
                    className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    value={selectedUser?.email || ''}
                    onChange={(e) =>
                      setSelectedUser((prev) => prev ? { ...prev, email: e.target.value } : null)
                    }
                  />
                </Field>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button className="bg-red-400 w-20 h-8">Cancelar</Button>
                </DialogActionTrigger>
                <Button
                className="bg-green-400 w-20 h-8"
                onClick={() => {
                  if (selectedUser) {
                    updateUser(selectedUser.id, {
                      id: selectedUser.id,
                      customerId: selectedUser.customerId,
                      isAdmin: selectedUser.isAdmin,
                      name: selectedUser.name,
                      cellphone: selectedUser.cellphone,
                      email: selectedUser.email,
                    });
                  }
                }}
              >
                Salvar
              </Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
          <Button
            className="bg-red-400 w-10 h-8 text-white text-sm text-center"
            onClick={() => deleteUser(user.id)}
          >
            <Trash size={20} />
          </Button>
        </div>
      </Table.Cell>
    </Table.Row>
  ))}
</Table.Body>
      </Table.Root>

      <div className="flex w-full justify-end items-end">
        <PaginationRoot count={users.length * 5} pageSize={5} page={1}>
          <HStack wrap="wrap">
            <PaginationPrevTrigger className="hover:bg-green-300 transisiton duration-300" />
            <PaginationItems className="hover:bg-green-300 transisiton duration-300" />
            <PaginationNextTrigger className="hover:bg-green-300 transisiton duration-300" />
          </HStack>
        </PaginationRoot>
      </div>
    </Stack>
  )
}

export default UsersTable