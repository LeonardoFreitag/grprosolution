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
import GroupSelect from './GroupSelect'

const InputsDialog: React.FC = () => {
  return (
    <DialogRoot size="xl">
      <DialogTrigger asChild>
        <Button
          className="bg-green-400 w-32 h-10 text-white text-sm text-center"
          variant="outline"
        >
          Novo Insumo
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-slate-100 z-40 relative">
        <DialogHeader>
          <DialogTitle>Insumos</DialogTitle>
        </DialogHeader>
        <DialogBody className="grid grid-cols-2 gap-4">
          <Field label="Código/Código de Barras">
            <Input
              placeholder="Tipo de Patrimônio"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Produto">
            <Input
              placeholder="Tipo de Patrimônio"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="NCM">
            <Input
              placeholder="Nome da Atividade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Grupo">
            <GroupSelect />
          </Field>
          <Field label="Unidade de compra">
            <Input
              placeholder="Nome da Atividade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Fato de Conversão">
            <Input
              placeholder="Nome da Atividade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Unidade de aplicação">
            <Input
              placeholder="Nome da Atividade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Fornecedor">
            <Input
              placeholder="Nome da Atividade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Estoque">
            <Input
              placeholder="Nome da Atividade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Carência">
            <Input
              placeholder="Nome da Atividade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="R$ Custo">
            <Input
              placeholder="Nome da Atividade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Observações">
            <Input
              placeholder="Nome da Atividade"
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

export default InputsDialog
