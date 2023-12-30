import { NextSeo } from 'next-seo';
import ContactContainer from '@/modules/contact'
import React, { memo } from 'react';
import { DESCRIPTION_PROJECT_DEFAULT, IMAGE_BACKGROUND_WEB, NAME_PROJECT } from '@/constants';

type Props = {
  //
};

const Contact: React.FC<Props> = () => {
  return (
    <>
      <ContactContainer />
      <NextSeo
        title={`${NAME_PROJECT} | Liên hệ`}
        description={DESCRIPTION_PROJECT_DEFAULT}
        openGraph={{
          title: `${NAME_PROJECT} | Liên hệ`,
          description: DESCRIPTION_PROJECT_DEFAULT,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  );
};

export default memo(Contact);
