import { Footer, Navbar } from "./components";
import { ClientRouter } from "./routes";

const App = () => {
  return (
    <div className="container m-auto w-[100%] p-0 box-border">
      <Navbar />
      <ClientRouter />
      <Footer />
    </div>
  );
};

export default App;
