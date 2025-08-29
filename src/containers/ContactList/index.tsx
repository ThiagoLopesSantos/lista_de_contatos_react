import { useSelector } from 'react-redux'
import Contacts from '../../components/Contacts'
import * as S from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)

  return (
    <S.ListContainer>
      <S.Title>Contatos</S.Title>
      <ul>
        {itens.map((c) => (
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
