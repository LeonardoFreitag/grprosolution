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
            <HeritageTypeDialog />
            <HeritageTypeTable />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
}