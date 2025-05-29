import './FilterLayout.scss'

type FilterLayoutProps = {
	category: string
	children: React.ReactNode
}
export const FilterLayout: React.FC<FilterLayoutProps> = ({
	children,
	category,
}) => {
	return (
		<>
			<div className="fiter-layout">
				<span>{category}</span>
				{children}
			</div>
		</>
	)
}
