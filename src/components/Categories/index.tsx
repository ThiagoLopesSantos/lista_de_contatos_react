import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeCategory } from '../../store/reducers/filterSlice'
import { RootReducer } from '../../store'
import { Category } from '../../utils/enums/Contact'

export type Props = {
  capition: string
  fCategory: Category
  onCategoryClick: () => void
}

const Categories = ({ capition, fCategory, onCategoryClick }: Props) => {
  const dispatch = useDispatch()
  const { filtering: filterState, contacts } = useSelector(
    (state: RootReducer) => state
  )

  const isActive = () => {
    return filterState.fCategory === fCategory
  }

  const counterContacts = () => {
    if (fCategory === Category.TODOS) {
      return contacts.itens.length
    }

    return contacts.itens.filter(
      (item) =>
        item.category.toLocaleLowerCase() === fCategory.toLocaleLowerCase()
    ).length
  }

  const fCtg = () => {
    dispatch(changeCategory(fCategory))
    onCategoryClick()
  }

  const active = isActive()
  const counter = counterContacts()

  return (
    <S.BtnCategory $active={active} onClick={fCtg}>
      <span>{capition}</span> <span>{counter}</span>
    </S.BtnCategory>
  )
}

export default Categories
