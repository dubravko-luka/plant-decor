import React, { memo } from "react"
import styles from './styles.module.css'

type Props = {
  title?: string
}

const ToastPending: React.FC<Props> = ({ title = "Pending!" }) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className={styles.p_wrapLoading}>
          <div className={styles.p_loading}></div>
        </div>
        <div>
          <p className="text-white text-xs font-medium">{title}</p>
        </div>
      </div>
    </>
  )
}

export default memo(ToastPending)