function Hello(props) {
  console.log(props);
  return <div>Username: {props.getUserName()}</div>;
}

export default Hello;
