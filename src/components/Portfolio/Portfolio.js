import {
  GitHubLogo,
  LogoDiv,
  PortfolioSubTitle,
  PortfolioTile,
  PortfolioTitle,
} from "./styled";

const Portfolio = ({ header, subHeader }) => (
  <>
    <LogoDiv>
      <GitHubLogo />
      <PortfolioTitle>{header}</PortfolioTitle>
      <PortfolioSubTitle>{subHeader}</PortfolioSubTitle>
    </LogoDiv>

    <PortfolioTile />
  </>
);

export default Portfolio;
