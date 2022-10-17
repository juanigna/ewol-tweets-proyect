import React, { useContext } from 'react';
import TweetsList from '../TweetsList';
import TweetItem from '../TweetItem';
import AppContext from '../../../../contexts/AppContext';
import './style.css';
import useSubscribeTweetsList from '../../hooks/useSubscribeTweetsList';
import usePostTweet from '../../hooks/usePostTweet';

const HomeLayout = () => {
    const { data: appData } = useContext(AppContext);
    const [tweetList, loadingTweets, tweetsError] = useSubscribeTweetsList();
    const [tweetPostLoading, tweetPostError, setPostTweet, setTweetPostError] =
        usePostTweet();

    return (
        <div className="tweets-list-container">
            <TweetItem
                createMode
                user={appData.user}
                onChange={() => setTweetPostError(null)}
                loading={tweetPostLoading}
                error={tweetPostError}
                onPublish={setPostTweet}
            />
            <TweetsList
                list={tweetList}
                loading={loadingTweets}
                error={tweetsError}
            />
        </div>
    );
};

export default HomeLayout;
