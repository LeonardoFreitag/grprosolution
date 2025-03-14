'use client'
import { Button, HStack, Input, Stack, Table } from '@chakra-ui/react'
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

const UsersTable = () => {
  return (
    <Stack width="full" gap="20">
      <Table.Root size="md">
        <Table.Header>
          <Table.Row className="bg-slate-100 border-b-2 border-gray-300">
            <Table.ColumnHeader className="text-black">
              Usuário
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">Fone</Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">
              Data de Cadastro
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id} className="bg-slate-100">
              <Table.Cell className="border-b-2 border-gray-300">
                {item.name}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-gray-300">
                {item.category}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-gray-300">
                {item.price}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-gray-300">
                <div className="flex justify-center items-center gap-2">
                  <DialogRoot>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-green-400 w-10 h-8 text-white text-sm text-center"
                        variant="outline"
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
                          <Button className="bg-red-400 w-20 h-8">
                            Cancelar
                          </Button>
                        </DialogActionTrigger>
                        <Button className="bg-green-400 w-20 h-8">
                          Concluir
                        </Button>
                      </DialogFooter>
                      <DialogCloseTrigger />
                    </DialogContent>
                  </DialogRoot>
                  <Button className="bg-red-400 w-10 h-8 text-white text-sm text-center">
                    <Trash size={20} />
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <div className="flex w-full justify-end items-end">
        <PaginationRoot count={items.length * 5} pageSize={5} page={1}>
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

const items = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
  { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
]

export default UsersTable
