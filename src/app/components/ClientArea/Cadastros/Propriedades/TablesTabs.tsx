'use client'
import {
  Button,
  HStack,
  Input,
  Stack,
  Table,
  Box,
  Flex,
  Tabs,
} from '@chakra-ui/react'
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
import ForageTable from './ForageTable'
import WaterFountainTable from './WaterFountainTable'

const TablesTabs = () => {
  return (
    <Flex minH="+100vh" width="full" justify="center">
      <Tabs.Root defaultValue="EspecForra" width="full">
        <Tabs.List className="flex gap-8">
          <Tabs.Trigger value="EspecForra">Espécies Forrageiras</Tabs.Trigger>
          <Tabs.Trigger value="Bebedouros">Tipos de Bebedouros</Tabs.Trigger>
        </Tabs.List>
        <Box pos="relative" minH="200px" width="full">
          <Tabs.Content
            value="EspecForra"
            position="absolute"
            inset="0"
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '300ms',
            }}
            _closed={{
              animationName: 'fade-out, scale-out',
              animationDuration: '120ms',
            }}
            className="bg-slate-100 flex flex-col w-full justify-start items-end"
          >
            <DialogRoot>
              <DialogTrigger asChild>
                <Button
                  className="bg-green-400 w-32 h-10 text-white text-sm text-center"
                  variant="outline"
                >
                  Nova Forrageira
                </Button>
              </DialogTrigger>
              <DialogContent className=" bg-slate-100 z-40 relative">
                <DialogHeader>
                  <DialogTitle>Nova Forrageira</DialogTitle>
                </DialogHeader>
                <DialogBody className="">
                  <Field label="Nome Comum da Forrageira">
                    <Input
                      placeholder="Ex:"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Nome Cientifico da Forrageira">
                    <Input
                      placeholder="Ex:"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Massa Seca Verão (ton/ha)">
                    <Input
                      placeholder="Ex:"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Massa Seca Inverno (ton/ha)">
                    <Input
                      placeholder="Ex:"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Suporte Verão (UA/ha)">
                    <Input
                      placeholder="Ex:"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Suporte Inverno (UA/ha)">
                    <Input
                      placeholder="Ex:"
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
            <ForageTable />
          </Tabs.Content>
          <Tabs.Content
            className="bg-slate-100 flex flex-col w-full justify-start items-end"
            value="Bebedouros"
          >
            <DialogRoot>
              <DialogTrigger asChild>
                <Button
                  className="bg-green-400 w-32 h-10 text-white text-sm text-center"
                  variant="outline"
                >
                  Novo Bebedouro
                </Button>
              </DialogTrigger>
              <DialogContent className=" bg-slate-100 z-40 relative">
                <DialogHeader>
                  <DialogTitle>Novo Tipo de Bebedouro</DialogTitle>
                </DialogHeader>
                <DialogBody className="">
                  <Field label="Descrição do Tipo de Bebedouro">
                    <Input
                      placeholder="Ex:"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Material do Bebedouro">
                    <Input
                      placeholder="Ex:"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Tipo/Finalidade do Bebedouro">
                    <Input
                      placeholder="Ex:"
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

            <WaterFountainTable />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Flex>
  )
}
// <Stack width="full" gap="20">
//   <Table.Root size="md">
//     <Table.Header>
//       <Table.Row className="bg-slate-100 border-b-2 border-gray-300">
//         <Table.ColumnHeader className="text-black">
//           Propriedade
//         </Table.ColumnHeader>
//         <Table.ColumnHeader className="text-black">
//           Setores
//         </Table.ColumnHeader>
//       </Table.Row>
//     </Table.Header>
//     <Table.Body>
//       {items.map((item) => (
//         <Table.Row key={item.id} className="bg-slate-100">
//           <Table.Cell className="border-b-2 border-gray-300">
//             {item.name}
//           </Table.Cell>
//           <Table.Cell className="border-b-2 border-gray-300">
//             {item.sector}
//           </Table.Cell>

//           <Table.Cell className="border-b-2 border-gray-300">
//             <div className="flex justify-center items-center gap-2">
//               <DialogRoot>
//                 <DialogTrigger asChild>
//                   <Button
//                     className="bg-green-400 w-10 h-8 text-white text-sm text-center"
//                     variant="outline"
//                   >
//                     <PenLine size={20} />
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className=" bg-slate-100 ">
//                   <DialogHeader>
//                     <DialogTitle>Editar Usuário</DialogTitle>
//                   </DialogHeader>
//                   <DialogBody className="">
//                     <Field label="Nome">
//                       <Input
//                         placeholder="Nome do Usuário"
//                         className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
//                       />
//                     </Field>
//                     <Field label="Celular">
//                       <Input
//                         placeholder="(00) 0 0000-0000"
//                         className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
//                       />
//                     </Field>
//                     <Field label="E-mail">
//                       <Input
//                         placeholder="exemplo@email.com"
//                         className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
//                       />
//                     </Field>
//                     <Field label="Senha">
//                       <Input
//                         placeholder="**********"
//                         className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
//                       />
//                     </Field>
//                   </DialogBody>
//                   <DialogFooter>
//                     <DialogActionTrigger asChild>
//                       <Button className="bg-red-400 w-20 h-8">
//                         Cancelar
//                       </Button>
//                     </DialogActionTrigger>
//                     <Button className="bg-green-400 w-20 h-8">
//                       Concluir
//                     </Button>
//                   </DialogFooter>
//                   <DialogCloseTrigger />
//                 </DialogContent>
//               </DialogRoot>
//               <Button className="bg-red-400 w-10 h-8 text-white text-sm text-center">
//                 <Trash size={20} />
//               </Button>
//             </div>
//           </Table.Cell>
//         </Table.Row>
//       ))}
//     </Table.Body>
//   </Table.Root>

//   <div className="flex w-full justify-end items-end">
//     <PaginationRoot count={items.length * 5} pageSize={5} page={1}>
//       <HStack wrap="wrap">
//         <PaginationPrevTrigger className="hover:bg-green-300 transisiton duration-300" />
//         <PaginationItems className="hover:bg-green-300 transisiton duration-300" />
//         <PaginationNextTrigger className="hover:bg-green-300 transisiton duration-300" />
//       </HStack>
//     </PaginationRoot>
//   </div>
// </Stack>

const items = [
  { id: 1, name: 'Fazenda Freitag', sector: 'Setor 1' },
  {
    id: 2,
    name: 'Fazenda Barichello',
    sector: 'Setor 2',
  },
  { id: 3, name: 'Fazenda Moreira', sector: 'Setor 3' },
]

export default TablesTabs
