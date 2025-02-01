import "./App.css";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContent from './MainContent/MainContent';


function App() {
  const [searchResults, setSearchResults] = useState([]);


  return (
    <div>
      <Header onSearchResults={setSearchResults} />
      <Sidebar />
      <Footer />
      <MainContent searchResults={searchResults} />
    </div>
  );
}

export default App;
