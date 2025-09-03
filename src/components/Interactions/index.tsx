import { useDispatch, useSelector } from 'react-redux'
import { FilePlus2Icon, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { BtnIcon, BtnsContainer, ItrContainer, SrcInput } from './styles'
import { RootReducer } from '../../store'
import { changeFilter } from '../../store/reducers/filterSlice'
import { Link, LinkCbBtn } from '../../styles/index'

const Interactions = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { filtering } = useSelector((state: RootReducer) => state.filtering)

  return (
    <ItrContainer>
      <BtnsContainer>
        <LinkCbBtn as="div">
          <BtnIcon>
            <Search />
          </BtnIcon>
          <SrcInput
            type="text"
            placeholder="Buscar contatos"
            value={filtering}
            onChange={(event) => dispatch(changeFilter(event.target.value))}
          />
        </LinkCbBtn>
        <LinkCbBtn onClick={() => navigate('/addContact')}>
          <Link>Novo Contato</Link>
          <BtnIcon>
            <FilePlus2Icon />
          </BtnIcon>
        </LinkCbBtn>
      </BtnsContainer>
    </ItrContainer>
  )
}

export default Interactions
