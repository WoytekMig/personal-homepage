import { styled } from "styled-components";
import { StyledContent, StyledHeader } from "../../themes";
import { ReactComponent as ListStyleDot } from "../../components/icon/list-style-dot.svg";

export const Wrapper = styled.div`
  max-width: 1216px;
  background-color: ${({ theme }) => theme.skillsBackground};
  padding: 32px;
  margin-bottom: 72px;
`;

export const Header = styled(StyledHeader)`
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.skillsBorderBottom};
`;

export const ItemsList = styled(StyledContent)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${({ theme }) => theme.primaryText};
  padding-top: 32px;
  list-style: none;
`;

export const Item = styled.li`
  padding: 4px;
`;

export const ListStyleColorDot = styled(ListStyleDot)`
  color: ${({ theme }) => theme.blueElements};
  width: 9px;
  height: 9px;
  padding-right: 16px;
`;
