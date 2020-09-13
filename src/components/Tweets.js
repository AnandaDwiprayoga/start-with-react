import React from 'react'
import Tweet from './Tweet';

const Tweets = () => {
    const tweets = [
        {
            name : "Ananda Dwi Prayoga",
            tweet : "hello guys this is random tweet by me"
        },
        {
            name : "Abdul gofar jafar",
            tweet : "hello guys i'm from arabic"
        },
        {
            name : "Indah bunga pratiwi",
            tweet : "I'm model from east java"
        },
        {
            name : "Samson",
            tweet : "Why this platform is suck"
        },
    ];

    return (
        <section>
            {tweets.map(tweet => (
                <Tweet name={tweet.name} tweet={tweet.tweet}/>
            ))}
        </section>
    );
}

export default Tweets;