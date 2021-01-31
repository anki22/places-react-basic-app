import logo from './../assets/images/logo.svg';
import home from './../assets/images/home.svg';
import briefcase from './../assets/images/briefcase.svg';
import compass from './../assets/images/compass.svg';
import bell from './../assets/images/bell.svg';
import gear from './../assets/images/gear.svg';
import logOut from './../assets/images/log-out.svg';

function Sidebar() {
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <ul className="top-menu menu">
                    <li className="logo sidebar-icon">
                        <div className="icon-wrap"><img alt="logo" src={logo} /></div>

                    </li>
                    <li className="sidebar-icon">
                        <div className="icon-wrap selected"><img alt="home" src={home} /></div>

                    </li>
                    <li className="sidebar-icon">
                        <div className="icon-wrap"><img alt="documents" src={briefcase} /></div>

                    </li>
                    <li className="sidebar-icon">
                        <div className="icon-wrap"><img alt="direction" src={compass} /></div>

                    </li>
                    <li className="sidebar-icon">
                        <div className="icon-wrap">
                            <span className="notification on"></span>
                            <img alt="notification" src={bell} />
                        </div>

                    </li>
                    <li className="sidebar-icon">
                        <div className="icon-wrap"><img alt="settings" src={gear} /></div>

                    </li>
                </ul>
                <ul className="bottom-menu menu">
                    <li className="sidebar-icon">
                        <div className="icon-wrap"><img alt="logout" src={logOut} /></div>

                    </li>
                </ul>

            </div>
        </div>

    );
}

export default Sidebar;