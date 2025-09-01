import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeCategory } from '../../store/reducers/filterSlice'
import { RootReducer } from '../../store'

export type Props = {
  capition: string
  fCategory: 'familia' | 'amigos' | 'trabalho' | 'todos'
}

const Categories = ({ capition, fCategory }: Props) => {
  const dispatch = useDispatch()
  const { filtering, contacts } = useSelector((state: RootReducer) => state)

  const isActive = () => {
    const sameCategory = filtering.fCategory === fCategory
    return sameCategory
  }

  const counterContacts = () => {
    if (fCategory === 'todos') {
      return contacts.itens.length
    }
    // Para as outras categorias, filtra e conta a quantidade de itens que correspondem
    return contacts.itens.filter(
      (item) =>
        item.category.toLocaleLowerCase() === fCategory.toLocaleLowerCase()
    ).length
  }

  const fCtg = () => {
    dispatch(
      changeCategory({
        fCategory
      })
    )
  }

  const active = isActive()
  const counter = counterContacts()

  return (
    <S.BtnCategory active={active} onClick={fCtg}>
      <span>{capition}</span> <span>{counter}</span>
    </S.BtnCategory>
  )
}

export default Categories
