import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: start;
  border: 1px solid black;
  background-color:white;
`;
const onOf = props => {return props.isOnline ? 'green': 'red'};
export const Status = styled.span`
display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${onOf};
`;
export const Avatar = styled.img`
  width: 48px;
`;
export const Name = styled.p`
font-size:20px;
`;