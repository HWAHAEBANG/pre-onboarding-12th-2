import { useState} from 'react';
import { styled } from 'styled-components';
import SortBar from '../components/issue-list-page/SortBar';
import IssueListSection from '../components/issue-list-page/IssueListSection';
// import getIssue from '../apis/issue';
import { Filter } from '../types/filterType';
import { Issue } from '../types/issueType';

const IssueListPage = () => {
  const states = ['all', 'open', 'closed']; // 성능
  const sorts = ['created', 'updated', 'comments'];

  const [issueList, setIssueList] = useState<Issue[]>([]);

  const [searchFilter, setSearchFilter] = useState<Filter>({
    state: 'open',
    sort: 'comments',
    page: 1,
  });

  return (
    <IssueListContainer>
      <IssueListInner>
        <SortBar
          states={states}
          sorts={sorts}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <IssueListSection
          issueList={issueList}
          setIssueList={setIssueList}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
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
