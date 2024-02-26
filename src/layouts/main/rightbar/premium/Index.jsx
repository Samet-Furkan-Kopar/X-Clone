import Button from "../../../../components/button/Index";
export default function Premium() {
    return (
        <div className=" bg-[color:var(--background-secondary)] w-full border border-[color:var(--background-secondary)] rounded-2xl flex flex-col py-3 px-4 gap-2.5 mb-4">
            <span className="text-xl leading-6 font-extrabold">Premium'a Abone Ol</span>
            <h6 className="leading-5 font-bold">
                Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı
                kazan.
            </h6>
            <div className="self-start">
                <Button size="normal">Abone Ol</Button>
            </div>
        </div>
    );
}
