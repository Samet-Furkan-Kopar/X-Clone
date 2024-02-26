import Button from "../../../../components/button/Index";
export default function Premium() {
    return (
        <div className=" bg-[#202327] w-full border border-[#16181c]  rounded-2xl flex flex-col py-3 px-4 gap-2.5 mb-4">
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
