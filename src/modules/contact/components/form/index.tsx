import React, { memo, useState } from 'react';
import { Form } from 'antd';
import styles from './styles.module.css'
import Link from 'next/link';
import { hasValue } from '@/utils';

type Props = {
  //
};

const FormContact: React.FC<Props> = () => {

  const [form] = Form.useForm();
  const [setting] = useState(
    {
      address: ['11/25 Nguyễn Thái Sơn, P3, Gò Vấp', 'F1 Mậu Thân, An Phú, Ninh Kiều, Cần Thơ'],
      phone: [
        {
          label: '090.77777.09',
          value: '0907777709'
        }
      ],
      zalo: [
        {
          label: 'Xưởng cây cảnh Vường Trong Nhà',
          value: '0907777709'
        }
      ],
      email: [
        {
          label: 'vuontrongnha@gmail.com',
          value: 'vuontrongnha@gmail.com'
        }
      ],
    }
  )

  const onFinish = () => {
    // 
  }

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.content} p-5`}>
          <div className={`relative ${styles.wrapForm} p-10 sm:mb-0 mb-5 rounded-xl`}>
            <h1 className='text-2xl font-bold text-center'>LIÊN HỆ</h1>
            <Form
              name="normal_reviews"
              layout="vertical"
              form={form}
              onFinish={onFinish}
            >
              <div className={`${styles.form} grid grid-cols-12 gap-3`}>
                <div className={`${styles.inputs} sm:col-span-6 col-span-12`}>
                  <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng không được bỏ trống' }]}>
                    <input className={`${styles.input}`} type="text" placeholder='Họ tên khách hàng' />
                  </Form.Item>
                  <Form.Item name="phone" rules={[{ required: true, message: 'Vui lòng không được bỏ trống' }]}>
                    <input className={`${styles.input}`} type="tel" placeholder='Số điện thoại' />
                  </Form.Item>
                  <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng không được bỏ trống' }]}>
                    <input className={`${styles.input}`} type="email" placeholder='Địa chỉ email' />
                  </Form.Item>
                </div>
                <div className={`${styles.inputs} sm:col-span-6 col-span-12`}>
                  <Form.Item name="content" className='w-full' rules={[{ required: true, message: 'Vui lòng không được bỏ trống' }]}>
                    <textarea className={`${styles.textarea} w-full`} rows={8} placeholder='Thông tin dự án, diện tích, vị trí, phong cách thiết kế, v.v...' />
                  </Form.Item>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button className={`${styles.sendInfo}`}>GỬI THÔNG TIN</button>
              </div>
            </Form>
          </div>

          <div className={`grid grid-cols-12 gap-5 w-full pt-10`}>
            <div className={`${styles.info} sm:col-span-12 col-span-12`}>
              <h1 className='font-bold text-xl mb-5'>THÔNG TIN LIÊN HỆ</h1>
              {
                setting?.address.map((item: any, index: any) => (
                  hasValue(item) && (
                    <div className={`${styles.item}`} data-aos="fade-left" data-aos-duration="300" data-aos-offset="0" data-aos-delay={600 + 200 * index} key={index}>
                      <b>Chi nhánh {index + 1}: </b>
                      <span>{item}</span>
                    </div>
                  )
                ))
              }
              {
                setting?.phone.map((item: any, index: any) => (
                  hasValue(item.value) && (
                    <Link href={`tel:${item.value}`} target='_balnk' key={index}>
                      <div className={`${styles.item}`} data-aos="fade-left" data-aos-duration="300" data-aos-offset="0" data-aos-delay={1000 + 200 * index}>
                        <b>Điện thoại: </b>
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  )
                ))
              }

              {
                setting?.zalo.map((item: any, index: any) => (
                  hasValue(item.value) && (
                    <Link href={`https://zalo.me/${item.value}`} target='_balnk' key={index}>
                      <div className={`${styles.item}`} data-aos="fade-left" data-aos-duration="300" data-aos-offset="0" data-aos-delay={1400 + 200 * index}>
                        <b>Zalo: </b>
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  )
                ))
              }

              {
                setting?.email.map((item: any, index: any) => (
                  hasValue(item.value) && (
                    <Link href={`mailto:${item.value}`} target='_balnk' key={index}>
                      <div className={`${styles.item}`} data-aos="fade-left" data-aos-duration="300" data-aos-offset="0" data-aos-delay={1800 + 200 * index} >
                        <b>Email: </b>
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  )
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(FormContact);
