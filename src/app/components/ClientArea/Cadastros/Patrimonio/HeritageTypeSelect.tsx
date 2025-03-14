'use client'

import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/app/components/ui/native-select'

const HeritageTypeSelect = () => {
  return (
    <NativeSelectRoot>
      <NativeSelectField
        placeholder="Selecione o Tipo de Patrimônio"
        className="border-2 border-gray-300 placeholder-center pl-2 rounded-md hover:border-green-400 transition durantion-300"
      >
        {items.map((item) => (
          <option key={item.id}>{item.forage}</option>
        ))}
      </NativeSelectField>
    </NativeSelectRoot>
  )
}

const items = [
  { forage: 'Forrageira 1', id: 'freitag' },
  { forage: 'Forrageira 2', id: 'barichello' },
  { forage: 'Forrageira 3', id: 'moreira' },
]

export default HeritageTypeSelect
