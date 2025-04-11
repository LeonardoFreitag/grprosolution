'use client'

import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/app/components/ui/native-select'
import { toaster } from '@/app/components/ui/toaster'
import { AuthContext } from '@/app/hooks/AuthContext'
import FarmModel from '@/app/Models/FarmModel'
import api from '@/app/services/apiClient'
import { useContext, useEffect, useState } from 'react'

interface PropertySelectProps {
  value: string
  onChange: (value: string) => void
}

export default function PropertySelect({ value, onChange }: PropertySelectProps) {
  const [properties, setProperties] = useState<FarmModel[]>([]) // Estado para armazenar as propriedades
  const { user } = useContext(AuthContext) // Obter o token e o customerId do contexto

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get('/farm', {
          params: { customerId: user?.user.customerId }, // Enviar o customerId como parâmetro
          headers: {
            Authorization: `Bearer ${user?.token}`, // Enviar o token no cabeçalho
          },
        })

        if (response.status === 200) {
          console.log('Propriedades carregadas:', response.data)
          setProperties(response.data) // Atualizar o estado com os dados retornados
        } else {
          toaster.create({
            title: 'Erro',
            description: 'Erro ao buscar propriedades!',
            type: 'error',
            duration: 2000,
          })
        }
      } catch (error) {
        console.error('Erro ao buscar propriedades:', error)
        toaster.create({
          title: 'Erro',
          description: 'Erro ao buscar propriedades. Tente novamente.',
          type: 'error',
          duration: 2000,
        })
      }
    }

    fetchProperties()
  }, [user?.user.customerId, user?.token])

  return (
    <NativeSelectRoot>
      <NativeSelectField
  value={value}
  onChange={(e) => onChange(e.target.value)} // Envia o id da propriedade selecionada
  placeholder="Selecione a Propriedade"
  className="border-2 border-gray-300 bg-white placeholder-center pl-2 rounded-md hover:border-green-400 transition durantion-300"
>
  <option value="">Selecione a Propriedade</option>
  {properties.map((property) => (
    <option className="bg-white" key={property.id} value={property.id}>
      {property.farmName} {/* Exibe o nome da propriedade */}
    </option>
  ))}
</NativeSelectField>
    </NativeSelectRoot>
  )
}