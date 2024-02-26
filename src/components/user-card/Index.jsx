/* eslint-disable react/prop-types */
// import propTypes from "prop-types";
import Button from "../button/Index";
import { useState } from "react";
export default function UserCard({ user }) {
    const [following, setFollowing] = useState(false);

    return (
        <button className="py-3 hover:bg-white/[0.03] px-4 flex gap-3">
            <img src={user?.avatar} className="w-10 h-10 rounded-full object-cover" />
            <div className="flex-1 flex flex-col text-left">
                <div className="text-[15px] leading-5 text-[#e7e9ea] font-bold">
                    {user?.username}
                </div>
                <div className="text-[15px] text-[#71767b]">@{user?.fullName}</div>
            </div>
            <div>
                {following ? (
                    <Button
                        variant="white-outline"
                        size="small"
                        onClick={() => setFollowing(false)}
                        className="whitespace-nowrap group"
                    >
                        <div className="flex group-hover:hidden transition-colors">Takip ediliyor</div>
                        <div className="hidden group-hover:flex">Takibi bırak</div>
                    </Button>
                ) : (
                    <Button variant="white" size="small" onClick={() => setFollowing(true)}>
                        Takip et
                    </Button>
                )}
            </div>
        </button>
    );
}

// UserCard.propTypes = {
//     user: propTypes.object.isRequired,
// };
