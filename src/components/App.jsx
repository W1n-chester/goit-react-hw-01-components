import { Profile } from 'components/profile/profile';
import { Statistics } from 'components/statistics/statistics';
import user from 'start-json/user.json';
import data from 'start-json/data.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};