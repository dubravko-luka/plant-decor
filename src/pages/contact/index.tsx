import Title from "@/components/Head/title";
import React, { memo } from "react";
import ContactContainer from '@/modules/contact'

const Contact: React.FC = () => {
  return (
    <>
      <Title title="LongTran | Liên hệ" />
      <ContactContainer />
    </>
  )
}

export default memo(Contact)