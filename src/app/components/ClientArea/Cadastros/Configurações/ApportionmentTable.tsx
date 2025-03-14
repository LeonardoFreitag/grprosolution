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

const ApportionmentTable = () => {
  return (
    <Stack width="full" gap="20">
      <Table.Root size="md">
        <Table.Header>
          <Table.Row className="bg-slate-100 border-b-2 border-gray-300">
            <Table.ColumnHeader className="text-black">
              Grupo de Rateio
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">
              Configuração
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
                {item.sector}
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
                        <DialogTitle>Editar Propriedade</DialogTitle>
                      </DialogHeader>
                      <DialogBody className="">
                        <Field label="Nome">
                          <Input
                            placeholder="Nome da Propriedade"
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
  { id: 1, name: 'Fazenda Freitag', sector: 'Setor 1' },
  {
    id: 2,
    name: 'Fazenda Barichello',
    sector: 'Setor 2',
  },
  { id: 3, name: 'Fazenda Moreira', sector: 'Setor 3' },
]

export default ApportionmentTable
