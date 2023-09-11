import React from 'react'
import {Group} from './styles'

type Props = {
  children: React.ReactNode,
}

const AccordionGroup: React.FC<Props> = (props) => {
  return (
    <Group>
      {props.children}
    </Group>
  )
}

export default AccordionGroup;