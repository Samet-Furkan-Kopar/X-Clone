import Icon from "../../../../components/Icon";
import { useAccount } from "../../../../store/user/hooks.js";
import { Popover } from "@headlessui/react";
import More from "./more/Index";
export default function Account() {
    const account = useAccount();
    // console.log(account);

    return (
        <div className="mt-auto">
            <Popover className="relative">
                <Popover.Button className="my-3 p-3 rounded-full transition-colors hover:bg-[#eff3f41a] w-full flex text-left items-center outline-none">
                    <img className="w-10 h-10 rounded-full" src={account?.avatar} />
                    <div className="mx-3 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account?.fullName}</h6>
                        <div className="text-[#71767b]"> @{account?.username} </div>
                    </div>
                    <div className="ml-auto">
                        <Icon name="threedot" size={18.5} />
                    </div>
                </Popover.Button>

                <Popover.Panel className="absolute bottom-full overflow-hidden py-3 w-[300px] left-1/2 -translate-x-1/2 shadow-box bg-black rounded-2xl">
                    {({ close }) => <More onClose={close} />}
                </Popover.Panel>
            </Popover>
        </div>
    );
}
