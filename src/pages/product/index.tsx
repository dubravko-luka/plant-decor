import Title from "@/components/Head/title";
import React, { memo } from "react";
import ProductContainer from '@/modules/product'

const Product: React.FC = () => {
  return (
    <>
      <Title title="LongTran | Sản phẩm" />
      <ProductContainer />
    </>
  )
}

export default memo(Product)