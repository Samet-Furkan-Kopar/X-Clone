import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar/Index"
import RightBar from "./rightbar/Index"
import { useModal } from "../../store/modal/hooks"
// import Modals from "../../modals"
const Index = () => {
  const modal = useModal()
  console.log(modal,"modal");
  return (
    <div className="w-[1265px] mx-auto flex">
        <Sidebar/>
        <div className="flex flex-1 gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Outlet/>
        </main>
        <RightBar/>
        {/* <Modals/> */}
        </div>
    </div>
  )
}

export default Index
