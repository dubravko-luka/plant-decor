import React, { memo } from "react"
import Svg from "../Svg"

type Props = {
  title?: string
}

const ToastError: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Svg name="error-square" path="icons" />
        <div>
          {title && <p className="text-white text-xs font-medium">{title}</p>}
          <p className="text-white opacity-50 text-ssm font-base">Xảy ra lỗi!</p>
        </div>
      </div>
    </>
  )
}

export default memo(ToastError)