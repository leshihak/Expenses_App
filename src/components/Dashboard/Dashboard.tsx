import { FC } from 'react';
import { useAuth } from '../../hooks/useAuth';
import useMonobankToken from '../../hooks/useMonobankAuth';
import { getBankData } from '../../services/bank.service';
import Drawer from '../ui/Drawer/Drawer';
import Loader from '../ui/Loader/Loader';
import UserInfo from '../UserInfo/UserInfo';

const DUMMY_INFO = {
  totalBalance: 400,
};

const Dashboard: FC = () => {
  const { user } = useAuth();
  const token = useMonobankToken();

  if (!token) {
    return <Loader />;
  }

  const handleClick = () => {
    getBankData(token)
      .then((result) => {
        const { data } = result;
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Drawer>
      <UserInfo
        totalBalance={DUMMY_INFO.totalBalance}
        userPhotoUrl={user?.photoURL}
        userName={user?.displayName}
      />
      <button onClick={handleClick} style={{ backgroundColor: 'green' }}>
        CLICK
      </button>
    </Drawer>
  );
};

export default Dashboard;
