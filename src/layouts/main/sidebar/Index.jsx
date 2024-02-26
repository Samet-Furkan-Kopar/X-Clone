import Logo from "./logo/Index";
import Menu from "./menu/Index";
import Account from "./account"
const Sidebar = () => {
    return (
        <aside className="w-[275px] p-1 flex flex-col max-h-screen min-h-screen sticky top-0">
            <Logo />
            <Menu />
            <Account/>
        </aside>
    );
};

export default Sidebar;
