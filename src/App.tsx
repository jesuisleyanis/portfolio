import Home from "./components/Home";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    return (
      <div className="min-h-screen flex flex-col items-center">
        <main className="flex place-content-center w-full">
          <Home></Home>
        </main>
        <Footer></Footer>
      </div>
    );
}
export default App;
