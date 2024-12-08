import React, { useEffect } from 'react';
import '../../Dashboard/PageLoader.scss';

const PageLoader: React.FC = () => {
    useEffect(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('fadeOut');
            }, 300);
        }
    }, []);

    return (
        <div id='loader'>
            <div className="spinner"></div>
        </div>
    );
};

export default PageLoader;
