'use client'
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
import PropertiesTable from '@/app/components/ClientArea/Cadastros/Propriedades/PropertiesTable'
import SectorsTable from '@/app/components/ClientArea/Cadastros/Propriedades/SectorsTable'
import PasturesTable from '@/app/components/ClientArea/Cadastros/Propriedades/PasturesTable'
import TablesTabs from '@/app/components/ClientArea/Cadastros/Propriedades/TablesTabs'
import RainfallTable from '@/app/components/ClientArea/Cadastros/Propriedades/RainfallTable'
import { PastureDialog } from '@/app/components/ClientArea/Cadastros/Propriedades/PastureDialog'
import PropertySelect from '@/app/components/ClientArea/Cadastros/Propriedades/PropertySelect'
import SectorSelect from '@/app/components/ClientArea/Cadastros/Propriedades/SectorSelect'
import FieldSelect from '@/app/components/ClientArea/Cadastros/Propriedades/FieldSelect'

export default function Properties() {
  return (
    <div className="flex w-full h-screen bg-slate-100 justify-center items-start pt-4">
      <div className="w-11/12 h-5/6 p-2 bg-slate-100 border-2 border-green-200 shadow-lg shadow-green-300">
        <Tabs.Root
          colorPalette="green"
          variant={'line'}
          defaultValue="property"
          className=""
        >
          <Tabs.List className="flex gap-8">
            <Tabs.Trigger value="property" className="">
              Propriedade
            </Tabs.Trigger>
            <Tabs.Trigger value="sectors">Setores</Tabs.Trigger>
            <Tabs.Trigger value="pastures">Pastos</Tabs.Trigger>
            <Tabs.Trigger value="tables">Tabelas</Tabs.Trigger>
            <Tabs.Trigger value="rainfall">Pluviosidade</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="property"
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
            <DialogRoot>
              <DialogTrigger asChild>
                <Button
                  className="bg-green-400 w-32 h-10 text-white text-sm text-center"
                  variant="outline"
                >
                  Nova Propriedade
                </Button>
              </DialogTrigger>
              <DialogContent className=" bg-slate-100 z-40 relative">
                <DialogHeader>
                  <DialogTitle>Nova Propriedade</DialogTitle>
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
                    <Button className="bg-red-400 w-20 h-8">Cancelar</Button>
                  </DialogActionTrigger>
                  <Button className="bg-green-400 w-20 h-8">Concluir</Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
            <PropertiesTable />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="sectors"
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
            <DialogRoot>
              <DialogTrigger asChild>
                <Button
                  className="bg-green-400 w-32 h-10 text-white text-sm text-center"
                  variant="outline"
                >
                  Novo Setor
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
            </DialogRoot>
            <SectorsTable />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="pastures"
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
            <PastureDialog />
            <PasturesTable />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col w-full justify-center gap-2 items-start"
            value="tables"
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
            <TablesTabs />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="rainfall"
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
            <DialogRoot>
              <DialogTrigger asChild>
                <Button
                  className="bg-green-400 w-32 h-10 text-white text-sm text-center"
                  variant="outline"
                >
                  Novo Pluviômetro
                </Button>
              </DialogTrigger>
              <DialogContent className=" bg-slate-100 z-40 relative">
                <DialogHeader>
                  <DialogTitle>Novo Pluviômetro</DialogTitle>
                </DialogHeader>
                <DialogBody className="">
                  <Field label="Nome">
                    <Input
                      placeholder="Nome do Pluviômetro"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Propriedade">
                    <PropertySelect />
                  </Field>
                  <Field label="Setor">
                    <SectorSelect />
                  </Field>
                  <Field label="Talhão">
                    <FieldSelect />
                  </Field>
                  <Field label="Latitude">
                    <Input
                      placeholder="Latitude Geografica"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Longitude">
                    <Input
                      placeholder="Longitude Geografica"
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
            <RainfallTable />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
}
