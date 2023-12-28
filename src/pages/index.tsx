import { IMAGE_BACKGROUND_WEB, NAME_PROJECT } from "@/constants";
import { AppRoutes } from "@/constants/routes";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { memo, useEffect } from "react";

const IndexPage: React.FC = () => {

  const router = useRouter();

  useEffect(() => {
    router.push(AppRoutes.motelRoom)
  }, [])

  return (
    <>
      <NextSeo
        title={`${NAME_PROJECT} | Home`}
        description={`Home`}
        openGraph={{
          title: `${NAME_PROJECT} | Home`,
          description: `Home`,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  )
}

export default memo(IndexPage)