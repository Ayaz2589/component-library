import React from 'react'
import { CardContainer } from '..'

const BlockLinkCard = ({
	url,
	text,
	children,
}: {
	url?: string
	text?: string
	children: React.ReactNode
}) => {
	const linkClasses: string = "flex flex-col items-center p-6 sm:p-10"
	const linkContent = (
		<>
			{children}
			{text && <p className="mt-2 font-medium">{text}</p>}
		</>
	)
	return (
		<CardContainer className="text-gray-800 transition-colors hover:bg-gray-200/50">
			<a className={linkClasses} href={url || "#"} target="_blank">
				{linkContent}
			</a>
		</CardContainer>
	)
}

export default BlockLinkCard