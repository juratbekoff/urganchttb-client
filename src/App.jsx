import { Footer, Navbar } from "./components";
import { ClientRouter } from "./routes";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <ClientRouter />
      <Footer />
    </div>
  );
};

export default App;
