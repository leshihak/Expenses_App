import { Box } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const rotateTriangleRotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }
`;

const shrinkTriangleShrink = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.5);
    }
`;

export const LoaderWrapper = styled(Box)`
  animation: ${shrinkTriangleShrink} 1s linear infinite;
`;

export const RotatorWrapper = styled(Box)`
  animation: ${rotateTriangleRotate} 2 * 1s steps(1) infinite;
`;

export const TriangleWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 101px;
  height: 86px;
  margin-left: -0.5em;
  margin-top: -0.5774em;
  overflow: hidden;
  transform-origin: 50% 66.666%;
  border-bottom: 3px solid white;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 65px;
    height: 65px;
    border: 3px solid white;
    transform: translate(-50%, 50%) scaleY(1.732) rotate(45deg);
  }

  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      animation: growTrianglesGrow-#{$i} $duration infinite;
    }

    @keyframes growTrianglesGrow-#{$i} {
      from,
      #{$i * 10%} {
        transform: scale(0) rotate(60deg + 120deg * $i) translateY(-66.1%);
      }
      75% {
        transform: scale(1) rotate(60deg + 120deg * $i) translateY(-66.1%);
      }
      to {
        transform: scale(1) rotate(60deg + 120deg * $i) translateY(-66.1%);
      }
    }
  }
`;
