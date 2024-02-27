import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/consts";
import New from "./new";
import More from "./more";
import { useAccount } from "../../../../store/user/hooks";
export default function Menu() {
    const account = useAccount(); //key yerine account vermemizin sebebi kullanıcı değiştiğinde algılayabilmek için
    // console.log(account);
    return (
        <nav className="mt-0.5 mb-1" key={account}>
            {mainMenu.map((menu,index) => (
                <NavLink key={index} to={typeof menu.path === 'function' ? menu.path() : menu.path}  className="py-[2px] block group">
                    {({ isActive }) => (
                        <div
                            className={classNames({
                                "p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-secondary)]": true,
                                "font-bold": isActive,
                            })}
                        >
                            <div className="w-[26.25] h-[26.25] relative">
                                {menu?.notification && (
                                    <span className="w-[18px] h-[18px] border border-[color:var(--background-primary)] text-[color:var(--background-primary)] rounded-full bg-[color:var(--color-primary)] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                                        {menu?.notification}
                                    </span>
                                )}
                                {isActive ? menu.icon.active : menu.icon.passive}
                            </div>
                            <div className="pr-4 text-xl">{menu.title}</div>
                        </div>
                    )}
                </NavLink>
            ))}
            <More />
            <New />
        </nav>
    );
}
