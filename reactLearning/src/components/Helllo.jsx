function Hello(props){
    console.log(props);
    return <div>{props.content} {props.name}</div>
}

export default Hello;