import { styled } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1216px;
  background-color: ${({ theme }) => theme.skillsBackground};
  padding: 32px;
`;

export const Header = styled.header`
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.headerText};
  border-bottom: 1px;
  border-color: ${({ theme }) => theme.skillsBorderBottom};
`;
