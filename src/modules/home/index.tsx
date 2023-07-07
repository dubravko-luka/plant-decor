import Achievement from "@/components/Home/Achievement";
import Banner from "@/components/Home/Banner";
import IntroBasic from "@/components/Home/IntroBasic";
import OutstandingService from "@/components/Home/OutstandingService";
import React, { memo } from "react";

const HomeContainer: React.FC = () => {
  return (
    <>
      <Banner />
      <IntroBasic />
      <Achievement />
      <OutstandingService />
    </>
  )
}

export default memo(HomeContainer)