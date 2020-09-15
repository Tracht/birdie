import styled from 'styled-components';

export const TableHeader = styled.th`
  padding: 0.75em;
  height: 100%;
  text-align: left;
  background-color: mediumslateblue;
  border-collapse: collapse;
  border-bottom: 2px solid;
  border: mediumslateblue;
  color: white;
`;

export const TableRow = styled.tr`
  background-color: white;
`;

export const TableDetail = styled.td`
  border-top: 1px solid #dee2e6;
  text-align: left;
  padding: 8px;
  background-color: white;
  color: mediumslateblue;
`;

export const Table = styled.table`
  table-layout: fixed;
  font-weight: 400;
  border-collapse: collapse;
  width: 100%;
  display: table;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: white;
  border: mediumslateblue;
  height: "45vh";
`;

export const TableWrapper = styled.div`
  overflow-x: auto; 
  margin-top: 2rem;
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
`;