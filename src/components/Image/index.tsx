import { alt } from '@/constants';
import _ from 'lodash';
import React, { memo } from 'react';

type Props = {
  id: string,
  list: any,
  onChangeSrc?: (e: any) => void,
  options?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
};

const Image: React.FC<Props> = ({ id, options, list, onChangeSrc }) => {

  return (
    <>
      <img {...options} src={id} alt={alt} />
    </>
  );
};

export default memo(Image);
