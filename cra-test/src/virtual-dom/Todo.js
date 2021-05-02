function Todo ({title, desc}) {
    const [priority, setPriority] = useState('high');
    function onClick() {
        setPriority(priority === 'high' ? 'low' : 'high')
    }
    return (
        <div>
            <Title title={title}/>
            <p>{desc}</p>
            <p>{priority === 'high' ? '우선순위 높음' : '우선순위 낮음'}</p>
            <buton onClick={onClick}>우선순위 변경</buton>
        </div>
    )
}

const Title = React.memo(({title})=>{
    return <p style={{color:'blue'}}>{title}</p>
})
ReactDOM.render(
    <Todo title="React" desc="react study"/>,
    document.getElementById('root')
)