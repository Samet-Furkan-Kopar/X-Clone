import { Link, NavLink } from "react-router-dom";
import {Popover} from "@headlessui/react";
import Icon from "../../../../components/Icon";
export default function Index() {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2 relative">
      <NavLink to="#" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"> Hizmet Şartları </NavLink>
      <NavLink to="#" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"> Gizlilik Politikası </NavLink>
      <NavLink to="#" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"> Çerez Politikası </NavLink>
      <NavLink to="#" className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] hover:underline"> Erişilebilirlik </NavLink>
     <div className="w-full flex gap-3">
     <Popover className="relative inline-flex leading-4">
				<Popover.Button
			    className="text-[color:var(--color-base-secondary)] outline-none leading-4 text-[13px] inline-flex items-center gap-2 hover:underline"
				>
					Daha fazla
                    <Icon name="rightBar-footer" />
				</Popover.Button>
				<Popover.Panel className="w-[150px] absolute bottom-0 right-0 max-w-[384px] grid bg-[color:var(--background-primary)] rounded-xl overflow-hidden">
                <Link to="/" className="py-3 px-4 text-[15px] hover:bg-[color:var(--background-secondary)]  transition-colors leading-5 font-bold">Hakkında</Link>
                <Link to="/" className="py-3 px-4 text-[15px] hover:bg-[color:var(--background-secondary)]  transition-colors leading-5 font-bold">Durum</Link>
                <Link to="/" className="py-3 px-4 text-[15px] hover:bg-[color:var(--background-secondary)]  transition-colors leading-5 font-bold">İşlemler için X</Link>
                <Link to="/" className="py-3 px-4 text-[15px] hover:bg-[color:var(--background-secondary)]  transition-colors leading-5 font-bold">Geliştiriciler</Link>
				</Popover.Panel>
			</Popover>
      <p className="text-[color:var(--color-base-secondary)] leading-4 text-[13px] ">
        &copy; 2021 Twitter, Inc. / SFK
      </p>
     </div>
    </footer>
  )
}
