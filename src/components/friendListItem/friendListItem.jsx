import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name} from './friendListItem.styled';
export const FriendsItem = ({ avatar, name, isOnline }) => {
    return (
      <Friend>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar"/>
        <Name >{name}</Name>
      </Friend>
    );
};
FriendsItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
};
