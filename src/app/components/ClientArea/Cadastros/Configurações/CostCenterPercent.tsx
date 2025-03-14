'use client'
import { Button, HStack, Input, Stack, Table } from '@chakra-ui/react'
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '../../../ui/pagination'
const CostCenterPercent = () => {
  return (
    <Stack width="full" gap="20">
      <Table.Root size="md">
        <Table.Header>
          <Table.Row className="bg-slate-100 border-b-2 border-gray-300">
            <Table.ColumnHeader className="text-black">
              Centro de Custo
            </Table.ColumnHeader>
            <Table.ColumnHeader className="text-black">%</Table.ColumnHeader>
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
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {/* <div className="flex w-full justify-end items-end">
        <PaginationRoot count={items.length * 5} pageSize={5} page={1}>
          <HStack wrap="wrap">
            <PaginationPrevTrigger className="hover:bg-green-300 transisiton duration-300" />
            <PaginationItems className="hover:bg-green-300 transisiton duration-300" />
            <PaginationNextTrigger className="hover:bg-green-300 transisiton duration-300" />
          </HStack>
        </PaginationRoot>
      </div> */}
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

export default CostCenterPercent
