'use client'
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

export default function Users() {
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
            <DialogRoot>
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
                  <Field label="Nome">
                    <Input
                      placeholder="Nome do Usuário"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Celular">
                    <Input
                      placeholder="(00) 0 0000-0000"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="E-mail">
                    <Input
                      placeholder="exemplo@email.com"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Senha">
                    <Input
                      placeholder="**********"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button className="bg-red-400 w-20 h-8">Cancelar</Button>
                  </DialogActionTrigger>
                  <Button className="bg-green-400 w-20 h-8">Concluir</Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
            <UsersTable />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
}
