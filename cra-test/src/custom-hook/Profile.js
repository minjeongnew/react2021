import React, {useEffect, useState} from "react";

export default function Profile( userId ) {
    const [user, setUser ] = useState(null);
    useEffect(()=> {
        getUserApi(userId).then(data => setUser(data))
    }, [userId]);

    return (
        <div>
            {!user && <p>사용자 정보를 가져오는 중 ..</p>}
            {user && (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>{`age is ${user.age}`}</p>
                </>
            )}
        </div>
    )
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