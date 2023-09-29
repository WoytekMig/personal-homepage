import { Header, Item, ItemsList, ListStyleColorDot, Wrapper } from "./styled";

const SkillsContainer = ({ header, content }) => (
  <Wrapper>
    <Header>{header}</Header>
    <ItemsList>
      {content.map((skill) => (
        <Item key={skill}>
          <ListStyleColorDot />
          {skill}
        </Item>
      ))}
    </ItemsList>
  </Wrapper>
);

export default SkillsContainer;
