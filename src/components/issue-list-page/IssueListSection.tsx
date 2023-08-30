import { FC } from 'react';
import { styled } from 'styled-components';
import IssueItem from './IssueItem';

interface Props {
  issueList: any[]; //타입 수정 요망
}

const IssueListSection: FC<Props> = ({ issueList }) => {
  return (
    <IssueListSectionWrap>
      {issueList.map((issue, index) => (
        <IssueItem issue={issue} key={index} />
      ))}
    </IssueListSectionWrap>
  );
};

export default IssueListSection;

const IssueListSectionWrap = styled.section`
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.64);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
