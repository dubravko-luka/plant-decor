import { IMAGE_BACKGROUND_WEB, NAME_PROJECT } from "@/constants";
import Home from "@/modules/home";
import { NextSeo } from "next-seo";
import React, { memo } from "react";

const IndexPage: React.FC = () => {

  return (
    <>
      <Home />
      <NextSeo
        title={`${NAME_PROJECT} | Trang chủ`}
        description={`Trang chủ`}
        openGraph={{
          title: `${NAME_PROJECT} | Trang chủ`,
          description: `Trang chủ`,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  )
}

export default memo(IndexPage)