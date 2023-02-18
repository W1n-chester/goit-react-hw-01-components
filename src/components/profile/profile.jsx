import PropTypes from 'prop-types';
import {
  UserProfile,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserLabe,
  UserQuantitys,
} from './profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <UserProfile>
      <div>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </div>

      <UserStats>
        <li>
          <UserLabe>Followers</UserLabe>
          <UserQuantitys>{followers}</UserQuantitys>
        </li>
        <li>
          <UserLabe>Views</UserLabe>
          <UserQuantitys>{views}</UserQuantitys>
        </li>
        <li>
          <UserLabe>Likes</UserLabe>
          <UserQuantitys>{likes}</UserQuantitys>
        </li>
      </UserStats>
    </UserProfile>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
