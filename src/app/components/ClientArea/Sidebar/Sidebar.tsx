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
  const [selectedSubItemId, setSelectedSubItemId] = useState<string | null>(null)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({}) // Estado para controlar expansão dos subitens
  const pathname = usePathname()
  const router = useRouter()

  const handleRedirect = (link: string) => {
    router.push(link)
  }

  const isSelected = (categoryId: string): boolean => {
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

  const toggleItemExpansion = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId], // Alterna o estado de expansão do item
    }))
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
          <AccordionItem key={category.category_id} value={category.category_id}>
            <AccordionItemTrigger
              className={classNames(
                'pl-2 text-white w-full h-10 hover:bg-green-600 transition duration-300 font-semibold text-base flex items-center justify-center',
                {
                  'bg-green-600': isSelected(category.category_id),
                },
              )}
              onClick={() => handleCategorySelect(category.category_id)}
            >
              {category.category_id}
            </AccordionItemTrigger>

            {/* Renderizar todos os itens da categoria */}
            <AccordionItemContent>
              {category.items.map((item, index) => (
                <div key={index.toString()}>
                  {item.sub_items ? (
                    // Renderizar o item com sub_items como um "accordion manual"
                    <div>
                      <button
                        className={classNames(
                          'pl-3 text-slate-200 w-full h-10 flex items-center justify-start hover:bg-green-600 transition duration-300 font-semibold text-sm',
                          {
                            'bg-green-600 text-white': isSubItemSelected(item.sub_item),
                          },
                        )}
                        onClick={() => toggleItemExpansion(item.sub_item)}
                      >
                        {item.icon && <item.icon className="mr-2 w-5 h-5" />}
                        {item.sub_item}
                      </button>
                      {/* Exibir os subitens */}
                      {expandedItems[item.sub_item] && (
                        <div className="pl-6">
                          {item.sub_items.map((subItem, subIndex) => (
                            <div
                              key={subIndex.toString()}
                              className={classNames(
                                'w-full h-10 pl-3 mt-1 mb-1 text-start items-center justify-start hover:bg-green-600 transition duration-300 flex',
                                {
                                  'bg-green-600 text-white': isSubItemSelected(
                                    subItem.sub_item,
                                  ),
                                },
                              )}
                              onClick={() => {
                                handleSubItemSelect(subItem.sub_item)
                                if (subItem.link) {
                                  handleRedirect(subItem.link)
                                }
                              }}
                            >
                              <button
                                className={classNames(
                                  'text-center text-slate-200 w-full flex h-10 text-sm hover:text-white hover:bg-green-600 transition duration-300 items-center justify-start',
                                  {
                                    'bg-green-600 text-white font-semibold': isSubItemSelected(
                                      subItem.sub_item,
                                    ),
                                  },
                                )}
                              >
                                {subItem.icon && (
                                  <subItem.icon className="mr-2 w-5 h-5" />
                                )}
                                {subItem.sub_item}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Renderizar como item normal se não tiver sub_items
                    <div
                      className={classNames(
                        'w-full h-10 pl-3 mt-1 mb-1 text-start items-center justify-start hover:bg-green-600 transition duration-300 flex',
                        {
                          'bg-green-600 text-white': isSubItemSelected(item.sub_item),
                        },
                      )}
                      onClick={() => {
                        handleSubItemSelect(item.sub_item)
                        if (item.link) {
                          handleRedirect(item.link)
                        }
                      }}
                    >
                      <button
                        className={classNames(
                          'text-center text-slate-200 w-full flex h-10 text-sm hover:text-white hover:bg-green-600 transition duration-300 items-center justify-start',
                          {
                            'bg-green-600 text-white font-semibold': isSubItemSelected(
                              item.sub_item,
                            ),
                          },
                        )}
                      >
                        {item.icon && <item.icon className="mr-2 w-5 h-5" />}
                        {item.sub_item}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Stack>
  )
}

export default Sidebar