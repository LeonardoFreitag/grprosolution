'use client'
import { Input, Tabs } from '@chakra-ui/react'
import { Button } from '@/app/components/ui/button'
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
} from '@/app/components/ui/dialog'
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

export default function Tables() {
  return (
    <div className="flex w-full h-screen bg-slate-100 justify-center items-start pt-4">
      <div className="w-11/12 h-5/6 p-2 bg-slate-100 border-2 border-green-200 shadow-lg shadow-green-300">
        <Tabs.Root
          colorPalette="green"
          variant={'line'}
          defaultValue="tables"
          className=""
        >
          <Tabs.List className="flex gap-8">
            <Tabs.Trigger value="tables">Tabelas</Tabs.Trigger>
          </Tabs.List>
          
          
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
          
        </Tabs.Root>
      </div>
    </div>
  )
}
