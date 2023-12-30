import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Svg from '../Svg';

const BackTop: React.FC = () => {
	const [showButton, setShowButton] = useState(false);

	const handleScroll = () => {
		if (window.pageYOffset > 1000) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<>
			<div className={`${styles.backToTop} ${showButton ? styles.show : ''}`} onClick={handleClick}>
				<Svg path='icons' name='chev-up-circle' />
			</div>
		</>
	);
};

export default memo(BackTop);
