import { FC } from 'react';
import { styled } from 'styled-components';
import { Issue } from '../../types/issueType';
import formatIsoDate from '../../utils/dateUtil';

const IssueItem: FC<Issue> = ({ issue }) => {
  console.log('도착', issue);

  return (
    <IssueItemWrap>
      <InfoBox>
        <StyledParagraph className="lg">
          #{issue.number} {issue.title}
        </StyledParagraph>
        <StyledParagraph className="sm">
          작성자: {issue.user.login}, 작성일 {formatIsoDate(issue.created_at)}
        </StyledParagraph>
      </InfoBox>
      <CommentBox>
        <StyledParagraph>코멘트: {issue.comments}</StyledParagraph>
      </CommentBox>
    </IssueItemWrap>
  );
};

export default IssueItem;

const IssueItemWrap = styled.div`
  background-color: rgba(24, 6, 47, 0.8); //
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(24, 6, 47, 0.4); //
  }
`;

const InfoBox = styled.div`
  width: 950px;
`;

const CommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledParagraph = styled.p`
  margin: 0;
  line-height: 25px;

  &.sm {
    font-size: 12px;
    color: #dccff0;
  }

  &.md {
    font-size: 15px;
    line-height: 18px;
    min-width: 100px;
    color: white;
  }

  &.lg {
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
