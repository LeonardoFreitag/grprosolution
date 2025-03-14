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
import { Input } from '@chakra-ui/react'
import ActivitiesSelect from './ActivitiesSelect'

const CostCenterDialog: React.FC = () => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button
          className="bg-green-400 w-36 h-10 text-white text-sm text-center"
          variant="outline"
        >
          Novo Centro de Custo
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-slate-100 z-40 relative">
        <DialogHeader>
          <DialogTitle>Novo Centro de Custo</DialogTitle>
        </DialogHeader>
        <DialogBody className="">
          <Field label="Atividade">
            <ActivitiesSelect />
          </Field>
          <Field label="Centro de Custo">
            <Input
              placeholder="Nome do Centro de Custo"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Tipo de Centro de Custo">
            <Input
              placeholder="Tipo de Centro de Custo"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Área (ha)">
            <Input
              placeholder="Área"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Produtividade (kg/ha)">
            <Input
              placeholder="Produtividade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button className="bg-red-400 w-20 h-8">Cancelar</Button>
          </DialogActionTrigger>
          <Button className="bg-green-400 w-20 h-8">Concluir</Button>
          <DialogCloseTrigger />
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  )
}

export default CostCenterDialog
