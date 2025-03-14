'use client'
import { PenLine, Trash } from 'lucide-react'
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

const WaterFountainTable = () => {
  return (
    <Stack width="full" gap="20">
      <Table.Root size="md">
        <Table.Header>
          <Table.Row className="bg-slate-100 border-b-2 border-gray-300">
            <Table.ColumnHeader className="text-black">
              Descrição
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">
              Material
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">
              Tipo/Finalidade
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id} className="bg-slate-100">
              <Table.Cell className="border-b-2 border-gray-300">
                {item.Description}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-gray-300">
                {item.Material}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-gray-300">
                {item.Type}
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
  {
    id: 1,
    Description: 'Fazenda Freitag',
    Material: 'Calha',
    Type: 'Gado',
  },
  {
    id: 2,
    Description: 'Fazenda Moreira',
    Material: 'Alvenaria',
    Type: 'Gado',
  },
  {
    id: 3,
    Description: 'Fazenda Ananias',
    Material: 'Aluminio',
    Type: 'Aviário',
  },

  {
    id: 4,
    Description: 'Fazenda Barichello',
    Material: 'Setor 4',
    Type: 'Alguma coisa',
  },
]

export default WaterFountainTable
