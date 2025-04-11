'use client'
import { Button, HStack, Input, Stack, Table, Card, Text } from '@chakra-ui/react'
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '../../../ui/pagination'
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
} from '../../../ui/dialog'
import { Field } from '@/app/components/ui/field'
import { PenLine, Trash, Eye } from 'lucide-react'
import { PropertiesDetail } from './PropertiesDetail'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/app/hooks/AuthContext'
import api from '@/app/services/apiClient'
import FarmModel from '@/app/Models/FarmModel'
import { toaster, Toaster } from '@/app/components/ui/toaster'

interface PropertiesTableProps {
  reloadFlag: boolean // Propriedade para controlar o recarregamento
}



const PropertiesTable = ({ reloadFlag }: PropertiesTableProps) => {
  const [properties, setProperties] = useState<FarmModel[]>([]) // Estado para armazenar as propriedades
  const [editingProperty, setEditingProperty] = useState<FarmModel | null>(null) // Estado para a propriedade em edição
  const [isDialogOpen, setIsDialogOpen] = useState(false)
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
  }, [user?.user.customerId, user?.token, reloadFlag]) // Reexecutar quando o customerId, token ou reloadFlag mudar

  const handleEditProperty = async (updatedProperty: FarmModel) => {
    try {
      // Certifique-se de que os dados necessários estão presentes
      if (!updatedProperty.id || !updatedProperty.customerId || !updatedProperty.farmName) {
        toaster.create({
          title: 'Erro',
          description: 'Dados incompletos para atualizar a propriedade.',
          type: 'error',
          duration: 2000,
        })
        return
      }

      // Realiza a chamada PATCH para a API
      const response = await api.patch('/farm', {
        id: updatedProperty.id,
        customerId: updatedProperty.customerId,
        farmName: updatedProperty.farmName,
      }, {
        headers: {
          Authorization: `Bearer ${user?.token}`, // Enviar o token no cabeçalho
        },
      })

      if (response.status === 200) {
        // Atualiza a lista de propriedades localmente
        setProperties((prev) =>
          prev.map((property) =>
            property.id === updatedProperty.id ? updatedProperty : property
          )
        )
        setEditingProperty(null) // Fecha o diálogo de edição
        toaster.create({
          title: 'Sucesso',
          description: 'Propriedade atualizada com sucesso!',
          type: 'success',
          duration: 2000,
        })
      } else {
        toaster.create({
          title: 'Erro',
          description: 'Erro ao atualizar a propriedade!',
          type: 'error',
          duration: 2000,
        })
      }
    } catch (error) {
      console.error('Erro ao atualizar a propriedade:', error)
      toaster.create({
        title: 'Erro',
        description: 'Erro ao atualizar a propriedade. Tente novamente.',
        type: 'error',
        duration: 2000,
      })
    }
  }

  return (
    <Stack width="full" gap="20">
      <Table.Root size="md">
        <Table.Header>
          <Table.Row className="bg-slate-100  border-gray-300">

          </Table.Row>
        </Table.Header>
        <Table.Body>
        {properties.map((property) => (
            <Card.Root
              key={property.id}
              className="w-full flex flex-row h-20 bg-slate-100 border border-green-300 rounded-lg mb-2 transition-transform duration-300 hover:scale-104 hover:shadow-lg"
            >
              <Card.Header className="flex justify-center text-center items-center px-4 py-2">
                <div className="flex items-center text-center justify-center">
                  <span className="text-lg text-black font-semibold">{property.farmName}</span>
                </div>
              </Card.Header>
              <Card.Body className="flex flex-row justify-end items-center gap-4 px-4">
                {/* Botão de Visualizar */}
                <PropertiesDetail reloadFlag={reloadFlag} />

                {/* Botão de Editar */}
                <DialogRoot>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-green-400 w-10 h-8 text-white text-sm"
                      variant="outline"
                      onClick={() => setEditingProperty(property)}
                    >
                      <PenLine size={20} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className=" bg-slate-100 ">
                    <DialogHeader>
                      <DialogTitle>Editar Propriedade</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                      <Field label="Nome">
                        <Input
                          placeholder="Nome da Propriedade"
                          defaultValue={property.farmName}
                          onChange={(e) =>
                            setEditingProperty((prev) =>
                              prev ? { ...prev, farmName: e.target.value } : null
                            )
                          }
                          className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition duration-300"
                        />
                      </Field>
                    </DialogBody>
                    <DialogFooter className='flex gap-2'>
                      <DialogCloseTrigger>
                      </DialogCloseTrigger>
                      <Button className="bg-red-400 w-20 h-8" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
                      <Button className="bg-green-400 w-20 h-8"
                      onClick={() => editingProperty && handleEditProperty(editingProperty)}
                      >
                      Concluir
                      </Button>

                    </DialogFooter>
                  </DialogContent>
                </DialogRoot>

                {/* Botão de Deletar */}
                <Button className="bg-red-400 w-10 h-8 text-white text-sm">
                  <Trash size={20} />
                </Button>
              </Card.Body>
            </Card.Root>
          ))}
          <Toaster /> {/* Adicione o componente Toaster aqui para exibir as mensagens */}
        </Table.Body>
      </Table.Root>

      <div className="flex w-full justify-end items-end">
        <PaginationRoot count={properties.length * 5} pageSize={5} page={1}>
          <HStack wrap="wrap">
            <PaginationPrevTrigger className="hover:bg-green-300 transisiton duration-300" />
            <PaginationItems className="hover:bg-green-300 transisiton duration-300" />
            <PaginationNextTrigger className="hover:bg-green-300 transisiton duration-300" />
          </HStack>
        </PaginationRoot>
      </div>
    </Stack>
  )
}

const items = [
  { id: 1, name: 'Fazenda Freitag', sector: 'Setor 1' },
  {
    id: 2,
    name: 'Fazenda Barichello',
    sector: 'Setor 2',
  },
  { id: 3, name: 'Fazenda Moreira', sector: 'Setor 3' },
]

export default PropertiesTable
