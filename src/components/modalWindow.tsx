interface IModalWindow {
    children: React.ReactNode,
}

function ModalWindow({ children }: IModalWindow): JSX.Element {
    return (
        <dialog open className="fixed inset-0 z-50 bg-darkOverlay-100 bg-opacity-[0.7] overflow-y-auto h-screen w-screen flex items-center justify-center">
            {children}
        </dialog>
    );
}

export default ModalWindow;