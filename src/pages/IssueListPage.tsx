import { styled } from 'styled-components';
import SortBar from '../components/issue-list-page/IssueItem';
import IssueItem from '../components/issue-list-page/SortBar';

const IssueListPage = () => {
  return (
    <IssueListContainer>
      <IssueListInner>
        <SortBar />
        <IssueItem />
      </IssueListInner>
    </IssueListContainer>
  );
};

export default IssueListPage;

const IssueListContainer = styled.main`
  /* background-color: yellow;// */
`;

const IssueListInner = styled.section`
  background-color: #18062f; //
  width: 1080px;
  min-height: 100vh;
  margin: 30px auto;
  border-radius: 15px;
`;
