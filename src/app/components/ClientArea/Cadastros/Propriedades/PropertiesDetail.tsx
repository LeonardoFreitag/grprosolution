'use client'

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
import { Card, Input, Table, Tabs } from '@chakra-ui/react'
import ForageSelector from './ForageSelect'
import SectorSelect from './SectorSelect'
import { Eye, PenLine, Trash } from 'lucide-react'
import { SectorDialog } from './SectorDialog'
import { useContext, useEffect, useState } from 'react'
import FarmModel from '@/app/Models/FarmModel'
import { AuthContext } from '@/app/hooks/AuthContext'
import api from '@/app/services/apiClient'
import { toaster } from '@/app/components/ui/toaster'
import SectorModel from '@/app/Models/SectorsModel'

interface PropertiesDetailProps {
  reloadFlag: boolean // Propriedade para controlar o recarregamento
}


export function PropertiesDetail( { reloadFlag }: PropertiesDetailProps) {
    const [sectors, setSectors] = useState<SectorModel[]>([]) // Estado para armazenar as propriedades
    const { user } = useContext(AuthContext) // Obter o token e o customerId do contexto

    useEffect(() => {
      const loadSectors = async () => {
        try {
          const response = await api.get('/sector', {
            params: { customerId: user?.user.customerId }, // Enviar o customerId como parâmetro
            headers: {
              Authorization: `Bearer ${user?.token}`, // Enviar o token no cabeçalho
            },
          })
  
          if (response.status === 200) {
            console.log('Setores carregados:', response.data)
            setSectors(response.data) // Atualizar o estado com os dados retornados
          } else {
            toaster.create({
              title: 'Erro',
              description: 'Erro ao buscar setores!',
              type: 'error',
              duration: 2000,
            })
          }
        } catch (error) {
          console.error('Erro ao buscar setores:', error)
          toaster.create({
            title: 'Erro',
            description: 'Erro ao buscar setores. Tente novamente.',
            type: 'error',
            duration: 2000,
          })
        }
      }
  
      loadSectors()
    }, [user?.user.customerId, user?.token, reloadFlag]) // Reexecutar quando o customerId, token ou reloadFlag mudar
  
  return (
    <DialogRoot size='cover'>
       <DialogTrigger asChild>
        <Button
         className="bg-blue-400 w-10 h-8 text-white text-sm"
         variant="outline"
         >
         <Eye size={20} />
        </Button>
             </DialogTrigger>
      <DialogContent className=" bg-slate-100 w-full z-40 relative ">
        <DialogHeader>
          <DialogTitle className='text-xl font-semibold'>Detalhamento da Propriedade</DialogTitle>
        </DialogHeader>
        <DialogBody className="">
          <div className='flex w-full items-end justify-end'><SectorDialog /></div>
          
          <Table.Root size="md">
            <span className='text-lg text-center ml-1 font-semibold'>Setores</span>
                  <Table.Header>
                    <Table.Row className="bg-slate-100  border-gray-300">
                           
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                  {sectors.map((sector) => (
                      <Card.Root
                        key={sector.id}
                        className="w-full flex flex-row h-20 bg-slate-100 border border-green-300 rounded-lg mb-2 transition-transform duration-300 hover:scale-104 hover:shadow-lg"
                      >
                        <Card.Header className="flex justify-center text-center items-start  w-2/3 px-4 py-2">
                          <div className='flex items-center text-center justify-between w-full'>
                            <span className="text-lg text-black font-semibold">{sector.sectorName}</span>
                            <span className="text-lg text-black font-semibold">{sector.pastures?.length}</span>

                          </div>
                        </Card.Header>
                        <Card.Body className="flex flex-row justify-end items-center gap-4 px-4">
                          {/* Botão de Visualizar */}
          
                          {/* Botão de Editar */}
                          <DialogRoot>
                            <DialogTrigger asChild>
                              <Button
                                className="bg-green-400 w-10 h-8 text-white text-sm"
                                variant="outline"
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
                                    className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition duration-300"
                                  />
                                </Field>
                              </DialogBody>
                              <DialogFooter>
                                <DialogCloseTrigger>
                                  <Button className="bg-red-400 w-20 h-8">Cancelar</Button>
                                </DialogCloseTrigger>
                                <Button className="bg-green-400 w-20 h-8">Concluir</Button>
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
                  </Table.Body>
                </Table.Root>
          {/* <Field label="Nome">
            <Input
              placeholder="Nome da Propriedade"
              className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
            />
          </Field> */}
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button className="bg-red-400 w-20 h-8">Cancelar</Button>
          </DialogActionTrigger>
          <Button className="bg-green-400 w-20 h-8">Concluir</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
