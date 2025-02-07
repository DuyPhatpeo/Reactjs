function Hello(props) {
  const { name, content } = props;
  return (
    <div>
      {content} {name}
    </div>
  );
}

export default Hello;
