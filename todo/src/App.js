import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;

// import "./App.css";
// const Mystore = createContext();
// const Black = () => {
//   return <Blue />;
// };

// const Blue = () => {
//   return <red/>
// };

// const Red = () => {
//   const Mystore = useContext(Mystore);
//   return (
//     <div>
//       <p>{Mystore.message}</p>
//       <p>{Mystore.messagetwo}</p>
//     </div>
//   );
// };

// function App() {
//   const messageValue = " hihi"
//   return (
//     <Mystore.provider
//     value
//   )
// }
