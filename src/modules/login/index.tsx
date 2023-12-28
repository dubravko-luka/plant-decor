import React, { memo } from 'react';
import styles from './styles.module.css'
import { logo } from '@/assets/images/logo';
import { Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/store/actions/globalAction';
import { useRouter } from 'next/router';
import { AppRoutes } from '@/constants/routes';
import { setLoged } from '@/store/actions/userAction';

type Props = {
  //
};

const LoginContainer: React.FC<Props> = () => {

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const onFinish = () => {
    dispatch(setLoading(true))

    setTimeout(() => {
      dispatch(setLoading(false))
      dispatch(setLoged(true))
      router.push(AppRoutes.motelRoom)
    }, 3000)
  }

  return (
    <>
      <Form
        name="normal_reviews"
        layout="vertical"
        form={form}
        onFinish={onFinish}
      >
        <div className={`${styles.wrapper}`}>
          <div className={`${styles.container}`}>
            <div className="flex justify-center mb-5">
              <div className={`${styles.logo}`} dangerouslySetInnerHTML={{ __html: logo }} />
            </div>
            <div className={`${styles.form}`}>
              <Form.Item
                className={`${styles.fieldInput} ${styles.inputUsername}`}
                name="username"
                label=""
                rules={[{ required: true, message: 'Vui lòng không được bỏ trống' }]}
              >
                <Input placeholder='Tên đăng nhập' />
              </Form.Item>
              <Form.Item
                className={`${styles.fieldInput} ${styles.inputPassword}`}
                name="password"
                label=""
                rules={[{ required: true, message: 'Vui lòng không được bỏ trống' }]}
              >
                <Input.Password placeholder='Mật khẩu' />
              </Form.Item>
              <div className="flex justify-end">
                <Link
                  href={'/'}
                  className='text-white opacity-70 text-xs hover:text-main'
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <button className={`${styles.btnLogin} font-bold`}>Đăng nhập</button>
              <div className="flex justify-center items-center">
                <Link
                  className='font-bold text-xs text-red-500 hover:text-red-500 hover:underline'
                  href={'tel:0913890182'}
                  target='_blank'
                >
                  Hỗ trợ: 0913890182
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default memo(LoginContainer);