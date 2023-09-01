import { styled } from 'styled-components';

const NotFoundPage = () => {
  return (
    <IssueListContainer>
      <IssueListInner>
        <h2>⚠️ NotFound ⚠️</h2>
        <p>페이지 주소를 다시 확인해주세요</p>
      </IssueListInner>
    </IssueListContainer>
  );
};

export default NotFoundPage;

const IssueListContainer = styled.main`
  color: white;
`;

const IssueListInner = styled.section`
  width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
