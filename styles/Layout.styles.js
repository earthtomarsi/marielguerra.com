import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  --wrapper-margin: 2.4rem;

  display: block;
  width: 100%;
  max-width: calc(100vw - (var(--wrapper-margin) * 2));
  margin: 0 auto;

  @media (min-width: 1488px) {
    max-width: 144rem;
  }
`;

export const GridProperties = styled.div`
  --grid-size: calc(100vw - (var(--wrapper-margin) * 2));
  --grid-columns: 4;
  --grid-gap-size: 2rem;
  --grid-column-size: calc(
    (var(--grid-size) - ((var(--grid-columns) - 1) * var(--grid-gap-size))) /
      var(--grid-columns)
  );

  @media (min-width: 720px) {
    --grid-columns: 8;
    --grid-gap-size: 3rem;
  }

  @media (min-width: 1024px) {
    --grid-columns: 12;
  }

  @media (min-width: 1488px) {
    --grid-size: 144rem;
  }
`;

export const Grid = styled(GridProperties)`
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap-size);
`;

export const Spacer = styled.div`
  height: 5rem;

  @media (min-width: 720px) {
    height: 10rem;
  }
`;
