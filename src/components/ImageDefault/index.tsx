import { alt } from '@/constants';
import React, { memo, useEffect, useState } from 'react';

type Props = {
  id: any,
  options?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
};

const Image: React.FC<Props> = ({ id, options }) => {

  return (
    <>
      <img {...options} src={id} alt={alt} />
    </>
  );
};

export default memo(Image);
