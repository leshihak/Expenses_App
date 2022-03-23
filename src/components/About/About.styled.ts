import { Box } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled(Box)`
	background: linear-gradient(
		-40deg,
		black,
		rgb(82, 82, 82),
		rgb(156, 156, 156),
		white
	);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
	height: calc(100vh - 100px);
	padding: 50px;
`;
