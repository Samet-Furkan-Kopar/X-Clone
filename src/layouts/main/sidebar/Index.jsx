import Logo from "./logo/Index";
import Menu from "./menu/Index";
import Account from "./account"
const Sidebar = () => {
    return (
        <aside className="w-[275px] max-h-screen min-h-screen p-1  flex flex-col ">
            <Logo />
            <Menu />
            <Account/>
        </aside>
    );
};

export default Sidebar;
