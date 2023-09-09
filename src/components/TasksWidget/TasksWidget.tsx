import * as React from 'react'
import {Container, Header, Title} from './styles'

type Props = {
  title: string
}
const TasksWidget: React.FC<Props> = (props) => (
  <Container>
    <Header>
      <Title>{props.title}</Title>
    </Header>
  </Container>
)

export default TasksWidget;