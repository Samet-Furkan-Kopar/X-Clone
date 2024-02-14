import Logo from "./logo/Index";
import Menu from "./menu/Index";
const Sidebar = () => {
    return (
        <aside className="w-[275px] min-h-screen px-2">
            <Logo />
            <Menu />
        </aside>
    );
};

export default Sidebar;
