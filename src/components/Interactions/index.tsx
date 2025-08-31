import { useDispatch, useSelector } from 'react-redux'
import {
  BtnIcon,
  BtnsContainer,
  BtnsSubContainer,
  ItrContainer,
  Link,
  SrcIcon,
  SrcInput
} from './styles'
import { RootReducer } from '../../store'
import { changeFilter } from '../../store/reducers/filterSlice'

const Interactions = () => {
  const dispatch = useDispatch()
  const { filtering } = useSelector((state: RootReducer) => state.filtering)

  return (
    <ItrContainer>
      <BtnsContainer>
        <BtnsSubContainer>
          <BtnIcon>
            <SrcIcon className="fas fa-search"></SrcIcon>
          </BtnIcon>
          <SrcInput
            type="text"
            placeholder="Buscar contatos"
            value={filtering}
            onChange={(event) => dispatch(changeFilter(event.target.value))}
          />
        </BtnsSubContainer>
        <BtnsSubContainer>
          <Link>Adicionar contato</Link>
          <BtnIcon>+</BtnIcon>
        </BtnsSubContainer>
      </BtnsContainer>
    </ItrContainer>
  )
}

export default Interactions
