import React from 'react'

const Tweet = ({name, tweet}) => (
    <section>
        <h3>{name}</h3>
        <p>{tweet}</p>
    </section>
)

export default Tweet;