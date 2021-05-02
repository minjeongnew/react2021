import React, {useEffect} from "react";

export default function App() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `update count`;
    });
    return <button
        onClick={()=> setCount(count+1)}>
        increase
    </button>
}