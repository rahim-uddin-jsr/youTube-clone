import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);
  return (
    <>
      <h1 className="mt-12 text-3xl underline text-center">Vite + React</h1>
    </>
  );
}

export default App;
