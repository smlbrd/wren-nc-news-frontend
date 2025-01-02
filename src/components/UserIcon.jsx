import '../styles/UserIcon.css';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Avatar } from '@mui/material';

function UserIcon() {
  const { user } = useContext(UserContext);

  return (
    <div className="welcome-block">
      <p className="welcome-user-name">Hi, {user.name.split(' ')[0]}!</p>
      <Avatar
        className="welcome-user-icon"
        alt={`${user.username}'s icon`}
        src={user.avatar_url}
      />
    </div>
  );
}

export default UserIcon;
