import { List, ListItemButton, ListItemDecorator } from "@mui/joy"
import styles from './PersonalAccount.module.scss'
import { Navigate, NavLink, Outlet } from "react-router-dom"

type Props = {
    children: React.ReactNode
}
export const PersonalAccountLayout: React.FC<Props> = ({ children }) => {
    return (<>
        <div className={styles.main}>
            <div className={styles.nav}>
                <List component='nav'>
                    <NavLink to='/account/profile'>
                        <ListItemButton>
                            <ListItemDecorator>
                                <img className={styles.icon} src="account.svg" alt="account" />
                            </ListItemDecorator>
                            Профиль
                        </ListItemButton>
                    </NavLink>
                    <NavLink to='/account/history'>
                        <ListItemButton>
                            <ListItemDecorator>
                                <img className={styles.icon} src="booking.svg" alt="account" />
                            </ListItemDecorator>
                            История бронирований
                        </ListItemButton>
                    </NavLink>
                    <NavLink to='/account/favorite'>
                        <ListItemButton>
                            <ListItemDecorator>
                                <img className={styles.icon} src="like.svg" alt="account" />
                            </ListItemDecorator>
                            Любимые
                        </ListItemButton>
                    </NavLink>
                </List>
            </div>
            <div className={styles.outlet}>
                <Outlet />
            </div>

        </div>

    </>)
}