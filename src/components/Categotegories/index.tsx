import { useState } from 'react'
import * as S from './styles'

export type Props = {
  active?: boolean
}

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  return (
    <S.CtgContainer>
      <S.BtnCategory
        active={activeCategory === 'all'}
        onClick={() => setActiveCategory('all')}
      >
        Todos: <span>0</span>
      </S.BtnCategory>
      <S.BtnCategory
        active={activeCategory === 'family'}
        onClick={() => setActiveCategory('family')}
      >
        Família: <span>0</span>
      </S.BtnCategory>
      <S.BtnCategory
        active={activeCategory === 'friends'}
        onClick={() => setActiveCategory('friends')}
      >
        Amigos: <span>0</span>
      </S.BtnCategory>
      <S.BtnCategory
        active={activeCategory === 'work'}
        onClick={() => setActiveCategory('work')}
      >
        Trabalho: <span>0</span>
      </S.BtnCategory>
    </S.CtgContainer>
  )
}

export default Categories
