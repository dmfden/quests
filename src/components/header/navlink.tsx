'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { INavLink } from '@/types';

function NavLink({ href, exact, children }: INavLink) {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    let linkClass = 'duration-1000';

    if (isActive) {
        linkClass += ' text-yellow-450';
    }

    return (
        <Link href={href} className={linkClass}>
            {children}
        </Link>
    );
}

export default NavLink;