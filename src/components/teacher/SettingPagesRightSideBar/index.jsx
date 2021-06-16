import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./index.less";

// export default class SettingPagesRightSideBar extends Component {
//   render() {
//     let currentLocationPath = useLocation()
//     console.log(currentLocationPath.pathname);
//     return (
      
//     );
//   }
// }

const SettingPagesRightSideBar = props => (
  <section className="settings-page__navbar">
    <h1 className="settings-page__navbar-header">Настройки</h1>
    <nav className="settings-page__navbat-nav">
      <ul className="settings-page__navbar-wrap">
          <li className={`settings-page__navbar-link ${window.location.pathname === "/teacher_profile" ? "settings-page__navbar-link-active" : ""}`}>
              <Link
                to="/teacher_profile"
                className="settings-page__navbar-link__href"
              >
                Профиль
              </Link>
          </li>
      </ul>
    </nav>
  </section>
)

export default SettingPagesRightSideBar