import { Avatar, Box, Typography } from '@mui/material';
import { FC } from 'react';

interface UserInfoProps {
	totalBalance: number;
	userPhotoUrl: string;
	userName: string;
}

const UserInfo: FC<UserInfoProps> = ({
	totalBalance,
	userPhotoUrl,
	userName,
}) => (
	<Box
		bgcolor="white"
		height="45px"
		width={1}
		borderRadius="25px"
		display="flex"
	>
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="45px"
		>
			<Avatar
				sx={{ height: 35, width: 35, marginLeft: 5 }}
				src={userPhotoUrl}
				alt={userName}
			/>
		</Box>
		<Box width={1} ml={0.5}>
			<Box my={1} ml={2}>
				<Typography variant="h6">HELLO {userName.toUpperCase()}</Typography>
			</Box>
			<Box>
				<Typography variant="body1" color="white">
					Your total balance is
					<span style={{ color: '#197d29' }}> {totalBalance}</span>
				</Typography>
			</Box>
		</Box>
	</Box>
);

export default UserInfo;
