import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = (index) => {
    setOpenDropdowns(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    const activeLink = location.pathname;
    document.querySelectorAll('.sidebar-link').forEach(link => {
      if (link.getAttribute('href') === activeLink) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, [location.pathname]);

  return (
      <div className={`sidebar ${isCollapsed ? 'is-collapsed' : ''}`}>
        <div className="sidebar-inner">
          <div className="sidebar-logo">
            <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <a className="sidebar-link td-n" href="/">
                  <div className="peers ai-c fxw-nw">
                    <div className="peer">
                      <div className="logo">
                        <img src="assets/static/images/logo.png" alt="Logo" />
                      </div>
                    </div>
                    <div className="peer peer-greed">
                      <h5 className="lh-1 mB-0 logo-text">Adminator</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="peer">
                <div className="mobile-toggle sidebar-toggle">
                  <a href="#" className="td-n" onClick={toggleSidebar}>
                    <i className="ti-arrow-circle-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ul className="sidebar-menu scrollable pos-r">
            <li className={`nav-item ${openDropdowns[1] ? 'open' : ''}`}>
              <a
                  className="sidebar-link"
                  href="#"
                  onClick={() => toggleDropdown(1)}
              >
              <span className="icon-holder">
                <i className="c-blue-500 ti-home"></i>
              </span>
                <span className="title">Dashboard</span>
              </a>
              <ul className={`dropdown-menu ${openDropdowns[1] ? 'show' : ''}`}>
                <li><a href="/subpage1">Subpage 1</a></li>
                <li><a href="/subpage2">Subpage 2</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Sidebar;
