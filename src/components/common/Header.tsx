import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { REPOSITORY } from '../../constants/repository';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <StyledLogoBox>
          <Link to="/">
            <StyledParagraph className="lg">GitHub Issue Viewer</StyledParagraph>
          </Link>
        </StyledLogoBox>
        <StyledInfoBox>
          <div>
            <StyledParagraph className="sm">Organization</StyledParagraph>
            <StyledParagraph className="md">{REPOSITORY.organization}</StyledParagraph>
          </div>
          <div>
            <StyledParagraph className="sm">Repository</StyledParagraph>
            <StyledParagraph className="md">{REPOSITORY.repository}</StyledParagraph>
          </div>
        </StyledInfoBox>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.main`
  background: rgb(0, 0, 0);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.30017944677871145) 0%,
    rgba(0, 0, 0, 0.15732230392156865) 48%,
    rgba(255, 255, 255, 0) 100%
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
  min-width: 160px;
  display: flex;
  gap: 10px;
`;

const StyledParagraph = styled.p`
  margin: 0;
  line-height: 25px;

  &.sm {
    font-size: 12px;
    color: #c1c5d4;
  }

  &.md {
    font-size: 15px;
    line-height: 18px;
    min-width: 80px;
    color: white;
  }

  &.lg {
    font-size: 20px;
    line-height: 50px;
    font-weight: 700;
    color: white;
  }
`;
