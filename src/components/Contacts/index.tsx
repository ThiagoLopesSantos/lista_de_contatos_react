import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Edit, Trash2, Save, X } from 'lucide-react'
import * as S from './styles'

import { remove } from '../../store/reducers/contactsSlice'
import Contact from '../../models/Contact'

type Props = Contact

const Contacts = ({ category, name, email, phone, id }: Props) => {
  const dispatch = useDispatch()
  const [cardEdting, setCardEdting] = useState(false)
  return (
    <S.Card>
      <S.CardActions>
        <S.CardTag>{category}</S.CardTag>
        <S.Title>{name}</S.Title>

        <S.CardBtns>
          {cardEdting ? (
            <>
              <S.BtnSave>
                <Save size={16} />
                <span>salvar</span>
              </S.BtnSave>
              <S.BtnCancelRemove>
                <X size={16} />
                <span onClick={() => setCardEdting(false)}>cancelar</span>
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
          <S.CardDescription>{email}</S.CardDescription>
        </S.CardInputs>
        <S.CardInputs>
          Celular:
          <S.CardDescription>{phone}</S.CardDescription>
        </S.CardInputs>
      </S.CardData>
    </S.Card>
  )
}

export default Contacts
