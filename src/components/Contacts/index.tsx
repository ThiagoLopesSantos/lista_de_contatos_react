import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Edit, Trash2, Save, X } from 'lucide-react'
import * as S from './styles'

import { remove, edit } from '../../store/reducers/contactsSlice'
import Contact from '../../models/Contact'

type Props = Contact

const Contacts = ({
  category,
  name: originalName,
  email: originalEmail,
  phone: originalPhone,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [cardEdting, setCardEdting] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (
      originalName.length > 0 ||
      originalEmail.length > 0 ||
      originalPhone.length > 0
    ) {
      setName(originalName)
      setEmail(originalEmail)
      setPhone(originalPhone)
    }
  }, [originalName, originalEmail, originalPhone])

  function cancelEdit() {
    setCardEdting(false)
    setName(originalName)
    setEmail(originalEmail)
    setPhone(originalPhone)
  }

  return (
    <S.Card>
      <S.CardActions>
        <S.CardTag>{category}</S.CardTag>
        <S.InputTitle
          disabled={!cardEdting}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <S.CardBtns>
          {cardEdting ? (
            <>
              <S.BtnSave
                onClick={() => {
                  dispatch(
                    edit({
                      name,
                      email,
                      phone,
                      category,
                      id
                    })
                  )
                  setCardEdting(false)
                }}
              >
                <Save size={16} />
                <span>salvar</span>
              </S.BtnSave>
              <S.BtnCancelRemove>
                <X size={16} />
                <span onClick={() => cancelEdit()}>cancelar</span>
              </S.BtnCancelRemove>
            </>
          ) : (
            <>
              <S.CardBtn onClick={() => setCardEdting(true)}>
                <Edit size={16} />
                <span>editar</span>
              </S.CardBtn>
              <S.BtnCancelRemove onClick={() => dispatch(remove(id))}>
                <Trash2 size={16} />
                <span>remover</span>
              </S.BtnCancelRemove>
            </>
          )}
        </S.CardBtns>
      </S.CardActions>

      <S.CardData>
        <S.CardInputs>
          E-mail:
          <S.InputCardDescription
            disabled={!cardEdting}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </S.CardInputs>
        <S.CardInputs>
          Celular:
          <S.InputCardDescription
            disabled={!cardEdting}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </S.CardInputs>
      </S.CardData>
    </S.Card>
  )
}

export default Contacts
