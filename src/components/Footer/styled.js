import styled from "styled-components";
import { StyledContent, SubHeader } from "../../themes";
import { ReactComponent as GitHubLogo } from "../icon/mark-github.svg";
import { ReactComponent as LinkedINLogo } from "../icon/LinkedIN.svg";
import { ReactComponent as FacebookLogo } from "../icon/facebook_black.svg";

export const FooterWrapper = styled.div`
  max-width: 670px;
  margin-top: 120px;
  margin-bottom: 120px;
`;

export const EmailAddress = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.headerText};
  align-items: left;
  font-size: 32px;
  font-weight: 900;
  line-height: normal;
  text-transform: lowercase;
  letter-spacing: 1.6px;
  margin-top: 24px;
  margin-bottom: 24px;
  display: block;
`;

export const Header = styled(SubHeader)`
  margin-top: 120px;
  margin-bottom: 0;
`;

export const Content = styled(StyledContent)``;

export const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 56px;
`;

export const LogoBox = styled.div`
  color: ${({ theme }) => theme.headerText};
  height: 48px;
  width: 48px;
`;

export const GitHub = styled(GitHubLogo)``;

export const LinkedIN = styled(LinkedINLogo)``;

export const Facebook = styled(FacebookLogo)``;
