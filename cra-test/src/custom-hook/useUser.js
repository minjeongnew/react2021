import React, {useEffect, useState} from "react";

export default function useUser(userId) {
    const [user, setUser ] = useState(null);
    useEffect(()=> {
        getUserApi(userId).then(data => setUser(data))
    }, [userId]);

    return user
}

const USER1 = { name : "hc", age: 22};
const USER2 = { name : "js", age: 20};
function getUserApi( userId ) {
    return new Promise(res => {
        setTimeout(()=> {
            res(userId % 2 ? USER1 : USER2)
        }, 500)
    });
}