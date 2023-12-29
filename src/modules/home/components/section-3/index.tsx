import React, { memo, useState } from 'react';
import styles from './styles.module.css'
import { alt } from '@/constants';
import { logo } from '@/assets/images/logo';
import Svg from '@/components/Svg';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';

type Props = {
  //
};

const Section3: React.FC<Props> = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <img className={styles.imgBgTeam} src="/images/png/team.png" alt={alt} />
        <div className={`${styles.container}`}>
          <div className='relative'>
            <div className={`${styles.logo}`} dangerouslySetInnerHTML={{ __html: logo }}></div>
            <h3 className={`${styles.title}`}>TẬN HƯỞNG CUỘC SỐNG XANH TRONG CHÍNH CĂN NHÀ CỦA BẠN</h3>
            <div className="m-auto flex justify-center mt-10" onClick={() => setShow(true)}>
              <Svg class={styles.play} name='play' />
            </div>
          </div>
        </div>
      </div>
      {
        show && (
          <div className={`${styles.modal}`}>
            <div className={`${styles.bgClose}`} onClick={() => setShow(false)}></div>
            <div className={`${styles.closeButton}`} onClick={() => setShow(false)}>
              <Svg name='close' class={styles.closeIcon} />
            </div>
            <div className={`${styles.contentModal}`}>
              <YouTube
                videoId={getYouTubeID("https://www.youtube.com/watch?v=-6KvVfUERVA&ab_channel=MinHeHe") ?? ''}
                className={styles.iframe}
                opts={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </div>
          </div>
        )
      }
    </>
  );
};

export default memo(Section3);
