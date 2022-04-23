import chainIcon from "assets/icons/chain.svg";
import copyIcon from "assets/icons/copy.svg";
import telegramIcon from "assets/icons/telegram.svg";
import twitterIcon from "assets/icons/twitter.svg";
import GradientBtn from "components/GradientBtn";
import IconBtn from "components/IconBtn";
import Input from "components/Input";
import NFTCard from "components/NFTCard";
import { T_APE_NFTS } from "mock";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-auto-rows: 20rem; */
  margin: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.primary}80;

    @media (max-width: 1024px) {
      border: unset;
      border-bottom: 1px solid ${({ theme }) => theme.primary}80;
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.72rem;
  margin-bottom: 1rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 15px;
  opacity: 0.56;
  line-height: 1.75em;
  margin: auto;
  max-width: 80%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
`;

const Label = styled.p`
  font-size: 0.96rem;
  opacity: 0.56;
`;

const SubTitle = styled.h3`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
`;

const RefCount = styled.h3`
  font-size: 17px;
  margin: 0.1rem 0;

  span {
    color: ${({ theme }) => theme.primary};
    margin: 0 0.36rem;
  }
`;

const SocialCard = styled.div`
  border-radius: 0.72rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary}29;
  border: 1px solid ${({ theme }) => theme.primary}40;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SocialIcon = styled.img`
  width: 1.5rem;
  aspect-ratio: 1;
  filter: ${({ theme }) => theme.primaryFilter};
`;

const SocialTitle = styled.h4`
  font-family: "Nasalization";
`;

const SocialSubtitle = styled.p`
  opacity: 0.64;
`;

const SocialSpan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default () => {
  return (
    <Container>
      <Column>
        <Header>
          <Title>Staking Pool</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          </Description>
          <Row>
            <Label>You have:</Label>
            <GradientBtn stroked>1 Staking Ticket</GradientBtn>
          </Row>
        </Header>
        <Body>
          <Col>
            <NFTCard
              styles={`
widht: 12rem;
height: 16rem;
            `}
              item={{
                title: T_APE_NFTS[0].title,
                subtitle: T_APE_NFTS[0].subtitle,
                src: T_APE_NFTS[0].src,
              }}
            />
            <GradientBtn>Increase Stake</GradientBtn>
          </Col>
        </Body>
      </Column>
      <Column>
        <Header>
          <Title>Social pool</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          </Description>
          <Row>
            <Label>You have:</Label>
            <GradientBtn stroked>1 Staking Ticket</GradientBtn>
          </Row>
        </Header>
        <Body>
          <Col style={{ gap: "0.5rem" }}>
            <SubTitle>Social Tasks</SubTitle>
            <Row style={{ flexDirection: "column" }}>
              <SocialCard>
                <SocialIcon src={telegramIcon} />
                <SocialSpan>
                  <SocialTitle>Telegram Tasks</SocialTitle>
                  <SocialSubtitle>0/2 tickets collected</SocialSubtitle>
                </SocialSpan>
              </SocialCard>
              <SocialCard>
                <SocialIcon src={twitterIcon} />
                <SocialSpan>
                  <SocialTitle>Twitter Tasks</SocialTitle>
                  <SocialSubtitle>0/2 tickets collected</SocialSubtitle>
                </SocialSpan>
              </SocialCard>
            </Row>
          </Col>

          <Col style={{ gap: "0.5rem" }}>
            <SubTitle>Referral link</SubTitle>
            <RefCount>
              Referrals:<span>0</span>
            </RefCount>
            <Row>
              <Input icon={chainIcon} placeholder="Copy your URL..." />
              <IconBtn icon={copyIcon} />
              <IconBtn icon={twitterIcon} />
              <IconBtn icon={telegramIcon} />
            </Row>
          </Col>
        </Body>
      </Column>
    </Container>
  );
};
