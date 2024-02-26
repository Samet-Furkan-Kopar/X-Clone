import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Icon from "../../../../components/Icon";
export default function Search() {
    const [query, setQuery] = useState("");
    const [focus, setFocus] = useState(false);

    const ref = useRef();
    useClickAway(ref, () => {
        setFocus(false);
    });

    return (
        <div
            ref={ref}
            className="min-h-[2rem] h-[3.313rem] mb-3 flex items-center sticky top-0 bg-[color:var(--background-primary)] z-10"
        >
            <label className="h-[2.688rem] rounded-full bg-[color:var(--background-third)] w-full relative group border border-transparent focus-within:bg-[color:var(--background-primary)] focus-within:border-[color:var(--color-primary)]">
                <div className="w-[3.5rem] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
                    <Icon name="searchRightbar"  />
                </div>
                <input
                    type="text"
                    placeholder="Ara"
                    className="w-full h-full bg-transparent rounded-full outline-none pl-[3.5rem]"
                    value={query}
                    onFocus={() => setFocus(true)}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query && focus && (
                    <button
                        type="button"
                        onClick={() => setQuery("")}
                        className="w-[22px] h-[22px] rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-black min-w-[22px] absolute top-1/2 -translate-y-1/2 right-3"
                    >
                        <Icon name="delete" size={10} />
                    </button>
                )}
            </label>
            {focus && (
                <div className="absolute w-[350px] top-full -left-px -translate-y-1 bg-[color:var(--background-primary)] shadow-box max-h-[calc(80vh-53px)] rounded-lg text-center min-h-[100px]">
                    <p className="p-3 pt-5 text-[color:var(--color-base-secondary)] leading-5">
                        Kişileri, listeleri veya anahtar kelimeleri aramayı dene
                    </p>
                </div>
            )}
        </div>
    );
}
