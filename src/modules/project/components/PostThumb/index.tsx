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
            <span className={styles.mainText} dangerouslySetInnerHTML={{ __html: item?.name }} />
          </p>
          <div className={`${styles.line} my-3`}></div>
          <div className="grid grid-cols-12 items-center gap-2">
            <div className={`${styles.description} col-span-12`}>
              Phong cách:
              <span className="font-bold text-main"> {item?.style ?? '-'}</span>
            </div>
            <div className={`${styles.description} col-span-6`}>
              Vị trí:
              <span className="font-bold text-main"> {item?.location ?? '-'}</span>
            </div>
            <div className={`${styles.description} col-span-6`}>
              Diện tích:
              <span className="font-bold text-main"> {item?.acreage ?? '-'}</span>
            </div>
            <div className={`${styles.description} col-span-6`}>
              Thời gian:
              <span className="font-bold text-main"> {item?.year ?? '-'}</span>
            </div>
            <div className={`${styles.description} col-span-6`}>
              Giá:
              <span className="font-bold text-main"> {item?.price ?? '-'}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(PostThumb)