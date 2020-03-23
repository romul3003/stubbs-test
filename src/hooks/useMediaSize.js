import { useEffect, useState } from 'react'

export const useMediaSize = () => {
	const [isMobile, setIsMobile] = useState(true)

	const finIsMediaeSizeMobile = e => {
		e.matches ? setIsMobile(false) : setIsMobile(true)
	}

	useEffect(() => {
		const mql = window.matchMedia('(min-width: 1200px)')
		finIsMediaeSizeMobile(mql)
		mql.addListener(finIsMediaeSizeMobile)
	}, [isMobile])

	return isMobile
}
