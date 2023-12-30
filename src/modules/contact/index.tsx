import React, { memo } from 'react';
import Banner from './components/banner';
import Form from './components/form';

type Props = {
  //
};

const ContactContainer: React.FC<Props> = () => {
  return (
    <>
      <Banner />
      <Form />
    </>
  );
};

export default memo(ContactContainer);
