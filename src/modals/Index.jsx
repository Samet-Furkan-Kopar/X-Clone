import modals from "../routes/modals";
import { useModal } from "../store/modal/hooks";

export default function Modals() {
    const modal = useModal();
    const currentModal = modals.find((m) => m.name === modal);
   

    return (
        <>
            {currentModal && (
                <div className="fixed inset-0 bg-[#5b7083]/40 flex items-center justify-center z-10">
                    <div className="bg-black max-w-[600px] max-h-[90vh] rounded-2xl overflow-auto">
                        <currentModal.element />
                    </div>
                </div>
            )}
        </>
    );
}
