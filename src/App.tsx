import Login from "./components/Login";
import Register from "./components/Register";
import useApp from "./hooks/useApp";

const App = () => {
  const { isLoginFormActive } = useApp();
  return (
    <div className="flex items-center justify-center h-screen">
      {isLoginFormActive ? <Login /> : <Register />}
    </div>
  );
};

export default App;
