import React, { memo } from "react"
import Svg from "../Svg"

const CloseButton: React.FC = () => {
  return (
    <>
      <div className="absolute top-2/4 -translate-y-1/2 right-4">
        <Svg name="close-circle-small" path="icons" />
      </div>
    </>
  )
}

export default memo(CloseButton)