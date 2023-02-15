import MainForm from "./components/form/MainForm";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App min-h-[100vh]">
      <Header />
      <main className="m-5 flex justify-center">
        <MainForm />
      </main>
    </div>
  );
}

export default App;
