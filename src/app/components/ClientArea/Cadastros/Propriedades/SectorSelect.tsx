'use client'

import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/app/components/ui/native-select'

const SectorSelect = () => {
  return (
    <NativeSelectRoot>
      <NativeSelectField
        placeholder="Selecione o Setor"
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
  { sector: 'Setor 1', id: 'freitag' },
  { sector: 'Setor 2', id: 'barichello' },
  { sector: 'Setor 3', id: 'moreira' },
]

export default SectorSelect
