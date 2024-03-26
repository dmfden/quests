interface IModalWindow {
    children: React.ReactNode,
}

function ModalWindow({ children }: IModalWindow): JSX.Element {
    return (
        <dialog open className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            {children}
        </dialog>
    );
}

export default ModalWindow;