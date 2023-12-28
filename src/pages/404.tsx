import NotFound from '@/components/404'
import { NextSeo } from 'next-seo';
import { IMAGE_BACKGROUND_WEB, NAME_PROJECT } from '@/constants';

const Page404: React.FC = () => {

	return (
		<>
			<NotFound />
			<NextSeo
				title={`${NAME_PROJECT} | Not Found`}
				description={`Not Found`}
				openGraph={{
					title: `${NAME_PROJECT} | Not Found`,
					description: `Not Found`,
					images: [
						{ url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
					]
				}}
			/>
		</>
	);
};

export default Page404;
