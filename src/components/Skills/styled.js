import { styled } from "styled-components";
import { StyledContent, StyledHeader } from "../../themes";

export const Wrapper = styled.div`
  max-width: 1216px;
  background-color: ${({ theme }) => theme.skillsBackground};
  padding: 32px;
`;

export const Header = styled(StyledHeader)`
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.skillsBorderBottom};
  padding-top: 32px;
  padding-bottom: 15px;
`;

export const ItemsList = styled(StyledContent)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${({ theme }) => theme.primaryText};
  padding-top: 32px;
`;

export const Item = styled.li`
  list-style: circle;
`;
