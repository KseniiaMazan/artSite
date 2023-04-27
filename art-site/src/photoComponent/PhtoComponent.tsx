import React from 'react';
import s from './PhotoComponent.module.css'

export const PhotoComponent = ({ imageSrc }: { imageSrc: string }) => {
	return (
		// <div>
			<img className={s.Image} src={imageSrc}></img>
		// </div>
	)
}
