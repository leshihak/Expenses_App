import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { Wrapper } from './About.styled';

const About: FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        width={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          onClick={() => navigate('/auth')}
          sx={{ cursor: 'pointer' }}
        >
          <ArrowCircleLeftIcon width="40px" sx={{ mr: 1 }} />
        </Box>
        <Typography variant="h5" color="black" fontWeight={600}>
          ABOUT
        </Typography>
        <Box width="32px" />
      </Box>
      <Box>
        <Typography
          variant="body1"
          color="black"
          fontWeight={600}
          textAlign="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo facere
          alias possimus odio, expedita obcaecati delectus. Necessitatibus quos
          perspiciatis quasi dolores voluptate vero, asperiores molestias
          facilis nesciunt pariatur nisi quibusdam!
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Link
          href="https://github.com/vitaliyoliynykk"
          underline="none"
          color="black"
        >
          /vitaliyoliynykk
        </Link>
        <Link href="https://github.com/leshihak" underline="none" color="black">
          /leshihak
        </Link>
        <GitHubIcon />
      </Box>
    </Wrapper>
  );
};

export default About;
