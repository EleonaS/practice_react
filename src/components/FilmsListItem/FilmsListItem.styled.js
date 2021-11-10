import styled from 'styled-components';

const Title = styled.h2`
color: tomato;`;

const ListItem = styled.li`
cursor:pointer;
  &:hover  ${Title} {
  color: blue;
  font-size:28px;
}
`;

export { Title, ListItem };