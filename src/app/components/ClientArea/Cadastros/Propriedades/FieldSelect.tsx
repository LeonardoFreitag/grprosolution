'use client'

import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/app/components/ui/native-select'

const FieldSelect = () => {
  return (
    <NativeSelectRoot>
      <NativeSelectField
        placeholder="Selecionar Talhão"
        className="border-2 border-gray-300 placeholder-center pl-2 rounded-md hover:border-green-400 transition durantion-300"
      >
        {items.map((item) => (
          <option key={item.id}>{item.field}</option>
        ))}
      </NativeSelectField>
    </NativeSelectRoot>
  )
}

const items = [
  { field: 'Talhão Sul', id: 'freitag' },
  { field: 'Talhão Sudoeste', id: 'barichello' },
  { field: 'Talhão Norte', id: 'moreira' },
]

export default FieldSelect
