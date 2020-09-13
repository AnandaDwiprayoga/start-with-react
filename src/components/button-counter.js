import React from 'react'

const ButtonCounter = ({onCounterAdd : counterAdd}) => (
    <>
        <button onClick={counterAdd}>Click To Increament</button>
    </>
);

export default ButtonCounter;