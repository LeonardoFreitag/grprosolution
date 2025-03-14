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
import { Checkbox } from '@/app/components/ui/checkbox'

const HeritageTypeDialog: React.FC = () => {
  return (
    <DialogRoot>
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
          <DialogTitle>Novo Tipo de Patrimônio</DialogTitle>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-2">
          <Field label="Tipo de Patrimônio">
            <Input
              placeholder="Tipo de Patrimônio"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <Field label="Vida Útil">
            <Input
              placeholder="0,00"
              type="number"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field>
          <div className="flex gap-2 justify-start items-center">
            <Checkbox
              variant={'solid'}
              className="border-2 rounded-md border-gray-300"
              colorPalette={'green'}
            />
            <span>Depreciável?</span>
          </div>
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

export default HeritageTypeDialog
