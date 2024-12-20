import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Avatar } from '@mui/material';

function UserIcon() {
  const { user } = useContext(UserContext);

  return (
    <>
      <p>Hi, {user.name.split(' ')[0]}!</p>
      <Avatar alt={`${user.username}'s icon`} src={user.avatar_url} />
    </>
  );
}

export default UserIcon;
