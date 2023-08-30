import { styled } from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <StyledLogoBox>
          <StyledParagraph className="lg">GitHub Issue Viewer</StyledParagraph>
        </StyledLogoBox>
        <StyledInfoBox>
          <div>
            <StyledParagraph className="sm">Organization</StyledParagraph>
            <StyledParagraph className="md">facebook</StyledParagraph>
          </div>
          {/* 데이터로 변경 요망 */}
          <div>
            <StyledParagraph className="sm">Repository</StyledParagraph>
            <StyledParagraph className="md">react</StyledParagraph>
          </div>
        </StyledInfoBox>
        {/* 데이터로 변경 요망 */}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.main`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5354735644257703) 0%,
    rgba(0, 0, 0, 0.3870141806722689) 48%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 50px;
`;

const HeaderInner = styled.section`
  margin: 0 auto;
  box-sizing: border-box;
  width: 1080px;
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

const StyledLogoBox = styled.div`
  flex: 1;
`;
const StyledInfoBox = styled.div`
  min-width: 300px;
  display: flex;
  gap: 10px;
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
    line-height: 50px;
    font-weight: 700;
    color: white;
  }
`;
