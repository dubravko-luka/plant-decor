import React, { memo } from 'react';
import MotelRoomContainer from '@/modules/motel-room'
import { NextSeo } from 'next-seo';
import { IMAGE_BACKGROUND_WEB, NAME_PROJECT } from '@/constants';
import NameSection from '@/components/NameSection';

type Props = {
  //
};

const MotelRoom: React.FC<Props> = () => {
  return (
    <>
      <NameSection name="Phòng trọ" />
      <div className="mt-5">
        <MotelRoomContainer />
      </div>
      <NextSeo
        title={`${NAME_PROJECT} | Phòng trọ`}
        description={`Phòng trọ`}
        openGraph={{
          title: `${NAME_PROJECT} | Phòng trọ`,
          description: `Phòng trọ`,
          images: [
            { url: IMAGE_BACKGROUND_WEB, alt: NAME_PROJECT }
          ]
        }}
      />
    </>
  );
};

export default memo(MotelRoom);
