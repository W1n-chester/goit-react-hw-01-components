import styled from '@emotion/styled';
export const TableTrs = styled.table`
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  border: 1px solid black;
  & thead {
    background-color: rgb(88, 191, 238);
  }
  &th,
  td {
    padding: 10px 15px;
    border: 1px solid black;
  }
  /* фон четных строк */
  /* tr:nth-child (even) {
    background-color: #b4daf2;
  } */
`;
