import { memo } from "react"
import styles from './styles.module.css'
import { Divider } from "antd";

type Props = {
  name: string;
  textFirstNoColor?: string;
  optionsWrapper?: any
  optionsText?: any,
  icon?: string
}

const NameSection: React.FC<Props> = ({ name, textFirstNoColor = "", optionsWrapper, optionsText, icon }) => {
  return (
    <>
      <span {...optionsWrapper}>
        <div className={`flex items-center ${icon ? 'gap-2' : ''}`}>
          {icon && <span className={styles.icon} dangerouslySetInnerHTML={{ __html: icon ?? '' }} />}
          <span className={styles.text}>
            {textFirstNoColor + " "}
          </span>
          <h2 className={styles._text} {...optionsText}>
            {name}
          </h2>
        </div>
      </span>
      <Divider className="mt-2" />
    </>
  )
}

export default memo(NameSection)