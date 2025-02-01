import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContent from './MainContent/MainContent';


function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Footer />
      <MainContent />
    </div>
  );
}

export default App;
