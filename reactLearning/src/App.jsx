import MyFooter from "./components/Footer";
import MyHeader from "./components/Header";
import Hello from "./components/Helllo";

function App() {
  const username = "Phat";

  const getUserName = () => {
    return username;
  };
  return (
    <>
      <Hello getUserName={getUserName} />
    </>
  );
}

export default App;
