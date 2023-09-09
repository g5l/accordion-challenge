import {Container} from './styles'
import TasksWidget from "@/components/TasksWidget/TasksWidget";

export default function Home() {
  return (
    <Container>
      <TasksWidget title="Lodgify Grouped Tasks"/>
    </Container>
  )
}
