import ActivitiesDialog from '@/app/components/ClientArea/Cadastros/Configurações/ActivitiesDialog'
import ActivitiesTable from '@/app/components/ClientArea/Cadastros/Configurações/ActivitiesTable'
import ApportionmentDialog from '@/app/components/ClientArea/Cadastros/Configurações/ApportionmentDialog'
import ApportionmentTable from '@/app/components/ClientArea/Cadastros/Configurações/ApportionmentTable'
import CostCenterDialog from '@/app/components/ClientArea/Cadastros/Configurações/CostCenterDialog'
import CostCenterTable from '@/app/components/ClientArea/Cadastros/Configurações/CostCenterTable'
import MeansurementDialog from '@/app/components/ClientArea/Cadastros/Configurações/MeansurementDialog'
import MeansurementTable from '@/app/components/ClientArea/Cadastros/Configurações/MeansurementTable'
import { Button } from '@/app/components/ui/button'
import { Field } from '@/app/components/ui/field'
import { Input, Tabs } from '@chakra-ui/react'

export default function Settings() {
  return (
    <div className="flex w-full h-screen bg-slate-100 justify-center items-start pt-4">
      <div className="w-11/12 h-5/6 p-2 bg-slate-100 border-2 border-green-200 shadow-lg shadow-green-300">
        <Tabs.Root
          colorPalette="green"
          variant={'line'}
          defaultValue="activities"
          className=""
        >
          <Tabs.List className="flex gap-8">
            <Tabs.Trigger value="activities">Atividades</Tabs.Trigger>
            <Tabs.Trigger value="costcenter">Centro de custo</Tabs.Trigger>
            <Tabs.Trigger value="apportionment">Formas de rateio</Tabs.Trigger>
            <Tabs.Trigger value="measurement">Unidade de medida</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="activities"
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
            <ActivitiesDialog />
            <ActivitiesTable />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="costcenter"
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
            <CostCenterDialog />
            <CostCenterTable />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="apportionment"
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
            <ApportionmentDialog />
            <ApportionmentTable />
          </Tabs.Content>
          <Tabs.Content
            className="flex flex-col justify-center gap-2 items-end"
            value="measurement"
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
            <MeansurementDialog />
            <MeansurementTable />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
}
