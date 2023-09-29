import { Header, Item, ItemsList, Wrapper } from "./styled";

const SkillsContainer = ({ header, content }) => (
  <Wrapper>
    <Header>{header}</Header>
    <ItemsList>
      {content.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </ItemsList>
  </Wrapper>
);

export default SkillsContainer;
