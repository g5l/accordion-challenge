'use client';
import styled from 'styled-components';

export const Container = styled.li`
  border-bottom: 1px solid #DDDDDD;

  &:last-child {
    border-bottom: none;
  }
`;

export const Header = styled.div<{ $isCompleted: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.$isCompleted ? "#00B797" : "#333333")};
  padding: 24px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  background: unset;
  border: unset;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #999999
`;

export const Content = styled.div`
  margin: 16px;
  overflow: hidden;
  gap: 8px;
`;
