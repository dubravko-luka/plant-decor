import React, { memo } from "react";
import { ReactSVG } from 'react-svg'

type Props = {
  name: string;
  class?: string;
  path?: string;
  extension?: string;
}

const Svg: React.FC<Props> = (props) => {
  return (
    <ReactSVG src={`/images/${props.path ? props.path : 'svg'}/${props.name}.${props?.extension ? props.extension : 'svg'}`} />
  )
}

export default memo(Svg)