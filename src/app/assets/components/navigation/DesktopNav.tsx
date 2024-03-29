import {Nav} from "@/app/assets/types/navigation/nav";
import styles from "@/app/assets/styles/modules/desktopNav.module.scss";
import Link from "next/link";
import {FunctionComponent} from "react";
import Logo from "@/app/assets/components/Logo";

interface Props {
    navItems: Nav[],
    path: string
}

const DesktopNav: FunctionComponent<Props> = ({navItems, path}) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__logo}>
                <Link href={"/"}>
                    <Logo logoClass={styles.logo__image}/>
                </Link>
            </div>
            <div className={styles.nav__inner}>
                <ul className={styles.nav__inner__list}>
                    {navItems.map((item) => {
                        const isCurrent = path === item.href;
                        return (
                            <li className={styles.nav__inner__list__item} key={item.id}>
                                <Link
                                    className={isCurrent ? `${styles.nav__inner__list__item__link} ${styles.nav__inner__list__current}` : styles.nav__inner__list__item__link}
                                    href={item.href}>{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default DesktopNav;