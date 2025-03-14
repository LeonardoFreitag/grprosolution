'use client'

import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/app/components/ui/native-select'

const PropertySelect = () => {
  return (
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
  )
}

const items = [
  { sector: 'Fazenda Freitag', id: 'freitag' },
  { sector: 'Fazenda Barichello', id: 'barichello' },
  { sector: 'Fazenda Moreira', id: 'moreira' },
]

export default PropertySelect
