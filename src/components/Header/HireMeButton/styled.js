import { styled } from "styled-components";
import { ReactComponent as HireMeIcon } from "../../icon/Message.svg";

export const ButtonLink = styled.a`
  text-decoration: none;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: white;
  background-color: ${({ theme }) => theme.blueElements};
`;

export const Icon = styled(HireMeIcon)`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.blueElements};
`;
