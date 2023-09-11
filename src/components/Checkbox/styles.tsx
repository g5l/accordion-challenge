'use client'
import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  color: #333333;
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: #FFFFFF;
  width: 16px;
  height: 16px;
  accent-color: #00B797;
`;


// .groupRow {
//   display: flex;
//   position: relative;
//   padding-left: 30px;
//   cursor: pointer;
//   font-size: 16px;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   align-items: center;
//   margin: 20px 0;
// }
// .groupRow input {
//   position: absolute;
//   opacity: 0;
//   cursor: pointer;
//   height: 0;
//   width: 0;
// }
//
// .groupRow .checkmark {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 20px;
//   width: 20px;
//   border-radius: 4px;
//   background-color: white;
//   border: 1px solid var(--grayBorder);
// }
//
// .groupRow:hover input ~ .checkmark {
//   background-color: var(--grayBorder);
// }
//
// .groupRow input:checked ~ .checkmark {
//   background-color: var(--greenProgress);
// }
//
// .groupRow .checkmark:after {
//   content: "";
//   position: absolute;
//   display: none;
// }
//
// .groupRow input:checked ~ .checkmark:after {
//   display: block;
// }
//
// .groupRow .checkmark:after {
//   left: 6px;
//   top: 2px;
//   width: 5px;
//   height: 10px;
//   border: solid white;
//   border-width: 0 3px 3px 0;
//   -webkit-transform: rotate(45deg);
//   -ms-transform: rotate(45deg);
//   transform: rotate(45deg);
// }