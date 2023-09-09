import * as React from 'react'
import {Container, Header, Title} from './styles'
import ProgressBar from "@/components/ProgressBar/ProgressBar";

type Props = {
  title: string
}

const TasksWidget: React.FC<Props> = (props) => (
  <Container>
    <Header>
      <Title>{props.title}</Title>
      <ProgressBar percentage={50}/>
    </Header>
  </Container>
)

export default TasksWidget;