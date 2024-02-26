import Icon from "../../components/Icon";

export default function Appearance() {
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
                                <div className="ml-1 flex items-center text-[color:var(--color-base-secondary)]">@X</div>
                            </header>
                            <div className="text-[color:var(--color-base)] leading-5">
                                X'in merkezinde, tıpkı bunun gibi gönderi denen kısa mesajlar yatar.
                                Gönderiler; fotoğraflar, videolar, bağlantılar, metinler, etiketler
                                ve <a href="/x" className="text-[color:var(--color-primary)] hover:underline">@X</a> gibi bahsetmeler içerebilir.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
