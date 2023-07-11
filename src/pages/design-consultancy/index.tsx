import React, { memo } from "react";
import DesignConsultancyContainer from '@/modules/design-consultancy'
import Title from "@/components/Head/title";

const DesignConsultancy: React.FC = () => {
  return (
    <>
      <Title title="LongTran | Tư Vấn & Thiết Kế" />
      <DesignConsultancyContainer />
    </>
  )
}

export default memo(DesignConsultancy)