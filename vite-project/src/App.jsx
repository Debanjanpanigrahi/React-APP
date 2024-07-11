
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-amber-700 min-h-screen px-6 py-3600 flex flex-col gap-60"> 
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;