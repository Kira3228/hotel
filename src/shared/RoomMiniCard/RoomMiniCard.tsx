import { Image } from 'primereact/image'
import styles from './RoomMiniCard.module.scss'
type Props = {
	url: string
	alt: string
	name: string
	price: number
	rating: number
	onClick: () => void
}
export const RoomMiniCard: React.FC<Props> = ({
	url,
	alt,
	name,
	onClick,
	price,
}) => {
	return (
		<div onClick={onClick} className={styles.card}>
			<Image className={styles.image} src={url} alt={alt} height='60' preview />
			<div className={styles.data}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>{price} Р/Ночь</span>
			</div>
		</div>
	)
}
