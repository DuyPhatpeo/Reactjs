function Hello({ name = "Thanh", content: message }) {
  return (
    <div>
      {message} {name}
    </div>
  );
}

export default Hello;
