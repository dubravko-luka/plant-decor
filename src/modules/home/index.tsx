import Banner from "@/components/Home/Banner";
import OutstandingService from "@/components/Home/OutstandingService";
import React, { memo } from "react";

const HomeContainer: React.FC = () => {
  return (
    <>
      <Banner />
      <OutstandingService />
    </>
  )
}

export default memo(HomeContainer)