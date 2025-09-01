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

  const filtered = contactFiltered()

  return (
    <S.ListContainer>
      <S.Title>
        Contatos
        <S.TextFilter>
          {filtered.length} contatos marcados como: {fCategory} e busca por (
          {filtering})
        </S.TextFilter>
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
