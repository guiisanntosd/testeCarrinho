import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @keyframes Pulse {
    0% {r: 0; opacity: 0}
    50%{r: 7; opacity: .8}
    100%{r: 0; opacity: 0}
  }

  svg circle {
    fill: var(--blue);
    stroke-width: 0;
    stroke: var(--blue);

    :nth-child(1) {
      animation: Pulse 1.5s infinite linear;
      animation-delay: .0s;
    }
    :nth-child(2) {
      animation: Pulse 1.5s infinite linear;
      animation-delay: .25s;
    }
    :nth-child(3) {
      animation: Pulse 1.5s infinite linear;
      animation-delay: .5s;
    }
  }
`;