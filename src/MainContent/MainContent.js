import React, { useState, useEffect } from "react";
import { Play } from 'lucide-react';
import "../Reset/Reset.css";
import "./MainContent.css";
import card1 from "../assets/playlist/1.jpeg";
import card2 from "../assets/playlist/2.png";
import card3 from "../assets/playlist/card-descobertas.png";
import card5 from "../assets/playlist/5.jpeg";
import card7 from "../assets/playlist/7.jpeg";
import card8 from "../assets/playlist/8.jpeg";
import card9 from "../assets/playlist/9.jpeg";
import card10 from "../assets/playlist/10.jpeg";
import card11 from "../assets/playlist/11.jpeg";
import card12 from "../assets/playlist/12.jpeg";
import card13 from "../assets/playlist/13.jpeg";
import card14 from "../assets/playlist/14.jpeg";
import card15 from "../assets/playlist/15.jpeg";
import card16 from "../assets/playlist/card-dormir.jpg";

const MainContent = ({ searchResults }) => {
  const showArtist = searchResults && searchResults.length > 0;
  const [greeting, setGreeting] = useState("");  // Criando o estado

  const updateGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("☀️ Bom dia, João!");  // Usando setGreeting ao invés de manipular DOM
    } else if (hour >= 12 && hour < 18) {
      setGreeting("🌅 Boa tarde, João!");
    } else {
      setGreeting("🌙 Boa noite, João!");
    }
  };

  useEffect(() => {
    updateGreeting();
    const intervalId = setInterval(updateGreeting, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div className="main-container">
        <div className="playlist-container">
          <div id="result-playlists" className={showArtist ? 'hidden' : ''}>
            <div className="playlist">
              <h1 id="greeting-title"> {greeting} </h1>
              <h2 className="greeting-subtitle">Navegar por todas as seções</h2>
            </div>

            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                  <a href="" className="cards">
                    <div className="cards card1">
                      <img src={card1} alt="" />
                      <span>Pop Brasil</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card2">
                      <img src={card2} alt="" />
                      <span>Feitos para você</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card3">
                      <img src={card3} alt="" />
                      <span>Descobertas Da Semana</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card4">
                      <img
                        src="https://i.scdn.co/image/ab67706f0000000260aae1fba88c40a8bc9249fe"
                        alt=""
                      />
                      <span>Top Brasil</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card5">
                      <img src={card5} alt="" />
                      <span>Para treinar</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card6">
                      <img
                        src="https://i.scdn.co/image/ab67706f000000020fc2b1e4548de3bf52286257"
                        alt=""
                      />
                      <span>Cozinhando Em Casa</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card7">
                      <img src={card7} alt="" />
                      <span>Sertanejo</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card8">
                      <img src={card8} alt="" />
                      <span>Samba e pagode</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card9">
                      <img src={card9} alt="" />
                      <span>Funk Hits</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card10">
                      <img src={card10} alt="" />
                      <span>MPB</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card11">
                      <img src={card11} alt="" />
                      <span>Rock</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card12">
                      <img src={card12} alt="" />
                      <span>Hip Hop</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card13">
                      <img src={card13} alt="" />
                      <span>Indie</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card14">
                      <img src={card14} alt="" />
                      <span>Relax</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card15">
                      <img src={card15} alt="" />
                      <span>Música Latina</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card16">
                      <img src={card16} alt="" />
                      <span>Hora De Dormir</span>
                      <div className="play-icon">
                        <Play size={24} />
                      </div>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div id="result-artist" className={!showArtist ? 'hidden' : ''}>
            <div className="grid-container">
              <div className="artist-card" id="">
                <div className="card-img">
                  <img id="artist-img" className="artist-img" 
                    src={showArtist ? searchResults[0].urlImg : ''} 
                    alt={showArtist ? searchResults[0].name : ''} />
                  <div className="play">
                    <span className="fa fa-solid fa-play"><Play /></span>
                  </div>
                </div>
                <div className="card-text">
                <a title={showArtist ? searchResults[0].name : ''} className="vst" href=""></a>
                  <span className="artist-name" id="artist-name">{showArtist ? searchResults[0].name : ''}
                  </span>
                  <span className="artist-categorie">Artista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;