import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import IssueDetail from '../components/issue-detail-page/IssueDetail';
import { Issue } from '../types/issueType';

const IssueDetailPage = () => {
  const location = useLocation();

  const {
    state: { issue },
  } = location as { state: { issue: Issue } };

  return (
    <IssueListContainer>
      <IssueListInner>
        <IssueDetail issue={issue} />
      </IssueListInner>
    </IssueListContainer>
  );
};

export default IssueDetailPage;

const IssueListContainer = styled.main`
  color: white;
`;

const IssueListInner = styled.section`
  max-width: 1080px;
  min-height: 100vh;
  margin: 30px auto;
  border-radius: 15px;
`;
