import { List, ListItemButton, ListItemDecorator } from "@mui/joy"
import styles from './PersonalAccount.module.scss'

type Props = {
    children: React.ReactNode
}
export const PersonalAccountLayout: React.FC<Props> = ({children}) => {
    return (<>
        <div>
            <List component='nav'>
                <ListItemButton>
                    <ListItemDecorator>
                        <img className={styles.icon} src="account.svg" alt="account" />
                    </ListItemDecorator>
                    Профиль
                </ListItemButton>
                <ListItemButton>
                    <ListItemDecorator>
                        <img className={styles.icon} src="booking.svg" alt="account" />
                    </ListItemDecorator>
                    История бронирований
                </ListItemButton>
                <ListItemButton>
                    <ListItemDecorator>
                        <img className={styles.icon} src="like.svg" alt="account" />
                    </ListItemDecorator>
                    Любимые
                </ListItemButton>
            </List>
        </div>

    </>)
}