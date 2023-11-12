import styled from "styled-components";
import { StyledContent, StyledHeader } from "../../themes";
import { ReactComponent as GitHubSign } from "../icon/mark-github.svg";

export const LogoDiv = styled.div`
  display: grid;
  justify-items: center;
`;

export const GitHubLogo = styled(GitHubSign)`
  color: ${({ theme }) => theme.blueElements};
  width: 40px;
  height: 40px;
  padding-bottom: 12px;
`;

export const PortfolioTitle = styled(StyledHeader)`
  padding-bottom: 8px;
`;

export const PortfolioSubTitle = styled.article`
  color: ${({ theme }) => theme.headerText};
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
`;

export const PortfolioTile = styled(StyledContent)`
  padding: 56px;
  margin: 32px;
`;

export const TileHeader = styled.h1`
  color: ${({ theme }) => theme.blueElements};
  font-size: 24px;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.6px;
`;
