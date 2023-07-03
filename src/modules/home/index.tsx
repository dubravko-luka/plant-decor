import Banner from "@/components/Home/Banner";
import React, { memo } from "react";

const HomeContainer: React.FC = () => {
  return (
    <>
      <Banner />
    </>
  )
}

export default memo(HomeContainer)