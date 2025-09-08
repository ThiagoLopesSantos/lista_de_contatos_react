import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import Contacts from '../../components/Contacts'
import { Category } from '../../utils/enums/Contact'
import { fetchContacts } from '../../store/reducers/contactsSlice'
import * as S from './styles'

const ContactList = () => {
  const dispatch = useAppDispatch()

  const { itens, status } = useAppSelector((state) => state.contacts)
  const { filtering, fCategory } = useAppSelector((state) => state.filtering)

  const contactFiltered = () => {
    let itensFiltered = itens

    if (fCategory !== Category.TODOS) {
      itensFiltered = itensFiltered.filter(
        (item) => item.category.toLowerCase() === fCategory.toLowerCase()
      )
    }
    if (filtering) {
      itensFiltered = itensFiltered.filter((item) =>
        item.name.toLowerCase().includes(filtering.toLowerCase())
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

    if (fCategory === Category.TODOS) {
      message = `${amount} contato(s) encontrado(s) como: "todos" ${complement}`
    } else {
      message = `${amount} contato(s) encontrado(s) como: "${fCategory}"`
    }
    return message
  }

  const filtered = contactFiltered()
  const message = showFiltering(filtered.length)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchContacts())
    }
  }, [dispatch, status])

  const renderingContacts = () => {
    if (status === 'loading') {
      return <S.loadingContacts>Carregando...</S.loadingContacts>
    }

    if (status === 'succeeded') {
      return (
        <ul>
          {filtered.map((c) => (
            <li key={c.id}>
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
      )
    }

    if (status === 'failed') {
      return <S.ErrorContacts>Erro ao carregar contatos.</S.ErrorContacts>
    }

    return null
  }

  return (
    <S.ListContainer>
      <S.Title>
        Contatos
        <S.TextFilter>{message}</S.TextFilter>
      </S.Title>
      {renderingContacts()}
    </S.ListContainer>
  )
}

export default ContactList
