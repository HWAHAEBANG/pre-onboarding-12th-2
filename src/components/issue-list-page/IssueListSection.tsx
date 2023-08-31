import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import IssueItem from './IssueItem';
import Advertisement from './Advertisement';
import { Filter } from '../../types/filterType';
import { Issue } from '../../types/issueType';
import getIssue from '../../apis/issue';

interface Props {
  issueList: Issue[]; //타입 수정 요망
  setIssueList: Dispatch<SetStateAction<Issue[]>>;
  searchFilter: Filter;
  setSearchFilter: Dispatch<SetStateAction<Filter>>;
}

const IssueListSection: FC<Props> = ({
  issueList,
  setIssueList,
  searchFilter,
  setSearchFilter,
}) => {
  const targetRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const getNewPage = async () => {
    setLoading(true);
    try {
      const response = await getIssue(
        searchFilter.state,
        searchFilter.sort,
        searchFilter.page,
      );
      const newData: Issue[] = response.data;

      setIssueList((prevData) => [...prevData, ...newData]);
      setSearchFilter((prevState) => ({ ...prevState, page: prevState.page + 1 }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  //==========

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loading) {
          getNewPage();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading, getNewPage]);

  //=========-
  return (
    <IssueListSectionWrap>
      {issueList.map((issue, index) => (
        <React.Fragment key={index}>
          {index % 4 === 0 && index !== 0 && <Advertisement />}
          <IssueItem issue={issue} />
        </React.Fragment>
      ))}
      <LoadingBox ref={targetRef}>{loading && <p>Loading...</p>}</LoadingBox>
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

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #0f0019;
  font-size: 30px;
`;
