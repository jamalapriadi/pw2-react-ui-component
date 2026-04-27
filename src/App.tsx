import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-6">
      <Login />

      <Register />
    </div>
  );
}

export default App;
