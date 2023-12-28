import React, { memo, useState } from 'react';
import styles from './styles.module.css'
import { Divider, Input, Tag } from 'antd';
import Select from 'react-select';
import { dataDemo } from '@/data';
import { PlusOutlined } from '@ant-design/icons'
import List from './components/list';

type Props = {
  //
};

const HomeContainer: React.FC<Props> = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className="grid grid-cols-12 s410:gap-5 gap-y-3">
          <div className="llg:col-span-3 sm:col-span-4 450:col-span-6 col-span-12">
            <Select
              placeholder="Nhà"
              className={styles.selectOption}
              classNamePrefix="select-custom"
              value={selectedOption}
              onChange={(e: any) => setSelectedOption(e)}
              options={dataDemo}
            />
          </div>
          <div className="llg:col-span-3 sm:col-span-4 ssm:col-span-6 col-span-12">
            <Select
              placeholder="Thu tiền"
              className={styles.selectOption}
              classNamePrefix="select-custom"
              value={selectedOption}
              onChange={(e: any) => setSelectedOption(e)}
              options={dataDemo}
            />
          </div>
          <div className="llg:col-span-3 sm:col-span-4 ssm:col-span-6 col-span-12">
            <Select
              placeholder="Trạng thái"
              className={styles.selectOption}
              classNamePrefix="select-custom"
              value={selectedOption}
              onChange={(e: any) => setSelectedOption(e)}
              options={dataDemo}
            />
          </div>
          <div className="llg:col-span-3 sm:col-span-4 ssm:col-span-6 col-span-12">
            <Select
              placeholder="Điện nước"
              className={styles.selectOption}
              classNamePrefix="select-custom"
              value={selectedOption}
              onChange={(e: any) => setSelectedOption(e)}
              options={dataDemo}
            />
          </div>
          <div className="llg:col-span-3 sm:col-span-4 ssm:col-span-6 col-span-12">
            <Select
              placeholder="Chờ xác nhận"
              className={styles.selectOption}
              classNamePrefix="select-custom"
              value={selectedOption}
              onChange={(e: any) => setSelectedOption(e)}
              options={dataDemo}
            />
          </div>
          <div className="llg:col-span-3 sm:col-span-4 ssm:col-span-6 col-span-12">
            <Input
              className={styles.inputFilter}
              placeholder='Tìm kiếm'
            />
          </div>
        </div>
        <Divider />
        <div className={`${styles.list} mt-5`}>
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-wrap justify-start items-center gap-2">
              <Tag color="#9c9a9a">Trống <span className='font-bold'>14</span></Tag>
              <Tag color="#108ee9">Đã cho thuê <span className='font-bold'>11</span></Tag>
              <Tag color="#f50">Chưa thu phí <span className='font-bold'>0</span></Tag>
            </div>
            <button className={`${styles.btnAddroom}`}>
              <PlusOutlined rev /> Thêm
            </button>
          </div>
          <Divider />
          <List />
        </div>
      </div>
    </>
  );
};

export default memo(HomeContainer);
