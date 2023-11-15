import {
  Content,
  EmailAddress,
  Facebook,
  FooterWrapper,
  GitHub,
  Header,
  LinkedIN,
  LogoBox,
  LogosContainer,
} from "./styled";

const Footer = () => (
  <>
    <FooterWrapper>
      <Header>Let's talk !</Header>
      <EmailAddress
        href="mailto:wojciechjanmigdal@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        WojciechJanMigdal@gmail.com
      </EmailAddress>
      <Content>
        I'm open to new opportunities 🧐 If you need a task-focused, very
        experienced in teamwork and teamleading person - feel free to contact me
        😀
      </Content>

      <LogosContainer>
        <LogoBox>
          <GitHub />
        </LogoBox>
        <LogoBox>
          <LinkedIN />
        </LogoBox>
        <LogoBox>
          <Facebook />
        </LogoBox>
      </LogosContainer>
    </FooterWrapper>
  </>
);

export default Footer;
