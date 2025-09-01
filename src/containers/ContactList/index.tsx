import { useSelector } from 'react-redux'
import Contacts from '../../components/Contacts'
import * as S from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { filtering, fCategory } = useSelector(
    (state: RootReducer) => state.filtering
  )

  const contactFiltered = () => {
    let itensFiltered = itens

    if (fCategory !== 'todos') {
      itensFiltered = itensFiltered.filter(
        (item) =>
          item.category.toLocaleLowerCase() === fCategory.toLocaleLowerCase()
      )
    }
    if (filtering) {
      itensFiltered = itensFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(filtering.toLocaleLowerCase())
      )
    }

    return itensFiltered
  }

  const showFiltering = (amount: number) => {
    let message = ''
    const complement =
      filtering !== undefined && filtering.length > 0
        ? ` e busca por "${filtering}"`
        : ''

    if (fCategory === 'todos') {
      message = `${amount} contato(s) encontrado(s) como: "todos" ${complement}`
    } else {
      message = `${amount} contato(s) encontrado(s) como: "${fCategory}"`
    }
    return message
  }

  const filtered = contactFiltered()
  const message = showFiltering(filtered.length)

  return (
    <S.ListContainer>
      <S.Title>
        Contatos
        <S.TextFilter>{message}</S.TextFilter>
      </S.Title>
      <ul>
        {filtered.map((c) => (
          <li key={c.name}>
            <Contacts
              category={c.category}
              name={c.name}
              email={c.email}
              phone={c.phone}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </S.ListContainer>
  )
}

export default ContactList
