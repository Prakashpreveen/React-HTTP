import logo from "./logo.svg";
import "./App.css";

// import PostList from "./Components/PostList";
// import PostForm from "./Components/PostForm";
import ClassCounter from "./Components/StateHooks/ClassCounter";
import HookCounter from "./Components/StateHooks/HookCounter";
import HookCounterTwo from "./Components/StateHooks/HookCounterTwo";
import HookCounterThree from "./Components/StateHooks/HookCounterThree";
import HookCounterFour from "./Components/StateHooks/HookCounterFour";
// import EffectClassCounter from "./Components/UseEffectHooks/EffectClassCounter";
import EffectHookCounter1 from "./Components/UseEffectHooks/EffectHookCounter1";

// import Practice from "./Components/Practice";
function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
      {/* <PostForm /> */}
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      {/* <EffectClassCounter /> */}
      <EffectHookCounter1 />

      {/* <Practice /> */}
    </div>
  );
}

export default App;
