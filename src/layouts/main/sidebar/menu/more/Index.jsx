import classNames from "classnames";
import Icon from "../../../../../components/Icon";
import { Popover, Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import { removeModel, setModel } from "../../../../../store/modal/actions";
import { removeall } from "../../../../../store/appearance/actions";

export default function More() {
    return (
        <Popover className="relative text-[color:var(--color-base)]">
            <Popover.Button className="py-[3px] w-full text-left group outline-none">
                <div className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)]">
                    <div className="w-[1.641rem] h-[1.641rem] relative">
                      <Icon name="more" size={24} />
                    </div>
                    <div className="pr-4 text-xl">Daha fazla</div>
                </div>
            </Popover.Button>
            <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-[color:var(--background-primary)] shadow-box rounded-xl overflow-hidden">
                <button className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[1.641rem] h-[1.641rem] relative">
                        <svg viewBox="0 0 24 24" className="h-[1.5rem]">
                            <path
                                fill="currentColor"
                                d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z"
                            />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">Bağlan</div>
                </button>
                <button className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)]">
                    <div className="w-[1.641rem] h-[1.641rem] relative">
                        <svg viewBox="0 0 24 24" className="h-[1.5rem]">
                            <path
                                fill="currentColor"
                                d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
                            />
                        </svg>
                    </div>
                    <div className="pr-4 text-xl font-bold">Para kazanma</div>
                </button>

                <div className="h-px bg-[color:var(--background-third)] my-0.5 w-[89%] mx-auto" />

                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex items-center justify-between w-full p-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                                İçerik Üreticisi Stüdyosu	
                                <svg
                                    className={classNames("h-[1.172rem]", {
                                        "rotate-180 text-[color:var(--background-primary)bf0]": open,
                                    })}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel>
                                <Link
                                    to="/"
                                    className="flex items-center px-3 h-11 gap-3 font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                                >
                                    <Icon name="statistics" />
                                    İstatistikler
                                </Link>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex items-center justify-between w-full p-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                                Profesyonel Araçlar
                                <svg
                                    viewBox="0 0 24 24"
                                    className={classNames("h-[1.172rem]", {
                                        "rotate-180 text-[color:var(--background-primary)#1d9bf0]": open,
                                    })}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel>
                                <Link
                                    to="/"
                                    className="flex items-center px-3 h-11 gap-3 font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                                >
                                    <Icon name="advert" />
                                    Reklamlar
                                </Link>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex items-center justify-between w-full p-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                                Ayarlar ve Destek
                                <svg
                                    viewBox="0 0 24 24"
                                    className={classNames("h-[1.172rem]", {
                                        "rotate-180 text-[color:var(--background-primary)]": open,
                                    })}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel>
                                <Link
                                    to="/"
                                    className="flex items-center px-3 h-11 gap-3 font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                                >
                                    <Icon name="settings" />
                                    Ayarlar ve gizlilik
                                </Link>
                                <Link
                                    to="/"
                                    className="flex items-center px-3 h-11 gap-3 font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                                >
                                    <Icon name="helpingCenter" />
                                    Yardım Merkezi
                                </Link>
                                <button
                                    onClick={() => setModel("appearance")}
                                    className="flex items-center px-3 h-11 w-full gap-3 font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                                >
                                    <Icon name="appearance" />
                                    Görünüm
                                </button>
                                <button
                                    onClick={() => removeall()}
                                    className="flex items-center px-3 h-11 w-full gap-3 font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                                >
                                    <svg viewBox="0 0 24 24" className="h-[1.172rem]">
                                        <path
                                            fill="currentColor"
                                            d="M20 12h2v6.5c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13C2 4.12 3.12 3 4.5 3H11v2H4.5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h15c.27 0 .5-.22.5-.5V12zm2.31-6.78l-6.33 7.18c-.2 2.02-1.91 3.6-3.98 3.6H8v-4c0-2.07 1.58-3.78 3.6-3.98l7.18-6.33c.99-.88 2.49-.83 3.43.1.93.94.98 2.44.1 3.43zm-1.52-2.01c-.19-.19-.49-.2-.69-.02l-6.08 5.36c.59.35 1.08.84 1.43 1.43l5.36-6.08c.18-.2.17-.5-.02-.69z"
                                        />
                                    </svg>
                                    Görünüm şimdilik temizle
                                </button>
                                <Link
                                    to="/"
                                    className="flex items-center px-3 h-11 gap-3 font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                                >
                                    <Icon name="keyboardShortcuts" />
                                    Klavye kısayolları
                                </Link>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </Popover.Panel>
        </Popover>
    );
}
