import logo from "./logo.svg";
import "./App.css";

// import PostList from "./Components/PostList";
// import PostForm from "./Components/PostForm";
import ClassCounter from "./Components/StateHooks/ClassCounter";
import HookCounter from "./Components/StateHooks/HookCounter";
import HookCounterTwo from "./Components/StateHooks/HookCounterTwo";
import HookCounterThree from "./Components/HookCounterThree";
function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
      {/* <PostForm /> */}
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
    </div>
  );
}

export default App;
