'use client'
import { Field } from '@/app/components/ui/field'
import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/app/components/ui/native-select'
import { Input } from '@chakra-ui/react'

const CostCenterInclude = () => {
  return (
    <div className="flex  gap-3">
      <Field label="Centro de Custo:">
        <NativeSelectRoot>
          <NativeSelectField
            placeholder="Selecione a Propriedade"
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
          placeholder="Nome do Centro de Custo"
          className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
        />
      </Field>
    </div>
  )
}

const items = [
  { sector: 'Fazenda Freitag', id: 'freitag' },
  { sector: 'Fazenda Barichello', id: 'barichello' },
  { sector: 'Fazenda Moreira', id: 'moreira' },
]

export default CostCenterInclude
