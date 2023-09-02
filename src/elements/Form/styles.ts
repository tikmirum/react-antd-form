import styled, { css } from 'styled-components';

export const Main = styled('form')`
  border-radius: 8px;
  padding: 40px;
  border: 3px solid gray;
  text-align: center;
  font-size: 32px;
  font-family: Saab, sans-serif;
`;

export const Position = styled('div')`
  position: relative;
`;
export const Column = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Row = styled('div')`
  display: flex;
  flex-direction: row;
`;

export const Label = styled('label')`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: black;
`;

export const Input = styled('input')`
  position: relative;
  height: 36px;
  width: 100%;
  border-radius: 4px;
  padding: 8px 32px 8px 8px;
`;

export const Icon = styled('img')<{ $isPointer?: boolean }>`
  position: absolute;
  right: 0;
  top: 36px;
  width: 24px;
  height: 24px;
  ${({ $isPointer }) =>
    $isPointer &&
    css`
      cursor: pointer;
    `}}
`;

export const Button = styled(`button`)`
  height: 48px;
  margin-top: 32px;
  width: 50%;
  border-radius: 40px;
  color: black;
  cursor: pointer;
  &:hover {
    background: slategray;
    color: white;
  }
`;

export const Keys = styled('div')`
  color: black;
  font-size: 26px;
  padding: 4px;
`;
