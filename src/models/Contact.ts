class Contact {
  category: string
  name: string
  email: string
  phone: string
  id: number

  constructor(
    category: string,
    name: string,
    email: string,
    phone: string,
    id: number
  ) {
    this.category = category
    this.name = name
    this.email = email
    this.phone = phone
    this.id = id
  }
}

export default Contact
