import MedalInputForm from "./components/MedalInputForm";

function App() {
  return (
    <>
      <header>
        <h1 className="text-2xl pt-20 text-center h-60 font-extrabold">
          Olympic Medal Count
        </h1>
      </header>
      <main>
        <MedalInputForm />
      </main>
    </>
  );
}

export default App;
