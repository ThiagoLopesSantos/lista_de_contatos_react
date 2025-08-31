import { useSelector } from 'react-redux'
import Contacts from '../../components/Contacts'
import * as S from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { filtering } = useSelector((state: RootReducer) => state.filtering)

  const contactFiltered = () => {
    return itens.filter(
      (item) =>
        item.name.toLocaleLowerCase().search(filtering.toLocaleLowerCase()) >= 0
    )
  }

  return (
    <S.ListContainer>
      <S.Title>Contatos</S.Title>
      <ul>
        {contactFiltered().map((c) => (
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
