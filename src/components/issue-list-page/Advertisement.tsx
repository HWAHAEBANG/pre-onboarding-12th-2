import { styled } from 'styled-components';

const Advertisement = () => {
  return (
    <AdvertisemnetWrap>
      <a href='https://www.wanted.co.kr/'><StyledImg src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" /></a>
    </AdvertisemnetWrap>
  );
};

export default Advertisement;

const AdvertisemnetWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 150px;
`;
