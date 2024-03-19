import { INavigation } from "@/types";
import NavLink from "./navlink";

function Navigation({ navlinks }: INavigation): JSX.Element {
    return (
        <nav className="flex gap-3 md:gap-12 flex-wrap text-neutral-450 text-sm font-semibold">
            {navlinks.map(
                (link, index) =>
                    <NavLink href={link.url} exact key={index}>{link.text}</NavLink>)
            }
        </nav>
    );
}

export default Navigation;