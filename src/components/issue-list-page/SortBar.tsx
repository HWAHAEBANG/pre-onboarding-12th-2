import { FC, MouseEvent, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { styled } from 'styled-components';
import { SORTS, STATES } from '../../constants/filter';

type Filter = { state: string; sort: string; page: number };

interface Props {
  searchFilter: Filter;
  setSearchFilter: Dispatch<SetStateAction<Filter>>;
}

const SortBar: FC<Props> = ({ searchFilter, setSearchFilter }) => {
  const stateFilterClick = (e: MouseEvent<HTMLButtonElement>) => {
    const buttonElement = e.target as HTMLButtonElement;
    const buttonText = buttonElement.innerText;
    setSearchFilter((prevState) => ({ ...prevState, state: buttonText }));
  };

  const sortFilterClick = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSearchFilter((prevState) => ({ ...prevState, sort: selectedValue }));
  };

  return (
    <SortBarWrap>
      <StatesWrap>
        {STATES.map((state, index) => (
          <StyledButton
            className={state === searchFilter.state ? 'selected' : ''}
            key={index}
            onClick={stateFilterClick}
          >
            {state}
          </StyledButton>
        ))}
      </StatesWrap>
      <StyledSelect id="dropdown" value={searchFilter.sort} onChange={sortFilterClick}>
        {SORTS.map((sort, index) => (
          <option key={index} value={sort}>
            {sort}
          </option>
        ))}
      </StyledSelect>
    </SortBarWrap>
  );
};

export default SortBar;

const SortBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const StatesWrap = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  background-color: rgba(21, 22, 27, 0.8);
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  color: #a5a3a3;
  cursor: pointer;

  &.selected {
    background-color: #444868;
    border-bottom: none;
    color: white;
  }
`;

const StyledSelect = styled.select`
  background-color: #444868;
  color: white;
  border: none;
  border-radius: 10px 10px 0 0;
  width: 100px;
  padding-left: 10px;
`;
