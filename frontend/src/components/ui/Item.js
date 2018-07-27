import styled from 'styled-components';

const Item = styled.li`
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
    color: ${props => props.completed ? '#888' : 'black'};
  }
`

export default Item;
