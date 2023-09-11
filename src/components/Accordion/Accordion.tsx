import React, {useState} from 'react'
import {Container, Content, Header, HeaderButton} from './styles'

type Props = {
  title: string,
  // isComplete: boolean,
  children: React.ReactNode,
}

const Accordion: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const displayIconButton = () => (
    <i className={`fa-sharp fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
  )

  return (
    <Container>
      <Header onClick={() => setIsOpen(!isOpen)}>
        {props.title}
        <HeaderButton>
          {isOpen ? "Hide" : "Show"}
          {displayIconButton()}
        </HeaderButton>
      </Header>
      {isOpen && (
        <Content>
          {props.children}
        </Content>
      )}
    </Container>
  )

}

export default Accordion;