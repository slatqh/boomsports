import axios from 'axios';
const TOKEN =
  'AAAAAAAAAAAAAAAAAAAAAPe1OAEAAAAAxlCu0RCmEPGiJZ0cJFByeX575Gg%3DSY24waX0kXdhp2ObblKeMtoQt59LF8CcHL2QiVkinSxJkIBB5G';

export const twitterApi = async search => {
  const {data} = await axios.get(
    `https://api.twitter.com/2/tweets/search/recent?query=${search}&max_results=10&tweet.fields=public_metrics&expansions=entities.mentions.username`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );
  if (data?.meta?.result_count === 0) return null;
  return data?.data
    .sort((a, b) =>
      a.public_metrics.retweet_count > b.public_metrics.retweet_count ? -1 : 1,
    )
    .map(i => {
      return {...i, name: i.entities?.mentions[0]?.username};
    });
  // .slice(5);
};
