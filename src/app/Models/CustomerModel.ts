export default interface CustomerModel {
  id: string
  customerType: string // PJ OU PF
  companyName: string
  comercialName?: string
  cnpj_f: string
  ie?: string
  streetName: string
  streetNumber: string
  neighborhood: string
  complement: string
  zipcode: string
  city: string
  state: string
  phone: string
  cellphone: string
  contact?: string
  email: string
  password: string
}
