import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import SortBar from '../components/issue-list-page/SortBar';
import IssueListSection from '../components/issue-list-page/IssueListSection';
import getIssue from '../apis/issue';
import { Filter } from '../types/filterType';

const IssueListPage = () => {
  const states = ['all', 'open', 'closed']; // 성능
  const sorts = ['created', 'updated', 'comments'];
  const [issueList, setIssueList] = useState<any>([]); // 타입 수정..

  const [searchFilter, setSearchFilter] = useState<Filter>({
    state: 'open',
    sort: 'comments',
    page: 1,
  });

  useEffect(() => {
    getIssue(searchFilter.state, searchFilter.sort, searchFilter.page)
      .then((response) => {
        setIssueList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchFilter.state, searchFilter.sort, searchFilter.page]);

  return (
    <IssueListContainer>
      <IssueListInner>
        <SortBar
          states={states}
          sorts={sorts}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
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
