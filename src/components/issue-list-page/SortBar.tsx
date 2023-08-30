import { FC } from 'react';
import { styled } from 'styled-components';

interface Props {
  states: string[];
}

const SortBar: FC<Props> = ({ states }) => {
  return (
    <SortBarWrap>
      {states.map((state, index) => (
        <StyledButton key={index}>{state}</StyledButton>
      ))}
    </SortBarWrap>
  );
};

export default SortBar;

const SortBarWrap = styled.div`
  display: flex;
  padding: 0 20px;
`;

const StyledButton = styled.button`
  background-color: #18062f;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px 10px 0 0;
  color: #a5a3a3;
  cursor: pointer;

  &:focus {
    background-color: #411474;
    border-bottom: none;
    color: white;
  }
`;
