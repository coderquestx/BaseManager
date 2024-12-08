import React, { useEffect } from 'react';
import '../../scripts/Dashboard/index.tsx'
import '../../styles/Dashboard/index.scss';
import Topbar from './Topbar';
import Sidebar from "./Sidebar";
import NuclearPlantAmount from './NuclearPlantAmount';
import MilitaryBaseAmount from './MilitaryBaseAmount';
import MilitaryUnitAmount from "./MilitaryUnitAmount";
import MilitaryTransportAmount from "./MilitaryTransportAmount";
import TodoList from './TodoList';
import NuclearMap from './NuclearMap';
import Weather from './Weather';
import Chat from './Chat';

const loaderStyles = `
    #loader {
        transition: all 0.3s ease-in-out;
        opacity: 1;
        visibility: visible;
        position: fixed;
        height: 100vh;
        width: 100%;
        background: #fff;
        z-index: 90000;
    }
    #loader.fadeOut {
        opacity: 0;
        visibility: hidden;
    }
    .spinner {
        width: 40px;
        height: 40px;
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
        background-color: #333;
        border-radius: 100%;
        -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
        animation: sk-scaleout 1.0s infinite ease-in-out;
    }
    @-webkit-keyframes sk-scaleout {
        0% { -webkit-transform: scale(0) }
        100% {
            -webkit-transform: scale(1.0);
            opacity: 0;
        }
    }
    @keyframes sk-scaleout {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        } 100% {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
            opacity: 0;
        }
    }
`;

const Dashboard: React.FC = () => {
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = loaderStyles;
        document.head.appendChild(styleSheet);

        const loader = document.getElementById('loader');
        const fadeOutLoader = () => {
            if (loader) {
                setTimeout(() => {
                    loader.classList.add('fadeOut');
                }, 300);
            }
        };

        window.addEventListener('load', fadeOutLoader);

        return () => {
            window.removeEventListener('load', fadeOutLoader);
        };
    }, []);

    return (
        <div>
            {/* Loader */}
            <div id="loader">
                <div className="spinner"></div>
            </div>
            <Sidebar />
            <div className="page-container">
                <div className="header navbar">
                    <Topbar />
                </div>
                <main class="main-content bgc-grey-100">
                    <div className="main-content">
                        <div className="container-fluid">
                            <div id="mainContent">
                                <div className="row gap-20 masonry pos-r">
                                    <NuclearPlantAmount />
                                    <MilitaryBaseAmount />
                                    <MilitaryUnitAmount />
                                    <MilitaryTransportAmount />
                                    <NuclearMap />
                                    {/*<TodoList />*/}
                                    {/*<Chat />*/}
                                    {/*<Weather />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
                <span>Copyright © 2024 Designed by <a href="https://colorlib.com" target="_blank" rel="nofollow noopener noreferrer" title="Colorlib">Colorlib</a>. All rights reserved.</span>
            </footer>
        </div>
    );
};

export default Dashboard;
