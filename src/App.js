import "./App.css";
import Crud from "./components/Crud";
import Form from "./components/Form";

//Context
import UserState from "./components/context/UserState";

function App() {
  return (
    <div>
      <UserState>
        <Form />
        <Crud />
      </UserState>
    </div>
  );
}

export default App;
