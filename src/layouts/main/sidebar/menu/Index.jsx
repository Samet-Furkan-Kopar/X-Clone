import { NavLink } from "react-router-dom";
import Icon from "../../../../components/Icon";
import classNames from "classnames";
export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            <NavLink to="/" className="py-1 block group">
                {({isActive}) => (
                    <div
                        className={classNames({
                            "p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]": true,
                            "font-bold": isActive,
                        })}
                    >
                        {!isActive ? (<Icon className="block" name="home" size={24} /> ) : ( <Icon className="block" name="activeHome" size={24} />)}
                        Anasayfa
                    </div>
                )}
            </NavLink>
            <NavLink to="/explore" className="py-1 block group">
                {({isActive}) => (
                    <div
                        className={classNames({
                            "p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]": true,
                            "font-bold": isActive,
                        })}
                    >
                        {!isActive ? (<Icon className="block" name="search" size={24} /> ) : ( <Icon className="block" name="activeSearch" size={24} />)}
                        Keşfet
                    </div>
                )}
            </NavLink>
            <NavLink to="/notifications" className="py-1 block group">
                {({isActive}) => (
                    <div
                        className={classNames({
                            "p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]": true,
                            "font-bold": isActive,
                        })}
                    >
                        {!isActive ? (<Icon className="block" name="notification" size={24} /> ) : ( <Icon className="block" name="activeNotification" size={24} />)}
                        Keşfet
                    </div>
                )}
            </NavLink>
        </nav>
    );
}
