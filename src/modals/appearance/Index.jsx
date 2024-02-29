/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
import classNames from "classnames";
import Button from "../../components/button/Index";
import Icon from "../../components/Icon";
import { useAppearance } from "./../../store/appearance/hooks";
import { setColor, setBackgroundColor, setFontSize } from "./../../store/appearance/actions";
import { colors, fontSizes } from "../../utils/consts";
import { useEffect, useState } from "react";
export default function Appearance({ close }) {
    const appearance = useAppearance();
    // console.log(appearance);
    const [fontSizePercent, setFontSizePercent] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setFontSizePercent(document.querySelector('.active-font-size').offsetLeft + 3)
        }, 2);
    }, [appearance.fontSize]);

    return (
        <div className="w-[600px]">
            <h3 className="mt-8 mb-3 text-[1.438rem] leading-7 font-extrabold text-center">
                Görünümü Özelleştir
            </h3>
            <div className="p-8 pt-0">
                <p className="text-center text-[#71767b] text-[0.938rem] leading-5 mb-5">
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
                            <header className="leading-5 text-[0.938rem] flex">
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
                                ve
                                <a
                                    href="/x"
                                    className="text-[color:var(--color-primary)] hover:underline"
                                >
                                    {" "}
                                    @X{" "}
                                </a>
                                gibi bahsetmeler içerebilir.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-3">
                    <section>
                        <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 font-bold">
                            Yazı Tipi Boyutu
                        </h6>
                        <div className="p-4 bg-[color:var(--background-secondary)] rounded-2xl flex items-center">
                            <div className="text-[0.813rem]">Aa</div>
                            <div className="h-1 bg-[color:var(--color-secondary)] rounded-full flex-1 flex justify-between relative mx-2">
                                <div style={{width:fontSizePercent}} className="absolute top-0 left-0 h-full rounded-full bg-[color:var(--color-primary)]"/>
                                <div className="flex justify-between absolute w-[calc(100%+16px)] -top-3.5 -left-[8px]">
                                    {fontSizes.map((fs, index) => (
                                        <button
                                            type="button"
                                            onClick={() => setFontSize(fs)}
                                            key={index}
                                            className={classNames(
                                                "before:absolute before:inset-0 before:rounded-full before:hover:bg-[color:var(--color-primary)] before:opacity-10 w-8 h-8 flex items-center justify-center relative  rounded-full",
                                                {
                                                    "active-font-size": fs === appearance.fontSize,
                                                }
                                            )}
                                        >
                                            <div
                                                className={classNames(
                                                    "w-3 h-3 rounded-full bg-[color:var(--color-secondary)]",
                                                    {
                                                        "w-4 h-4": fs === appearance.fontSize,
                                                        "!bg-[color:var(--color-primary)]":
                                                            fs <= appearance.fontSize,
                                                    }
                                                )}
                                            ></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="text-[1.25rem]">Aa</div>
                        </div>
                    </section>
                    <section>
                        <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 text-[13px] font-bold">
                            Renk
                        </h6>
                        <div className="py-2 mb-3 bg-[color:var(--background-secondary)] rounded-2xl flex items-center justify-around">
                            {colors.map((c, index) => (
                                <button
                                    key={index}
                                    style={{ "--bg": c.primary }}
                                    onClick={() => {
                                        setColor({
                                            ...appearance.color,
                                            primary: c.primary,
                                            secondary: c.secondary,
                                        });
                                    }}
                                    className="w-[40px] h-[40px] rounded-full bg-[color:var(--bg)] flex items-center justify-center text-white"
                                >
                                    {appearance.color.primary === c.primary && (
                                        <Icon name="colorIcon" width={25} />
                                    )}
                                </button>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 text-[13px] font-bold">
                            Arka Plan
                        </h6>
                        <div className="py-2 px-4 mb-3 grid grid-cols-3 bg-[color:var(--background-secondary)] rounded-2xl gap-2">
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
                                        primary: "#fff",
                                        primaryAlpha: "#f7f9f9",
                                        secondary: "#ffffffa6",
                                        third: "#eff3f4",
                                        modal: "#00000066",
                                    });
                                }}
                                className={classNames({
                                    "h-16 pr-3 pl-2 bg-white text-[#0f1419] flex items-center group gap-1.5 justify-center font-bold border border-white/5 rounded": true,
                                    "!border-[color:var(--color-primary)] !border-2":
                                        appearance.backgroundColor.name === "light",
                                })}
                            >
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full group-hover:bg-black/5">
                                    <div
                                        className={classNames(
                                            "w-5 h-5 rounded-full border-2 border-[#3e4144] flex items-center justify-center",
                                            {
                                                " !border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white":
                                                    appearance.backgroundColor.name === "light",
                                            }
                                        )}
                                    >
                                        {appearance.backgroundColor.name === "light" && (
                                            <Icon name="light" />
                                        )}
                                    </div>
                                </div>
                                Varsayılan
                            </button>
                            <button
                                onClick={() => {
                                    setColor({
                                        primary: "#1d9bf0",
                                        secondary: "#8ecdf8",
                                        base: "#f7f9f9",
                                        baseSecondary: "#8b98a5",
                                    });
                                    setBackgroundColor({
                                        name: "dark",
                                        primary: "#15202b",
                                        primaryAlpha: "#15202ba6",
                                        secondary: "#1e2732",
                                        third: "#263340",
                                        modal: "#5b708366",
                                    });
                                }}
                                className={classNames({
                                    "h-16 pr-3 pl-2 bg-[#15202b] text-[#f7f9f9] flex items-center group gap-1.5 justify-center font-bold border border-white/5 rounded": true,
                                    "!border-[color:var(--color-primary)] !border-2":
                                        appearance.backgroundColor.name === "dark",
                                })}
                            >
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full group-hover:bg-white/5">
                                    <div
                                        className={classNames(
                                            "w-5 h-5 rounded-full border-2 border-[#5c6e7e] flex items-center justify-center",
                                            {
                                                " !border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white":
                                                    appearance.backgroundColor.name === "dark",
                                            }
                                        )}
                                    >
                                        {appearance.backgroundColor.name === "dark" && (
                                            <Icon name="dark" />
                                        )}
                                    </div>
                                </div>
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
                                        primaryAlpha: "#000000a6",
                                        secondary: "#16181c",
                                        third: "#212327",
                                        modal: "#5b708366",
                                    });
                                }}
                                className={classNames({
                                    "h-16 pr-3 pl-2 bg-black text-[#f7f9f9] flex items-center group gap-1.5 justify-center font-bold border border-white/5 rounded": true,
                                    "!border-[color:var(--color-primary)] !border-2":
                                        appearance.backgroundColor.name === "darker",
                                })}
                            >
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full group-hover:bg-white/5">
                                    <div
                                        className={classNames(
                                            "w-5 h-5 rounded-full border-2 border-[#3e4144] flex items-center justify-center",
                                            {
                                                " !border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white":
                                                    appearance.backgroundColor.name === "darker",
                                            }
                                        )}
                                    >
                                        {appearance.backgroundColor.name === "darker" && (
                                            <Icon name="dark" />
                                        )}
                                    </div>
                                </div>
                                <div className="truncate">
                                    Işıklar Kapalı
                                </div>
                            </button>
                        </div>
                    </section>
                </div>

                <div className="flex items-center justify-center pt-40px">
                    <Button onClick={close}>Bitti</Button>
                </div>
            </div>
        </div>
    );
}
