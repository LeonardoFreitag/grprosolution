export interface ICustomer {
  id: string
  customerType: string // PJ OU PF
  companyName: string // razão social ou nome do produtor
  comercialName: string // nome fantasia ou repete o nome do produtos
  cnpj_f: string // CNPJ ou CPF
  ie: string // Inscrição Estadual
  streetName: string // Rua
  streetNumber: string // Número
  neighborhood: string // Bairro
  complement: string // Complemento
  zipCode: string // CEP
  city: string // Cidade
  state: string // Estado
  phone: string // Telefone
  cellphone: string // Celular
  contact: string // Nome do contato
  email: string // Email
}

export interface IUser {
  id: string
  customerId: string
  customer: ICustomer
  isAdmin: boolean
  name: string
  cellphone: string
  email: string
}

export interface UserAuthModel {
  user: IUser
  token: string
  refreshToken: string
}
