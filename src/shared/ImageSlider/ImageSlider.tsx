import { ImageType } from '../../types/dto/RoomResponse.dto'
import { images } from './image.mock'
import style from './ImageSlider.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Galleria } from 'primereact/galleria'
import { useEffect, useState } from 'react'

type ImageSliderProps = {
	className?: string
	children?: React.ReactNode
	image: ImageType[]
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
	className,
	image,
}) => {
	const [images, setImages] = useState<ImageType[]>([])
	useEffect(() => {
		setImages(image)
		console.log(image)
	}, [image])
	const itemTemplate = (item: ImageType) => {
		console.log(item.id)
		return (
			<img
				src={item.url.length === 0 ? item.url : '/default.jpg'}
				alt={item.fileName}
				style={{ width: '100%', display: 'block' }}
			/>
		)
	}
	return (
		<div>
			<Galleria
				value={images}
				numVisible={5}
				circular
				style={{ maxWidth: '640px' }}
				showThumbnails={false}
				showItemNavigators
				item={itemTemplate}
				thumbnail={itemTemplate}
			/>
		</div>
	)
}
