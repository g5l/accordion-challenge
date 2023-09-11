import React from 'react'
import {Props} from './types';
import {Bar, Progress} from './styles'

const ProgressBar: React.FC<Props> = (props) => (
  <Bar>
    <Progress percentage={props.percentage}>
      {props.percentage}%
    </Progress>
  </Bar>
)

export default ProgressBar;