import { NextSeo } from 'next-seo';
import ContactContainer from '@/modules/contact'
import React, { memo } from 'react';
import { IMAGE_BACKGROUND_WEB, NAME_PROJECT } from '@/constants';

type Props = {
  //
};

const Contact: React.FC<Props> = () => {
  return (
    <>
      <ContactContainer />
      <NextSeo
        title={`${NAME_PROJECT} | Liên hệ`}
        description={`Liên hệ`}
        openGraph={{
          title: `${NAME_PROJECT} | Liên hệ`,
          description: `Liên hệ`,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  );
};

export default memo(Contact);
