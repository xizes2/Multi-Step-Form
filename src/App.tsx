import "./App.css";
import MainForm from "./components/form/MainForm";

function App() {
  return (
    <div className="App">
      <h1 className="p-10">MultiStep Form</h1>
      <main className="m-auto flex max-w-2xl justify-center">
        <MainForm />
      </main>
    </div>
  );
}

export default App;
