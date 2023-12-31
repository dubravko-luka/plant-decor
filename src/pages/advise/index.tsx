import React, { memo } from 'react';
import AdviseContainer from "@/modules/advise"
import { DESCRIPTION_PROJECT_DEFAULT, IMAGE_BACKGROUND_WEB, NAME_PROJECT } from '@/constants';
import { NextSeo } from 'next-seo';

type Props = {
  //
};

const Advise: React.FC<Props> = () => {
  return (
    <>
      <AdviseContainer />
      <NextSeo
        title={`${NAME_PROJECT} | Tư vấn`}
        description={DESCRIPTION_PROJECT_DEFAULT}
        openGraph={{
          title: `${NAME_PROJECT} | Tư vấn`,
          description: DESCRIPTION_PROJECT_DEFAULT,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  );
};

export default memo(Advise);
