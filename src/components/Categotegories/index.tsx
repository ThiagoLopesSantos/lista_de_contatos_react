import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  capition: string
}

const Categories = ({ active, counter, capition }: Props) => (
  <S.BtnCategory active={active}>
    <span>{capition}</span> <span>{counter}</span>
  </S.BtnCategory>
)

export default Categories
