import { styled } from 'styled-components';
import { ADVERTISEMENT } from '../../constants/advertisemant';

const Advertisement = () => {
  return (
    <AdvertisemnetWrap>
      <a href={ADVERTISEMENT.url}>
        <StyledImg src={ADVERTISEMENT.img} alt={ADVERTISEMENT.alt} />
      </a>
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
