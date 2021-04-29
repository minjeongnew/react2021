import React, {useState} from 'react';
import Title from './Title';

export default function Counter() {
    const [count, setCount] = useState(0);
    function onClick() {
        setCount(count+1);
    }

    return (
        <div>
            <Title title={`Current Count: ${count}`}></Title>
            <button onClick={onClick}>increase</button>
        </div>
    )
}