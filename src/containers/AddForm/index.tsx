import { FormEvent, useState } from 'react'
import { IMaskInput } from 'react-imask'
import { useDispatch } from 'react-redux'
import { LucideFolderSymlink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { CardBtn } from '../../styles'
import { Category } from '../../utils/enums/Contact'
import { FormContainer, InputContainer, InputCtg, IptCamp } from './styles'
import Contact from '../../models/Contact'
import { register } from '../../store/reducers/contactsSlice'

const AddForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState<Category>(Category.FAMILIA)

  const handleAccept = (value: string, maskRef: any) => {
    setPhone(maskRef.unmaskedValue)
  }

  const registerContact = (event: FormEvent) => {
    event.preventDefault()
    dispatch(
      register({
        name,
        email,
        phone,
        category: category
      })
    )
    navigate('/')
  }

  return (
    <FormContainer onSubmit={registerContact}>
      <h4>Cadastro de contato</h4>
      <InputContainer>
        <IptCamp>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Nome do contato aqui"
          />
        </IptCamp>
        <IptCamp>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="exemplo@dominio.com"
          />
        </IptCamp>
        <IptCamp>
          <label htmlFor="phone">Telefone:</label>
          <IMaskInput
            id="phone"
            mask="(00) 0 0000-0000"
            radix="."
            value={phone}
            onAccept={handleAccept}
            placeholder="(DDD) 9xxxx-xxxx"
          />
        </IptCamp>

        <InputCtg>
          {Object.values(Category)
            .filter((c) => c !== 'todos')
            .map((ctg) => (
              <div key={ctg}>
                <input
                  type="radio"
                  name="category"
                  id={ctg}
                  value={ctg}
                  onChange={(event) =>
                    setCategory(event.target.value as Category)
                  }
                  checked={category === (ctg as Category)}
                />{' '}
                <label htmlFor={ctg}>{ctg}</label>
              </div>
            ))}
        </InputCtg>
        <CardBtn type="submit">
          cadastrar
          <LucideFolderSymlink size={16} />
        </CardBtn>
      </InputContainer>
    </FormContainer>
  )
}

export default AddForm
