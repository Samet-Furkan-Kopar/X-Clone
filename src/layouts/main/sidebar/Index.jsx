import Logo from "./logo/Index";
import Menu from "./menu/Index";
import Icon from "../../../components/Icon";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
const Sidebar = () => {
    return (
        <aside className="w-[275px] max-h-screen min-h-screen p-1 overflow-auto flex flex-col ">
            <Logo />
            <Menu />
            <NavLink className="mt-auto rounded-full flex items-center justify-between group">
                {({ isActive }) => (
                    <div  className={classNames({
                        "p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]": true,
                        "font-bold": isActive,
                    })}>
                        <div className="w-[39px] h-[39px]">
                            <img
                                className="w-full rounded-full"
                                src="/images/avatar2.png"
                                alt="Avatar"
                            />
                        </div>
                        <div>
                            <h6 className="text-same font-semibold">Samet furkan</h6>
                            <h6 className="text-xs font-semibold">@safurks</h6>
                        </div>
                        <div className="mx-2">
                            <Icon name="threedot" size={18.5} />
                        </div>
                    </div>
                )}
            </NavLink>
        </aside>
    );
};

export default Sidebar;
