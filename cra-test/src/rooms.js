import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Rooms({ match }) {
    return (
        <div>
            <h2>This is /Rooms/</h2>
            <Link to={`${match.url}/blueRoom`}> blue room</Link>
            <br/>
            <Link to={`${match.url}/greenRoom`}> green room</Link>
            <br/>
            <Route path={`${match.url}/:room_id`} component={Room}/>
            <Route
                exact // /rooms 일 때만 렌더링 됨
                path={match.url}
                render={()=> <h3>방을 선택해 주세요 </h3>}
            />
        </div>
    )
}
function Room({match}) {
    return <h2>{`${match.params.room_id} 방을 선택했습니다.`}</h2>
}