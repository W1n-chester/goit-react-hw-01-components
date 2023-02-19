import { Profile } from 'components/profile/profile';
import { Statistics } from 'components/statistics/statistics';
import { FriendList } from 'components/friendList/friendList';
import { TransactionHistory } from './transactionHistory/transactionHistory';
import user from 'start-json/user.json';
import data from 'start-json/data.json';
import friends from 'start-json/friends.json';
import items from 'start-json/transactions.json';
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
      <FriendList friends={friends} />
      <TransactionHistory items={items } />
    </div>
  );
};
