import Header from "./components/Header";
import InputAdd from "./components/InputAdd";
import List from "./components/List";

function App() {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="m-auto shadow-xl w-96 h-fit min-h-[24rem] flex flex-col rounded-lg overflow-hidden">
        <div className="h-fit">
          <Header />
        </div>
        <div className="flex-auto bg-white dark:bg-sky-900">
          <List />
        </div>
        <div className="h-fit">
          <InputAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
