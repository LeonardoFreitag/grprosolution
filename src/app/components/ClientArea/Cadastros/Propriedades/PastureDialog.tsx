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
import { Input, Tabs } from '@chakra-ui/react'
import ForageSelector from './ForageSelect'
import SectorSelect from './SectorSelect'

export function PastureDialog() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button
          className="bg-green-400 w-32 h-10 text-white text-sm text-center"
          variant="outline"
        >
          Novo Pasto
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-slate-100 w-full z-40 relative ">
        <DialogHeader>
          <DialogTitle>Novo Pasto</DialogTitle>
        </DialogHeader>
        <DialogBody className="">
          <Tabs.Root variant={'line'} defaultValue="members">
            <Tabs.List className="flex gap-4">
              <Tabs.Trigger value="pasture">Pastos</Tabs.Trigger>
              <Tabs.Trigger value="fountains">Bebedouros/Cochos</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="flex justify-center gap-2 items-end"
              value="pasture"
            >
              <form className="flex w-full gap-4" action="submit">
                <div className="flex  gap-4 flex-col w-1/2">
                  <Field label="Setor">
                    <SectorSelect />
                  </Field>
                  <Field label="Área (HA)">
                    <Input
                      placeholder="Área do Pasto"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                </div>
                <div className="flex flex-col gap-4  w-1/2">
                  <Field label="Nome">
                    <Input
                      placeholder="Nome do Pasto"
                      className="border-2 border-gray-300 placeholder-center pl-2 hover:border-green-400 transition durantion-300"
                    />
                  </Field>
                  <Field label="Forrageira">
                    <ForageSelector />
                  </Field>
                </div>
              </form>
            </Tabs.Content>
            <Tabs.Content value="fountains">Bebedouros</Tabs.Content>
          </Tabs.Root>
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
