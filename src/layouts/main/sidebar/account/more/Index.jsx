/* eslint-disable react/prop-types */
import classNames from "classnames";
import { useAccounts, useAccount } from "../../../../../store/user/hooks.js";
import Icon from "../../../../../components/Icon";
import { setCurrentAccount } from "../../../../../store/user/actions.js";
export default function More({ onClose }) {
    const accounts = useAccounts();
    const currentAccount = useAccount();

    return (
        <div>
            {accounts?.map((account) => (
                <button
                    type="button"
                    disabled={currentAccount?.id === account?.id}
                    onClick={() => {
                        setCurrentAccount(account);
                        onClose();
                    }}
                    className={classNames({
                        "py-3 px-4 flex items-center text-left w-full transation-colors": true,
                        "hover:bg-[#eff3f41a] cursor-pointer": currentAccount?.id !== account?.id,
                    })}
                    key={account?.id}
                >
                    <img className="w-10 h-10 rounded-full" src={account?.avatar} />
                    <div className="mx-3 flex-1 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account?.fullName}</h6>
                        <div className="text-[color:var(--color-base-secondary)]"> @{account?.username} </div>
                    </div>
                    {currentAccount?.id === account?.id && (
                        <Icon name="check" className="mr-2 ml-3" size={18.75} />
                    )}
                </button>
            ))}
            <div className="h-px bg-[#2f3336] my-3" />
            <button className="py-3 px-4 hover:bg-[#eff3f41a] transation-colors w-full text-left">
                Var olan bir hesap ekle
            </button>
            <button className="py-3 px-4 hover:bg-[#eff3f41a] transation-colors w-full text-left">
                Hesapları Yönet
            </button>
            <button className="py-3 px-4 hover:bg-[#eff3f41a] transation-colors w-full text-left">
                @{currentAccount.username} hesabından çıkış yap
            </button>
        </div>
    );
}
