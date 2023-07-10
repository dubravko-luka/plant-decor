import type { PageConfig } from 'next';
import styles from './styles.module.css'
import Link from 'next/link';

export const config: PageConfig = { amp: false };

const Page404: React.FC = () => {

	return (
		<>
			<div className={`${styles.wrapper} pt-[100px]`}>
				<div className={styles.container}>
					<p className={styles.title}>400</p>
					<p className={styles.text}>Oops! Trang bạn tìm kiếm đang trong quá trình phát triển. Hãy quay lại sau.</p>
					<p className={styles.text}>
						Bạn có thể truy cập <Link className={styles.link} href={'/'}>trang chủ</Link> hoặc quay lại trang trước đó.
					</p>
				</div>
			</div>
		</>
	);
};

export default Page404;
