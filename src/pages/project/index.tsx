import React, { memo } from 'react';
import ProjectContainer from '@/modules/project'
import { NextSeo } from 'next-seo';
import { DESCRIPTION_PROJECT_DEFAULT, IMAGE_BACKGROUND_WEB, NAME_PROJECT } from '@/constants';

type Props = {
  //
};

const Project: React.FC<Props> = () => {
  return (
    <>
      <ProjectContainer />
      <NextSeo
        title={`${NAME_PROJECT} | Dự án`}
        description={DESCRIPTION_PROJECT_DEFAULT}
        openGraph={{
          title: `${NAME_PROJECT} | Dự án`,
          description: DESCRIPTION_PROJECT_DEFAULT,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  );
};

export default memo(Project);
