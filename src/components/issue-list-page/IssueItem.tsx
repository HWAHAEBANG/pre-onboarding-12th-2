import { FC } from 'react';
import { styled } from 'styled-components';
// import { Issue } from '../../types/issueType';
import formatIsoDate from '../../utils/dateUtil';
import { useNavigate } from 'react-router-dom';
import { Issue } from '../../types/issueType';

interface IssueItemProps {
  issue: Issue; // 수정된 부분
}

const IssueItem: FC<IssueItemProps> = ({
  issue,
  issue: { id, number, title, user, created_at, comments },
}) => {
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate(`/detail/${id}`, { state: { issue } });
  };

  return (
    <IssueItemWrap onClick={moveToDetail}>
      <InfoBox>
        <StyledParagraph className="lg">
          #{number} {title}
        </StyledParagraph>
        <StyledParagraph className="sm">
          작성자: {user.login}, 작성일 {formatIsoDate(created_at)}
        </StyledParagraph>
      </InfoBox>
      <CommentBox>
        <StyledParagraph>코멘트: {comments}</StyledParagraph>
      </CommentBox>
    </IssueItemWrap>
  );
};

export default IssueItem;

const IssueItemWrap = styled.div`
  background-color: rgba(24, 6, 47, 0.8);
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(24, 6, 47, 0.4);
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
