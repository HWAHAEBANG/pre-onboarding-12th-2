import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import SortBar from '../components/issue-list-page/SortBar';
import IssueListSection from '../components/issue-list-page/IssueListSection';
import issue from '../apis/issue';

const IssueListPage = () => {
  const states = ['all', 'open', 'closed']; // 성능
  const [issueList, setIssueList] = useState<any>([]); // 타입 수정..

  useEffect(() => {
    issue
      .getIssue('open', 'comments', 1)
      .then((response) => {
        setIssueList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <IssueListContainer>
      <IssueListInner>
        <SortBar states={states} />
        <IssueListSection issueList={issueList} />
      </IssueListInner>
    </IssueListContainer>
  );
};

export default IssueListPage;

const IssueListContainer = styled.main`
  color: white;
`;

const IssueListInner = styled.section`
  width: 1080px;
  min-height: 100vh;
  margin: 30px auto;
  border-radius: 15px;
`;
