import React, {useState} from 'react';
import {Container, Content, Header, HeaderButton, Title} from './styles';

type Props = {
  title: string,
  isCompleted: boolean,
  icon?: React.ReactElement,
  children: React.ReactNode,
}

const Accordion: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const displayIconButton = () => (
    <i className={`fa-sharp fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
  );

  return (
    <Container>
      <Header onClick={() => setIsOpen(!isOpen)} $isCompleted={props.isCompleted}>
        <Title>
          {props.icon && props.icon}
          {props.title}
        </Title>
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
  );

};

export default Accordion;