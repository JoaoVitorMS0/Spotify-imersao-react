import React from "react";
import './Sidebar.css';
import '../Reset/Reset.css';
import { House, Search, LibraryBig, GlobeIcon, ListPlus, Podcast, Plus } from "lucide-react";
import logoSpotify from "../assets/icons/logo-spotify.png";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="Logo" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span className="house-icon">
                                <House />
                            </span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="search-icon">
                                <Search />
                            </span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="library-icon">
                            <LibraryBig />
                        </span>
                        <span>Sua biblioteca</span>
                        <span className="plus-icon">
                            <Plus />
                        </span>
                    </button>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <div className="playlist-title">
                            <span className="playlist-icon">
                                <ListPlus />
                            </span>
                            <span className="text title">Crie sua primeira playlist</span>
                        </div>
                        <span className="text subtitle1">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <section className="section-podcast">
                    <div className="section-podcast__content">
                        <div className="podcast-title">
                            <span className="podcast-icon">
                                <Podcast />
                            </span>
                            <span className="text title">Que tal seguir um podcast novo?</span>
                        </div>
                        <span className="text subtitle">Avisaremos você sobre novos episódios.</span>
                        <button className="section-podcast__button2">
                            <span>Explore podcasts</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages__button">
                        <span className="globe-icon">
                            <GlobeIcon />
                        </span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;