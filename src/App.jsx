import Header from "./assets/components/Header";
import Navtabs from "./assets/components/Navbar";
import Section from "./assets/components/project";
import Footer from "./assets/components/Footer";
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navtabs />
      <Header />
      <Outlet />
      <Footer />
    </div>
    
  );
}

export default App;

