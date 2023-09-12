import React from 'react';
import {Container, Input} from './styles';
import {CheckEvent} from "@/types/common";

type Props = {
  id: string
  label: string
  checked: boolean
  onChange: (event: CheckEvent) => void
}

const Checkbox: React.FC<Props> = (props) => {

  const updateChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange({id: props.id, checked: event.target.checked});
  };

  return (
    <Container htmlFor={props.id}>
      <Input
        id={props.id}
        checked={props.checked}
        onChange={updateChecked}
      />
      {props.label}
    </Container>
  );
};

export default Checkbox;