import { DESCRIPTION_PROJECT_DEFAULT, IMAGE_BACKGROUND_WEB, NAME_PROJECT } from "@/constants";
import HomeContainer from "@/modules/home";
import { NextSeo } from "next-seo";
import React, { memo } from "react";

const Home: React.FC = () => {

  return (
    <>
      <HomeContainer />
      <NextSeo
        title={`${NAME_PROJECT} | Trang chủ`}
        description={DESCRIPTION_PROJECT_DEFAULT}
        openGraph={{
          title: `${NAME_PROJECT} | Trang chủ`,
          description: DESCRIPTION_PROJECT_DEFAULT,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  )
}

export default memo(Home)