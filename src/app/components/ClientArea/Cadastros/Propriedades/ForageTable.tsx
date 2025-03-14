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

const ForageTable = () => {
  return (
    <Stack width="full" gap="20">
      <Table.Root size="md">
        <Table.Header>
          <Table.Row className="bg-slate-100 border-b-2 border-gray-300">
            <Table.ColumnHeader className="text-black">
              Forrageira
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">
              M.S. Verão (ton/ha)
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">
              M.S. Inverno (ton/ha)
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">
              Suporte Verão (UA/ha)
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">
              Suporte Inverno (UA/ha)
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id} className="bg-slate-100">
              <Table.Cell className="border-b-2 border-gray-300">
                {item.Forrage}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-gray-300">
                {item.MSVerao}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-gray-300">
                {item.MSInver}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-gray-300">
                {item.SupVer}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-gray-300">
                {item.SupInv}
              </Table.Cell>

              {/* <Table.Cell className="border-b-2 border-gray-300">
                <div className="flex justify-center items-center gap-2"></div>
              </Table.Cell> */}
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
    Forrage: 'Fazenda Freitag',
    MSVerao: 'Setor 1',
    MSInver: 'teste',
    SupVer: 'teste',
    SupInv: 'teste',
  },
  {
    id: 2,
    Forrage: 'Fazenda Moreira',
    MSVerao: 'Setor 1',
    MSInver: 'teste',
    SupVer: 'teste',
    SupInv: 'teste',
  },
  {
    id: 3,
    Forrage: 'Fazenda Ananias',
    MSVerao: 'Setor 1',
    MSInver: 'teste',
    SupVer: 'teste',
    SupInv: 'teste',
  },

  {
    id: 4,
    Forrage: 'Fazenda Barichello',
    MSVerao: 'Setor 1',
    MSInver: 'teste',
    SupVer: 'teste',
    SupInv: 'teste',
  },
]

export default ForageTable
