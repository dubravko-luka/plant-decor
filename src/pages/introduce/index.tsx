import React, { memo } from 'react';
import IntroduceContainer from '@/modules/introduce'
import { DESCRIPTION_PROJECT_DEFAULT, IMAGE_BACKGROUND_WEB, NAME_PROJECT } from '@/constants';
import { NextSeo } from 'next-seo';

type Props = {
  //
};

const Introduce: React.FC<Props> = () => {
  return (
    <>
      <IntroduceContainer />
      <NextSeo
        title={`${NAME_PROJECT} | Giới thiệu`}
        description={DESCRIPTION_PROJECT_DEFAULT}
        openGraph={{
          title: `${NAME_PROJECT} | Giới thiệu`,
          description: DESCRIPTION_PROJECT_DEFAULT,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  );
};

export default memo(Introduce);
