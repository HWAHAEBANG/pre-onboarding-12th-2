import { FC, useEffect } from 'react';
import { styled } from 'styled-components';
import { Issue } from '../../types/issueType';
import formatIsoDate from '../../utils/dateUtil';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

interface IssueDetailProps {
  issue: Issue;
}

const IssueDetail: FC<IssueDetailProps> = ({
  issue: { number, user, title, comments, created_at, body },
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IssueDetailWrap>
      <TitleArea>
        <StyledImage src={user.avatar_url} alt="user_avatar" />
        <InfoBox>
          <StyledParagraph className="lg">
            #{number} {title}
          </StyledParagraph>
          <StyledParagraph className="md">
            작성자 : {user.login}, 작성일 : {formatIsoDate(created_at)}
          </StyledParagraph>
        </InfoBox>
          <StyledParagraph className="md">코멘트: {comments}</StyledParagraph>
      </TitleArea>
      <hr />
      <ContentsArea>
        <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
      </ContentsArea>
    </IssueDetailWrap>
  );
};

export default IssueDetail;

const IssueDetailWrap = styled.section`
  background-color: rgba(43, 45, 55, 0.8); //
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.64);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 50px;
`;

const TitleArea = styled.div`
  display: flex;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;

const InfoBox = styled.div`
  flex: 1;
  padding: 0 20px;
  width: 700px;
`;

const ContentsArea = styled.div`
  line-height: 30px;
  max-width: 980px;
  overflow: hidden;
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
    line-height: 50px;
  }

  &.lg {
    font-size: 25px;
    line-height: 30px;
    font-weight: 600;
    color: white;
  }
`;
