import { Link } from "react-router-dom";
import Icon from "../../../../components/Icon";
export default function Logo() {
    return (
        <div className="py-0.5">
            <Link
                to="/"
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#5dd26a1a] transation-colors"
            >
                <Icon name="logo" size={30}/>
            </Link>
        </div>
    );
}
