import Backdrep from "./components/Backdrep";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
     <Todo text='learn react'/>
     <Todo text='i am going to ready for going usa '/>
     <Todo text='exprole my life is there'/>
     <Modal/>
     <Backdrep/>
    </div>
  );
}

export default App;
