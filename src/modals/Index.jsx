import modals from "../routes/modals";
import { useModal } from "../store/modal/hooks";
import { removeModel } from "../store/modal/actions";

export default function Modals() {
    const modal = useModal();
    const currentModal = modals.find((m) => m.name === modal);
   
    return (
        <>
            {currentModal && (
                <div className="fixed inset-0 bg-[color:var(--background-modal)] flex items-center justify-center z-20">
                    <div className="bg-[color:var(--background-primary)] max-w-[600px] max-h-[90vh] rounded-2xl overflow-auto">
                        <currentModal.element close={removeModel} />
                    </div>
                </div>
            )}
        </>
    );
}
