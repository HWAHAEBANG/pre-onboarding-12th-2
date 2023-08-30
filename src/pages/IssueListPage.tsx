import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import SortBar from '../components/issue-list-page/SortBar';
import IssueListSection from '../components/issue-list-page/IssueListSection';
import axios from 'axios';

const IssueListPage = () => {
  const states = ['all', 'open', 'closed']; // 성능
  //   const issueList = ['all', 'open', 'closed']; // 성능
  const [issueList, setIssueList] = useState([]);

  const GITHUB_ACCESS_KEY = process.env.REACT_APP_GITHUB_ACCESS_KEY;

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.github.com/repos/facebook/react/issues?state=open&sort=comments&per_page=30&page=1', // GitHub API URL
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${GITHUB_ACCESS_KEY}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
      .then((response) => {
        setIssueList(response.data);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  }, []); // 빈 배열은 처음 마운트 시에만 실행됨

  //   console.log('확인', issueList);

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
  /* background-color: yellow;// */
  color: white;
`;

const IssueListInner = styled.section`
  /* background-color: #18062f; // */
  width: 1080px;
  min-height: 100vh;
  margin: 30px auto;
  border-radius: 15px;
`;
