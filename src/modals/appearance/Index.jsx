/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
import classNames from "classnames";
import Button from "../../components/button/Index";
import Icon from "../../components/Icon";
import { useAppearance } from "./../../store/appearance/hooks";
import { setColor, setBackgroundColor } from "./../../store/appearance/actions";

export default function Appearance({close}) {
    const appearance = useAppearance();

    return (
        <div className="w-[600px]">
            <h3 className="mt-8 mb-3 text-[23px] leading-7 font-extrabold text-center">
                Görünümü Özelleştir
            </h3>
            <div className="p-8 pt-0">
                <p className="text-center text-[#71767b] leading-5 text-[15px] mb-5">
                    Bu ayarlar, bu tarayıcıdaki tüm X hesaplarını etkiler.
                </p>
                <div className="mx-4 mb-4">
                    <div className="border border-[#2f3336] px-4 flex py-3 gap-3 rounded-2xl">
                        <img
                            src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_x96.jpg"
                            alt=""
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1 flex flex-col">
                            <header className="leading-5 text-[15px] flex">
                                <div className="font-bold flex items-center gap-1">
                                    X
                                    <Icon name="verifiedCheck" />
                                </div>
                                <div className="ml-1 flex items-center text-[color:var(--color-base-secondary)]">
                                    @X
                                </div>
                            </header>
                            <div className="text-[color:var(--color-base)] leading-5">
                                X'in merkezinde, tıpkı bunun gibi gönderi denen kısa mesajlar yatar.
                                Gönderiler; fotoğraflar, videolar, bağlantılar, metinler, etiketler
                                ve{" "}
                                <a
                                    href="/x"
                                    className="text-[color:var(--color-primary)] hover:underline"
                                >
                                    @X
                                </a>{" "}
                                gibi bahsetmeler içerebilir.
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 text-[13px] font-bold">
                    Arka Plan
                </h6>
                <div className="py-1 px-3 mb-3 grid grid-cols-3 bg-[color:var(--background-secondary) rounded-2xl gap-1">
                    <button
                        onClick={() => {
                            setColor({
                                primary: "#1d9bf0",
                                secondary: "#8ecdf8",
                                base: "#0f1419",
                                baseSecondary: "#536471",
                            });
                            setBackgroundColor({
                             	name: "light",
        	                    primary: '#fff',
        	                    secondary: '#f7f9f9',
        	                    third: '#eff3f4',
        	                    modal: '#00000066'
                            });
                        }}
                        className={classNames({
                            "h-16 px-5 bg-white text-[#0f1419] border border-white/5 font-bold rounded]": true,
                            "!border-[color:var(--color-primary)]":
                                appearance.backgroundColor.name === "light",
                        })}
                    >
                        Varsayılan
                    </button>
                    <button
                        onClick={() => {
                            setColor({
                                primary: '#1d9bf0',
                                secondary: '#8ecdf8',
                                base: '#f7f9f9',
                                baseSecondary: '#8b98a5'
                            });
                            setBackgroundColor({
                                name: "dark",
                                primary: "#15202b",
                                secondary: "#1e2732",
                                third: "#263340",
                                modal: "#5b708366",
                            });
                        }}
                        className={classNames({
                            "h-16 px-5 bg-[#15202b] text-[#f7f9f9]  font-bold border border-white/5 rounded": true,
                            "!border-[color:var(--color-primary)]":
                                appearance.backgroundColor.name === "dark",
                        })}
                    >
                        Loş
                    </button>
                    <button
                        onClick={() => {
                            setColor({
                                primary: "#1d9bf0",
                                secondary: "#8ecdf8",
                                base: "#e7e9ea",
                                baseSecondary: "#71767b",
                            });
                            setBackgroundColor({
                                name: "darker",
                                primary: "#000000",
                                secondary: "#16181c",
                                third: "#212327",
                                modal: "#5b708366",
                            });
                        }}
                        className={classNames({
                            "h-16 px-5 bg-black text-[#f7f9f9]  font-bold border border-white/5 rounded": true,
                            "!border-[color:var(--color-primary)]":
                                appearance.backgroundColor.name === "darker",
                        })}
                    >
                        Işıklar Kapalı
                    </button>
                </div>
                <div className="flex items-center justify-center mt-2">
                    {" "}
                    <Button onClick={close}>Bitti</Button>
                </div>
            </div>
        </div>
    );
}
