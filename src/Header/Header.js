import React, { useState } from "react";
import "./Header.css";
import "../Reset/Reset.css";
import "../script";
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import imgSearch from "../assets/icons/search.png";

const Header = () => {
  const [searchValue, setSearchValue] = useState(""); // Criando estado para o valor do input

  const handleChange = (event) => {
    setSearchValue(event.target.value); // Atualizando o estado com o valor do input
  };

  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="" />
        </button>
      </div>
      <div className="header__search">
        <img src={imgSearch} alt="" />
        <input
          id="search-input"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
          value={searchValue} // Usando o estado aqui
          onChange={handleChange} // Adicionando o onChange
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;