import {
  LoaderWrapper,
  RotatorWrapper,
  TriangleWrapper,
} from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper position="absolute" top="50%" left="50%" fontSize="100px">
      <RotatorWrapper>
        <TriangleWrapper />
        <TriangleWrapper />
        <TriangleWrapper />
        <TriangleWrapper />
      </RotatorWrapper>
    </LoaderWrapper>
  );
};

export default Loader;
