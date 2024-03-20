import Navigation from "./navigation";
import { NAVLINKS } from "@/constants";
import Image from "next/image";

function Header(): JSX.Element {

    return (
        <header className="app-header px-4 md:px-8 flex flex-col md:flex-row gap-3 py-1 md:py-4 md:items-center md:justify-between">
            <div className="w-6 h-6 md:w-[42px] md:h-[42px] relative">
                <Image src="/icons/logo.svg" alt="Company Logo" fill />
            </div>
            <Navigation navlinks={NAVLINKS} />
            <p>+38 (050) 555-99-55</p>
        </header>
    );
}

export default Header;