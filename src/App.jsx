import MedalInputForm from "./components/MedalInputForm";
import MedalList from "./components/MedalList";

function App() {
  return (
    <>
      <h1 className="font-extrabold">Olympic Medal Count</h1>
      <MedalInputForm />
      <MedalList />
    </>
  );
}

export default App;
