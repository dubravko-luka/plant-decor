import React, { memo } from 'react';
import LoginContainer from '@/modules/login'
import { NextSeo } from 'next-seo';
import { IMAGE_BACKGROUND_WEB, NAME_PROJECT } from '@/constants';

type Props = {
  //
};

const Login: React.FC<Props> = () => {

  return (
    <>
      <LoginContainer />
      <NextSeo
        title={`${NAME_PROJECT} | Login`}
        description={`Login`}
        openGraph={{
          title: `${NAME_PROJECT} | Login`,
          description: `Login`,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  );
};

export default memo(Login);
