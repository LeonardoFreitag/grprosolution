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
import CostCenterInclude from './CostCenterInclude'
import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/app/components/ui/native-select'
import CostCenterPercent from './CostCenterPercent'

const ApportionmentDialog: React.FC = () => {
  return (
    <DialogRoot size="lg">
      <DialogTrigger asChild>
        <Button
          className="bg-green-400 w-32 h-10 text-white text-sm text-center"
          variant="outline"
        >
          Novo Rateio
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-slate-100 w-full z-40 ">
        <DialogHeader>
          <DialogTitle>Novo Rateio</DialogTitle>
        </DialogHeader>
        <DialogBody className="">
          <form className="flex flex-col gap-3">
            <Field label="Nome do Grupo de Rateio">
              <Input
                placeholder="Nome do Rateio"
                className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
              />
            </Field>
            <div>
              <form>
                <div className="flex justify-center items-center border border-green-300 bg-green-100 rounded-md p-2  gap-3">
                  <Field label="Centro de Custo:">
                    <NativeSelectRoot>
                      <NativeSelectField
                        placeholder="Selecione o Centro de Custo"
                        className="border-2 border-gray-300 placeholder-center pl-2 rounded-md hover:border-green-400 transition durantion-300"
                      >
                        {items.map((item) => (
                          <option key={item.id}>{item.sector}</option>
                        ))}
                      </NativeSelectField>
                    </NativeSelectRoot>
                  </Field>
                  <Field label="Percentual (%)">
                    <Input
                      placeholder="Percentual do Centro de Custo"
                      type="number"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Button className="bg-green-400 mt-7 w-24 h-10">
                    Incluir
                  </Button>
                </div>

                <CostCenterPercent />
              </form>
            </div>
          </form>
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

const items = [
  { sector: 'Fazenda Freitag', id: 'freitag' },
  { sector: 'Fazenda Barichello', id: 'barichello' },
  { sector: 'Fazenda Moreira', id: 'moreira' },
]

export default ApportionmentDialog
