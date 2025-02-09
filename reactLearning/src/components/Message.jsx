export default function Message() {
  const handleClick = () => {
    console.log("Message here");
  };
  return (
    <div>
      <button onClick={handleClick()}>Click me</button>
    </div>
  );
}
