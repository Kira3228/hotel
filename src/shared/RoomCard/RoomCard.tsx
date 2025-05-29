import { useState } from 'react'
import { ImageType } from '../../types/dto/RoomResponse.dto'

import styles from './RoomCard.module.scss'
import { Button } from '../../components/Button/Button'
type RoomCardProps = {
	name: string
	description: string
	image: ImageType[]
	price: string
	onClick: () => void
}

export const RoomCard: React.FC<RoomCardProps> = ({
	name,
	description,
	price,
	image,
	onClick,
}) => {
	const [isLiked, setIsLiked] = useState(false)
	const url = image?.[0]?.url || '/placeholder.png'
	const handleLike = () => {
		isLiked ? setIsLiked(false) : setIsLiked(true)
		console.log(isLiked)
	}
	const likeButtonClassname = `favorite ${isLiked ? 'liked' : ''}`
	return (
		<>
			<div className={styles.card} onClick={onClick}>
				<img className={styles.card__image} src={url} alt='' />
				<div className={styles.card__info}>
					<div className={styles.card__info_text}>
						<span className={styles.card__info_name}>{name}</span>
						<p className={styles.card__info_description}>{description}</p>
						{/* <span className="rating">{rating}</span> */}
						<span className={styles.card__info_price}>{price}р.</span>
					</div>

					<div className={styles.card__buttons}>
						<div className={likeButtonClassname} onClick={handleLike}>
							<svg
								className='heart'
								width='20'
								height='19'
								viewBox='-1 -1 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									className='heart'
									d='M13.7158 0.156006C16.4179 0.156119 18.6399 2.40791 18.668 5.17847L18.6621 5.63062C18.5867 7.73082 17.8346 9.69515 16.3711 11.6101L16.0469 12.0203C15.2597 12.9794 13.8711 14.4786 10.7998 16.6316L10.1631 17.071H10.1621C9.92881 17.2301 9.65343 17.3159 9.37109 17.3162L9.26562 17.3123C9.05546 17.2962 8.8515 17.233 8.66895 17.1277L8.5791 17.071L7.94141 16.6316C5.27938 14.7655 3.88174 13.3903 3.04395 12.4324L2.69434 12.0193C1.0164 9.97421 0.159673 7.87955 0.0791016 5.62964L0.0732422 5.17847C0.101341 2.40829 2.32419 0.156006 5.02637 0.156006C6.86863 0.15614 8.18083 1.12846 8.99219 2.01147L9.14746 2.18628C9.17522 2.21824 9.20954 2.2439 9.24805 2.26147C9.28658 2.27905 9.32874 2.28784 9.37109 2.28784C9.41325 2.2878 9.45479 2.27893 9.49316 2.26147C9.51246 2.25268 9.53097 2.24187 9.54785 2.22925L9.59375 2.18628H9.59473C10.3892 1.2614 11.751 0.156006 13.7158 0.156006Z'
									stroke='#1e91b6'
									strokeWidth='2'
								/>
							</svg>
						</div>

						<Button color='blue' type='button'>
							Посмотреть
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}
