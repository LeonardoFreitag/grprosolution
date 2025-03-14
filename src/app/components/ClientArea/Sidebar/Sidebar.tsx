'use client'
import { Stack } from '@chakra-ui/react'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from '../../ui/accordion'
import classNames from 'classnames'

import { SideMenu } from '@/app/Models/SideMenuModel'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const Sidebar = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('Geral')
  const [selectedSubItemId, setSelectedSubItemId] = useState<string | null>(
    null,
  )
  const pathname = usePathname()
  const router = useRouter()

  const handleRedirect = (link: string) => {
    router.push(link)
  }

  const isSelected = (categoryId: string): boolean => {
    // Lógica para determinar se o item está selecionado
    return selectedCategoryId === categoryId
  }

  const isSubItemSelected = (subItemId: string): boolean => {
    return selectedSubItemId === subItemId
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId)
    setSelectedSubItemId(null) // Reset subitem selection when category changes
  }

  const handleSubItemSelect = (subItemId: string) => {
    setSelectedSubItemId(subItemId)
  }

  useEffect(() => {
    // Verifica a URL atual e define o subitem selecionado com base nela
    SideMenu.forEach((category) => {
      category.items.forEach((item) => {
        if (item.link === pathname) {
          setSelectedCategoryId(category.category_id)
          setSelectedSubItemId(item.sub_item)
        }
      })
    })
  }, [pathname])

  return (
    <Stack width="full" maxW="300px" className=" bg-green-500">
      <AccordionRoot collapsible defaultValue={['Geral']}>
        {SideMenu.map((category) => (
          <AccordionItem
            key={category.category_id}
            value={category.category_id}
          >
            <AccordionItemTrigger
              className={classNames(
                'pl-2 text-white w-full h-10 hover:bg-green-600 transition duration-300 font-semibold text-base',
                {
                  'bg-green-600': isSelected(category.category_id),
                },
              )}
              onClick={() => handleCategorySelect(category.category_id)}
            >
              {category.category_id}
            </AccordionItemTrigger>

            {category.items.map((item, index) => (
              <AccordionItemContent
                className={classNames('flex pt-0   w-full h-10', {
                  'bg-green-600 w-full h-10': isSelected(item.sub_item),
                })}
                key={index.toString()}
              >
                <div
                  className={classNames(
                    'w-full h-10 pl-3 mt-1 mb-1 text-start items-center justify-center  hover:bg-green-600 transition duration-300',
                    {
                      'bg-green-600 text-white w-full h-10 ': isSubItemSelected(
                        item.sub_item,
                      ),
                    },
                  )}
                  onClick={() => {
                    handleSubItemSelect(item.sub_item)
                    if (item.link) {
                      handleRedirect(item.link)
                    }
                  }}
                >
                  {/* <a
                    key={item.sub_item}
                    href={item.link}
                    className={classNames(
                      'text-center text-slate-200 w-full h-10 text-sm',
                      {
                        'bg-green-700 text-white': isSubItemSelected(
                          item.sub_item,
                        ),
                      },
                    )}
                    onClick={() => handleSubItemSelect(item.sub_item)}
                  >
                    {item.sub_item}
                  </a> */}
                  <button
                    key={item.sub_item}
                    className={classNames(
                      'text-start text-slate-200 w-ful flex h-19 text-sm hover:text-white hover:bg-green-600 transition duration-300',
                      {
                        'bg-green-600 text-white font-semibold':
                          isSubItemSelected(item.sub_item),
                      },
                    )}
                    onClick={() => {
                      handleSubItemSelect(item.sub_item)
                      if (item.link) {
                        handleRedirect(item.link)
                      }
                    }}
                  >
                    {item.icon && <item.icon className="mr-2 w-5 h-5" />}
                    {item.sub_item}
                  </button>
                </div>
              </AccordionItemContent>
            ))}
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Stack>
  )
}

export default Sidebar
