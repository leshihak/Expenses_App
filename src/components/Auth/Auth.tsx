import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth: FC = () => {
	const navigate = useNavigate();

	return <button onClick={() => navigate('/')}>TEST</button>;
};

export default Auth;
