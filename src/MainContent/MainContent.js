import React, { useEffect } from "react";
import "../Reset/Reset.css";
import "./MainContent.css";
import "../script";
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

const MainContent = () => {
  const updateGreeting = () => {
    const greetingElement = document.getElementById("greeting-title");
    const hour = new Date().getHours();

    let greeting;

    if (hour >= 5 && hour < 12) {
      greeting = "☀️ Bom dia, João!";
    } else if (hour >= 12 && hour < 18) {
      greeting = "🌅 Boa tarde, João!";
    } else {
      greeting = "🌙 Boa noite, João!";
    }

    if (greetingElement) {
      greetingElement.textContent = greeting;
    }
  };

  useEffect(() => {
    updateGreeting(); // Atualiza a saudação na montagem do componente

    const intervalId = setInterval(updateGreeting, 2000); // Atualiza a cada 2 segundos

    // Função de cleanup
    return () => clearInterval(intervalId);
  }, []); // Array de dependências vazio

  return (
    <main>
      <div className="main-container">
        <div className="playlist-container">
          <div id="result-playlists">
            <div className="playlist">
              <h1 id="greeting-title"></h1>
              <h2 className="greeting-subtitle">Navegar por todas as seções</h2>
            </div>

            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                  <a href="" className="cards">
                    <div className="cards card1">
                      <img src={card1} alt="" />
                      <span>Pop Brasil</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card2">
                      <img src={card2} alt="" />
                      <span>Feitos para você</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card3">
                      <img src={card3} alt="" />
                      <span>Descobertas Da Semana</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card4">
                      <img
                        src="https://i.scdn.co/image/ab67706f0000000260aae1fba88c40a8bc9249fe"
                        alt=""
                      />
                      <span>Top Brasil</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card5">
                      <img src={card5} alt="" />
                      <span>Para treinar</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card6">
                      <img
                        src="https://i.scdn.co/image/ab67706f000000020fc2b1e4548de3bf52286257"
                        alt=""
                      />
                      <span>Cozinhando Em Casa</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card7">
                      <img src={card7} alt="" />
                      <span>Sertanejo</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card8">
                      <img src={card8} alt="" />
                      <span>Samba e pagode</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card9">
                      <img src={card9} alt="" />
                      <span>Funk Hits</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card10">
                      <img src={card10} alt="" />
                      <span>MPB</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card11">
                      <img src={card11} alt="" />
                      <span>Rock</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card12">
                      <img src={card12} alt="" />
                      <span>Hip Hop</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card13">
                      <img src={card13} alt="" />
                      <span>Indie</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card14">
                      <img src={card14} alt="" />
                      <span>Relax</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card15">
                      <img src={card15} alt="" />
                      <span>Música Latina</span>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div id="result-artist" className="hidden">
            <div className="grid-container">
              <div className="artist-card" id="">
                <div className="card-img">
                  <img id="artist-img" className="artist-img" />
                  <div className="play">
                    <span className="fa fa-solid fa-play"></span>
                  </div>
                </div>
                <div className="card-text">
                  <a title="Foo Fighters" className="vst" href=""></a>
                  <span className="artist-name" id="artist-name"></span>
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