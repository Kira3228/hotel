import { useState, useEffect, useCallback } from 'react'
import './DoubleSlider.scss'

interface RangeSliderProps {
	min?: number
	max?: number
	step?: number
	gap?: number
}

const RangeSlider = ({
	min = 0,
	max = 100,
	step = 1,
	gap = 0,
}: RangeSliderProps) => {
	const [minValue, setMinValue] = useState(min)
	const [maxValue, setMaxValue] = useState(max)

	const handleMinChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = Math.min(Number(e.target.value), maxValue - gap)
			setMinValue(value)
		},
		[maxValue, gap]
	)

	const handleMaxChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = Math.max(Number(e.target.value), minValue + gap)
			setMaxValue(value)
		},
		[minValue, gap]
	)

	// Рассчитываем позиции для прогресс-бара
	const getProgressStyles = useCallback(() => {
		const minPercent = ((minValue - min) / (max - min)) * 100
		const maxPercent = ((maxValue - min) / (max - min)) * 100
		return {
			left: `${minPercent}%`,
			right: `${100 - maxPercent}%`,
		}
	}, [minValue, maxValue, min, max])

	return (
		<div className='slider-container'>
			<div className='slider'>
				<div className='progress' style={getProgressStyles()} />
			</div>

			<div className='range-input'>
				<input
					type='range'
					min={min}
					max={max}
					step={step}
					value={minValue}
					onChange={handleMinChange}
					className='thumb thumb--left'
				/>
				<input
					type='range'
					min={min}
					max={max}
					step={step}
					value={maxValue}
					onChange={handleMaxChange}
					className='thumb thumb--right'
				/>
			</div>

			<div className='values'>
				<span className='min-value'>{minValue}</span>
				<span className='max-value'>{maxValue}</span>
			</div>
		</div>
	)
}

export default RangeSlider
