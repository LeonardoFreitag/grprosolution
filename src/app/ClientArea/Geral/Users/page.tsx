'use client'
import { useCallback, useContext, useState } from 'react'
import UsersTable from '@/app/components/ClientArea/Geral/Users/UsersTable'
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
import UsersDialog from '@/app/components/ClientArea/Geral/Users/UsersDialog'
import { AuthContext } from '@/app/hooks/AuthContext'

export default function Users() {
  const { user } = useContext(AuthContext)
  const [reloadFlag, setReloadFlag] = useState(false)

  // Função para recarregar os usuários
  const reloadUsers = useCallback(() => {
    setReloadFlag((prev) => !prev) // Alterna o estado para forçar a atualização
  }, [])

  return (
    <div className="flex w-full h-screen bg-slate-100 justify-center items-start pt-4">
      <div className="w-11/12 h-5/6 p-2 bg-slate-100 border-2 border-green-200 shadow-lg shadow-green-300">
        <Tabs.Root variant={'line'} colorPalette="green" defaultValue="Users">
          <Tabs.List className="flex gap-4">
            <Tabs.Trigger value="Users">Usuários</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="Users"
          >
            <UsersDialog onUserAdded={reloadUsers} />
            {user && <UsersTable customerId={user.user.customerId} reloadFlag={reloadFlag} />}
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
}