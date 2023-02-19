import PropTypes from 'prop-types';
import { Friends } from './friendList.styled';
import { FriendsItem } from 'components/friendListItem/friendListItem';
export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => {
        return (
          <FriendsItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </Friends>
  );
};
FriendList.propTypes = {
  frends: PropTypes.arrayOf(PropTypes.object),
};
