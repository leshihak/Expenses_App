import { Box } from '@mui/material';
import {
  LoaderWrapper,
  RotatorWrapper,
  TriangleWrapper,
} from './Loader.styled';

const Loader = () => (
  <Box height="100vh" bgcolor="black">
    <LoaderWrapper position="absolute" top="50%" left="50%" fontSize="100px">
      <RotatorWrapper>
        <TriangleWrapper />
        <TriangleWrapper />
        <TriangleWrapper />
        <TriangleWrapper />
      </RotatorWrapper>
    </LoaderWrapper>
  </Box>
);

export default Loader;
