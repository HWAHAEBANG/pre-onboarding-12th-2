import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import IssueDetail from '../components/issue-detail-page/IssueDetail';

const IssueDetailPage = () => {
  const {
    state: { issue },
  } = useLocation();

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
  width: 1080px;
  min-height: 100vh;
  margin: 30px auto;
  border-radius: 15px;
`;
