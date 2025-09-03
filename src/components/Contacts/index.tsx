import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Edit, Trash2, Save, X } from 'lucide-react'
import { IMaskInput } from 'react-imask'
import IMask from 'imask'

import * as S from './styles'
import { remove, edit } from '../../store/reducers/contactsSlice'
import Contact from '../../models/Contact'
import { BtnSave, BtnCancelRemove, CardBtn } from '../../styles'

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

  // Função para lidar com a mudança do telefone na edição
  const handlePhoneAccept = (value: string, maskRef: any) => {
    setPhone(maskRef.unmaskedValue)
  }

  // A função para formatar o telefone para a exibição
  const formatPhone = (phoneNumber: string) => {
    const mask = IMask.createMask({ mask: '(00) 0 0000-0000' })
    // Use .value para formatar um valor que já possui a máscara
    mask.value = phoneNumber
    return mask.value
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
              <BtnSave
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
              </BtnSave>
              <BtnCancelRemove>
                <X size={16} />
                <span onClick={() => cancelEdit()}>cancelar</span>
              </BtnCancelRemove>
            </>
          ) : (
            <>
              <CardBtn onClick={() => setCardEdting(true)}>
                <Edit size={16} />
                <span>editar</span>
              </CardBtn>
              <BtnCancelRemove onClick={() => dispatch(remove(id))}>
                <Trash2 size={16} />
                <span>remover</span>
              </BtnCancelRemove>
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
          {cardEdting ? (
            <S.StyledIMaskInput
              mask="(00) 0 0000-0000"
              radix="."
              value={phone}
              onAccept={handlePhoneAccept}
              placeholder="(DDD) 9 xxxx-xxxx"
              disabled={!cardEdting}
            />
          ) : (
            <S.InputCardDescription as="span">
              {formatPhone(originalPhone)}
            </S.InputCardDescription>
          )}
        </S.CardInputs>
      </S.CardData>
    </S.Card>
  )
}

export default Contacts
