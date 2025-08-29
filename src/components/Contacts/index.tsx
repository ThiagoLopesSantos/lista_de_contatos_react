import * as S from './styles'
import { Edit, Trash2 } from 'lucide-react'

const Contacts = () => {
  return (
    <S.Card>
      <S.CardActions>
        <S.CardTag>família</S.CardTag>
        <S.CardBtns>
          <S.CardBtnEdt>
            <Edit size={16} />
            <span>editar</span>
          </S.CardBtnEdt>
          <S.CardBtnRmv>
            <Trash2 size={16} />
            <span>remover</span>
          </S.CardBtnRmv>
        </S.CardBtns>
      </S.CardActions>
      <S.CardData>
        <S.CardInputs>
          <div>Nome:</div>
          <S.CardDescription />
        </S.CardInputs>
        <S.CardInputs>
          <div>E-mail:</div>
          <S.CardDescription />
        </S.CardInputs>
        <S.CardInputs>
          <div>Celular:</div>
          <S.CardDescription />
        </S.CardInputs>
      </S.CardData>
    </S.Card>
  )
}

export default Contacts
