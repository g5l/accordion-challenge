'use client';
import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  color: #333333;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover span {
    background-color: #999999;
  }
`;

export const Label = styled.div`
  margin-left: 32px;
`;

export const Input = styled.input.attrs({type: 'checkbox'})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }

  &:checked ~ span {
    background-color: #00B797;
    border-color: #00B797;
  }
`;

export const Checkmark = styled.span`
  margin-right: 10px;
  border: 1px solid #999999;
  border-radius: 4px;
  background-color: #FFFFFF;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 16px;
  transition: all .3s;

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 4px;
    height: 8px;
    border: solid #FFFFFF;
    border-width: 0 2px 2px 0;
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;