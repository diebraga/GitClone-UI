import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  padding-left: 16px;
  padding-right: 16px;

`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 780px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  @media (min-width: 768px) {
    width: 25%
  }
`;

export const RightSide = styled.div`
    @media (min-width: 768px) {
    width: 75%
  }
`;

export const Repos = styled.div`
  padding-top: 24px;

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }

  > div {
    margin-top: 8px;

    display: grid;
    grid-gap: 16px;

    grid-template-columns: 1fr;
  }
`;
