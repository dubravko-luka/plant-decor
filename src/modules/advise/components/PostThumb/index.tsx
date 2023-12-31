import React, { memo } from "react";
import styles from './styles.module.css'
import ImageDefault from "@/components/ImageDefault";

type Props = {
  item?: any
}

const PostThumb: React.FC<Props> = ({ item }) => {

  return (
    <>
      <div className={`${styles.wrapper} w-full`}>
        <div className={`${styles.head}`}>
          <ImageDefault
            id={item?.thumbnail ?? ''}
          />
        </div>
        <div className={`${styles.body} mt-3`}>
          <p className={`${styles.title}`}>
            <span className={styles.mainText} dangerouslySetInnerHTML={{ __html: item.name }} />
          </p>
          <div className={`${styles.line} my-3`}></div>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: item.shortDescription }}></div>
        </div>
      </div>
    </>
  )
}

export default memo(PostThumb)