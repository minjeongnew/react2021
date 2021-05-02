import React, { useEffect, useState } from 'react';

export default function UseMounted(props) {
    const [ mounted, setMounted ] = useState(false)
    // 마운트 됐다 -> 첫번째 렌더링이 끝났다
    // 상태값 변경 함수는 렌더링 끝난 다음에 호출 되니까
    useEffect(()=> {
        setMounted(true)
    }, []) // 매번 호출될 필요는 없기 때문에 빈 배열 넣어준다. 초기 한번만 실행된다
    return mounted
}

