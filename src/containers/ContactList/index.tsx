import Contacts from '../../components/Contacts'
import * as S from './styles'

const ContactList = () => (
  <S.ListContainer>
    <S.Title>Contatos</S.Title>
    <Contacts />
    <Contacts />
    <Contacts />
  </S.ListContainer>
)

export default ContactList
