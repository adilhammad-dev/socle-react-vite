import styled from 'styled-components';

export const ExamplePageWrapper = styled.div`
  padding: 2rem 0;
  min-height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.palette.background.default};
`;

