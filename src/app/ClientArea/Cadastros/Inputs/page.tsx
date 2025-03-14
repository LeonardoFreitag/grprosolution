'use client'
import { Tabs } from '@chakra-ui/react'

import HeritageDialog from '@/app/components/ClientArea/Cadastros/Patrimonio/HeritageDialog'
import HeritageTypeTable from '@/app/components/ClientArea/Cadastros/Patrimonio/HeritageTypeTable'
import HeritageTypeDialog from '@/app/components/ClientArea/Cadastros/Patrimonio/HeritageTypeDialog'
import InputsTable from '@/app/components/ClientArea/Cadastros/Insumos/InputsTable'
import InputsDialog from '@/app/components/ClientArea/Cadastros/Insumos/InputsDialog'

export default function Inputs() {
  return (
    <div className="flex w-full h-screen bg-slate-100 justify-center items-start pt-4">
      <div className="w-11/12 h-5/6 p-2 bg-slate-100 border-2 border-green-200 shadow-lg shadow-green-300">
        <Tabs.Root
          colorPalette="green"
          variant={'line'}
          defaultValue="inputs"
          className=""
        >
          <Tabs.List className="flex gap-8">
            <Tabs.Trigger value="inputs" className="">
              Insumos
            </Tabs.Trigger>
            <Tabs.Trigger value="groups">Grupos</Tabs.Trigger>
            <Tabs.Trigger value="budget">Orçamentos</Tabs.Trigger>
            <Tabs.Trigger value="shopping">Compras</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="inputs"
            inset="0"
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '300ms',
            }}
            _closed={{
              animationName: 'fade-out, scale-out',
              animationDuration: '120ms',
            }}
          >
            <InputsDialog />
            <InputsTable />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="groups"
            inset="0"
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '300ms',
            }}
            _closed={{
              animationName: 'fade-out, scale-out',
              animationDuration: '120ms',
            }}
          >
            {/* <DialogRoot>
              <DialogTrigger asChild>
                <Button
                  className="bg-green-400 w-40 h-10 text-white text-sm text-center"
                  variant="outline"
                >
                  Novo Tipo de Patrimônio
                </Button>
              </DialogTrigger>
              <DialogContent className=" bg-slate-100 z-40 relative">
                <DialogHeader>
                  <DialogTitle>Novo Setor</DialogTitle>
                </DialogHeader>
                <DialogBody className="space-y-4">
                  <Field label="Propriedade">
                    <PropertySelect />
                  </Field>
                  <Field label="Nome do Setor">
                    <Input
                      placeholder="Nome do Setor"
                      className="border-2 border-gray-300 placeholder-center pl-2 rounded-md hover:border-green-400 transition durantion-300"
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
            </DialogRoot> */}
            <HeritageTypeDialog />
            <HeritageTypeTable />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="budget"
            inset="0"
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '300ms',
            }}
            _closed={{
              animationName: 'fade-out, scale-out',
              animationDuration: '120ms',
            }}
          >
            {/* <DialogRoot>
              <DialogTrigger asChild>
                <Button
                  className="bg-green-400 w-40 h-10 text-white text-sm text-center"
                  variant="outline"
                >
                  Novo Tipo de Patrimônio
                </Button>
              </DialogTrigger>
              <DialogContent className=" bg-slate-100 z-40 relative">
                <DialogHeader>
                  <DialogTitle>Novo Setor</DialogTitle>
                </DialogHeader>
                <DialogBody className="space-y-4">
                  <Field label="Propriedade">
                    <PropertySelect />
                  </Field>
                  <Field label="Nome do Setor">
                    <Input
                      placeholder="Nome do Setor"
                      className="border-2 border-gray-300 placeholder-center pl-2 rounded-md hover:border-green-400 transition durantion-300"
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
            </DialogRoot> */}
            <HeritageTypeDialog />
            <HeritageTypeTable />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="shopping"
            inset="0"
            _open={{
              animationName: 'fade-in, scale-in',
              animationDuration: '300ms',
            }}
            _closed={{
              animationName: 'fade-out, scale-out',
              animationDuration: '120ms',
            }}
          >
            {/* <DialogRoot>
              <DialogTrigger asChild>
                <Button
                  className="bg-green-400 w-40 h-10 text-white text-sm text-center"
                  variant="outline"
                >
                  Novo Tipo de Patrimônio
                </Button>
              </DialogTrigger>
              <DialogContent className=" bg-slate-100 z-40 relative">
                <DialogHeader>
                  <DialogTitle>Novo Setor</DialogTitle>
                </DialogHeader>
                <DialogBody className="space-y-4">
                  <Field label="Propriedade">
                    <PropertySelect />
                  </Field>
                  <Field label="Nome do Setor">
                    <Input
                      placeholder="Nome do Setor"
                      className="border-2 border-gray-300 placeholder-center pl-2 rounded-md hover:border-green-400 transition durantion-300"
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
            </DialogRoot> */}
            <HeritageTypeDialog />
            <HeritageTypeTable />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
}
