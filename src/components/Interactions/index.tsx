import {
  BtnIcon,
  BtnsContainer,
  BtnsSubContainer,
  ItrContainer,
  Link,
  SrcIcon,
  SrcInput
} from './styles'

const Interactions = () => (
  <ItrContainer>
    <BtnsContainer>
      <BtnsSubContainer>
        <SrcIcon className="fas fa-search"></SrcIcon>
        <SrcInput type="text" placeholder="Buscar contatos" />
      </BtnsSubContainer>
      <BtnsSubContainer>
        <Link>Adicionar contato</Link>
        <BtnIcon>+</BtnIcon>
      </BtnsSubContainer>
      <BtnsSubContainer>
        <Link>Editar contato</Link>
        <BtnIcon>+</BtnIcon>
      </BtnsSubContainer>
    </BtnsContainer>
  </ItrContainer>
)

export default Interactions
