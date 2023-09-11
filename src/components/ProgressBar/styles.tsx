'use client'
import styled from 'styled-components';
import {Props} from './types';

export const Bar = styled.div`
  background: #F2FBFA;
  width: 100%;
  height: 24px;
  border-radius: 24px;
`

export const Progress = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${(props) => props.percentage !== 0 ? `${props.percentage}%` : "fit-content"};
  height: 100%;
  color: ${(props) => props.percentage == 0 ? "#00B797" : "#FFFFFF"};
  padding: 0 16px;
  border-radius: 24px;
  background: ${(props) => props.percentage === 0 ? "transparent" : "#00B797"};
  font-size: 16px;
  font-weight: 600;
  transition: width 0.5s ease, padding 0.5s ease;
`