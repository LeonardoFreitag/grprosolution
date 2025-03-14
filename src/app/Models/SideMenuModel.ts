import {
  AlignJustify,
  Banknote,
  ChartColumn,
  ChartLine,
  FileChartLine,
  FileUser,
  HandCoins,
  Handshake,
  HousePlus,
  Landmark,
  LibraryBig,
  ListTodo,
  MonitorCog,
  Notebook,
  ScrollText,
  ShoppingBasket,
  UserRoundMinus,
} from 'lucide-react'

import { SiRancher } from 'react-icons/si'

export interface SideMenuItemModel {
  sub_item: string
  link?: string
  icon?: any
}

export interface SideMenuModel {
  category_id: string
  items: SideMenuItemModel[]
}

export const SideMenu: SideMenuModel[] = [
  {
    category_id: 'Geral',
    items: [
      {
        sub_item: 'Home',
        link: '/ClientArea/Geral/Home',
        icon: AlignJustify,
      },
      {
        sub_item: 'Usuários',
        link: '/ClientArea/Geral/Users',
        icon: UserRoundMinus,
      },
    ],
  },
  {
    category_id: 'Cadastros',
    items: [
      {
        sub_item: 'Propriedades',
        link: '/ClientArea/Cadastros/Properties',
        icon: HousePlus,
      },
      {
        sub_item: 'Plano de contas',
        link: '/ClientArea/Cadastros/ChartOfAccounts',
        icon: Notebook,
      },
      {
        sub_item: 'Indexadores',
        link: '/ClientArea/Cadastros/Indexers',
        icon: Banknote,
      },
      {
        sub_item: 'Configurações',
        link: '/ClientArea/Cadastros/Settings',
        icon: MonitorCog,
      },
      {
        sub_item: 'Contatos comerciais',
        link: '/ClientArea/Cadastros/CommercialContacts',
        icon: Handshake,
      },
      {
        sub_item: 'Patrimônio',
        link: '/ClientArea/Cadastros/Heritage',
        icon: Landmark,
      },
      {
        sub_item: 'Insumos',
        link: '/ClientArea/Cadastros/Inputs',
        icon: ShoppingBasket,
      },
      {
        sub_item: 'Rebanho',
        link: '/ClientArea/Cadastros/Herd',
        icon: SiRancher,
      },
    ],
  },
  {
    category_id: 'Ocorrências',
    items: [
      {
        sub_item: 'Financeiro',
        link: '/ClientArea/Ocorrências/Financial',
        icon: LibraryBig,
      },
      {
        sub_item: 'NF-e',
        link: '/ClientArea/Ocorrências/NFe',
        icon: FileChartLine,
      },
      {
        sub_item: 'Conciliação',
        link: '/ClientArea/Ocorrências/Reconciliation',
        icon: ListTodo,
      },
      {
        sub_item: 'Rebanho',
        link: '/ClientArea/Ocorrências/HerdOccurrences',
        icon: SiRancher,
      },
    ],
  },
  {
    category_id: 'Relatórios',
    items: [
      {
        sub_item: 'Financeiro',
        link: '/ClientArea/Relatórios/FinancialReports',
        icon: ScrollText,
      },
      {
        sub_item: 'Patrimônio',
        link: '/ClientArea/Relatórios/AssetsReports',
        icon: HandCoins,
      },
      {
        sub_item: 'Contatos',
        link: '/ClientArea/Relatórios/ContactsReports',
        icon: FileUser,
      },
      {
        sub_item: 'Rebanho',
        link: '/ClientArea/Relatórios/HerdReports',
        icon: SiRancher,
      },
    ],
  },
  {
    category_id: 'Gráficos',
    items: [
      {
        sub_item: 'Custos desembolsados',
        link: '/ClientArea/Gráficos/DisbursedCosts',
        icon: ChartColumn,
      },
      {
        sub_item: 'Fluxo de caixa',
        link: '/ClientArea/Gráficos/CashFlow',
        icon: ChartLine,
      },
    ],
  },
]
