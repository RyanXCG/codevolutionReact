import logo from "./logo.svg";
import "./App.css";
import CustomHooks from "./CustomHooks";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
      <UserForm />
    </div>
  );
}

export default App;
