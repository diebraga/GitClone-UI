import styled from 'styled-components';
import { RiBookMarkLine } from 'react-icons/ri'

export const Container = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  padding-left: 16px;
  padding-right: 16px;

  overflow: hidden;
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
  padding-top: 0;
  padding-bottom: 0;

  padding-left: 16px;
  padding-right: 16px;

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

    @media (min-width: 760px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const HeadingCalendar = styled.div`  
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`  
  width: 16px;
  right: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`  
  background: var(--primary);

  .content {
    display: flex;
    align-items: center;
    width: min-content;

    padding: 14px 16px;

    border-bottom: 2px solid var(--orange);

    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }

    .number {
      font-size: 12px;
      background: var(--ticker);
      padding: 2px 6px;
      border-radius: 24px;
      font-weight: 600;
    }
  }

  .line {
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);

    margin-left: 50vw;
  }

  &.mobile {
    padding-top: 24px;
    padding-bottom: 24px;

    .content {
      margin: 0 auto;
    }

  }
`;
