import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Link from 'next/link';
import { AppRoutes } from '@/constants/routes';
import { useRouter } from 'next/router';
import PostThumb from '../PostThumb';
import NotFoundData from '@/components/NotFoundData';
import Pagination from '@/components/Pagination';
import { handleObjectQuery } from '@/utils';
import _ from 'lodash';

type Props = {
  //
};

const List: React.FC<Props> = () => {

  const router = useRouter();
  const [currentQuery, setCurrentQuery] = useState('')

  const [adviseType] = useState(
    [
      {
        slug: "san-vuon",
        name: 'Sân Vườn'
      },
      {
        slug: "tranh-cay",
        name: 'Tranh Cây'
      },
      {
        slug: "cay-canh",
        name: 'Cây cảnh'
      }
    ]
  )

  const [advise] = useState(
    {
      data: [
        {
          slug: 'du-an-tranh-cay-canh',
          thumbnail: "/images/jpg/home-banner.jpg",
          name: "Dự Án Tranh Cây Cảnh",
          shortDescription: `Tận hưởng Sự Hiện Đại và Ấm Áp trong Không Gian Sống<br/>Những không gian sống hiện đại không chỉ là nơi chúng ta ở, mà còn là nơi thể hiện cái tôi và cảm xúc của chúng ta. Trải nghiệm thiết kế nội thất phong cách hiện đại trong chung cư, căn hộ không chỉ là việc kết hợp những đường nét tinh tế, mà còn là cách tạo nên một không gian gần gũi, ấm cúng và đậm chất hiện đại.`
        }
      ],
      totalItem: 1,
      itemPerpage: 10,
      currentPage: 1,
    }
  )

  useEffect(() => {
    if (adviseType && adviseType.length > 0) {
      if (!router.query.type) {
        handleObjectQuery(router, 'type', adviseType[0].slug, AppRoutes.advise)
      } else {
        if (router.query) {
          const item: any = _.find(adviseType, { slug: router.query.type ?? '' })
          if (item) {
            setCurrentQuery(item?.slug ?? 0)
          }
        }
      }
    }
  }, [router.query.type, adviseType])

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.content} pb-10`}>
          <div className="px-2">
            <h1 className='text-2xl font-bold text-center text-black uppercase'>TƯ VẤN THIẾT KẾ THI CÔNG</h1>
          </div>

          <div className="mt-5 sm:px-10 px-5 pt-10">
            <div className={`${styles.filters}`}>
              <div className={`${styles._filters}`}>
                {adviseType?.map((item, index) => (
                  <Link scroll={false} href={`${AppRoutes.advise}?page=${router.query.page ?? 1}&type=${item.slug}`} className={`${styles.itemQuery} ${currentQuery === item.slug ? styles.active : ''}`} key={index}>
                    <p className={styles.textQuery}>{item?.name}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-12 sm:gap-4 gap-y-4">
              {
                advise?.data?.map((item: any, index: any) => (
                  <div key={index} className="lg:col-span-4 sm:col-span-6 col-span-12">
                    <PostThumb item={item} />
                  </div>
                ))
              }
            </div>

            {
              advise?.totalItem === 0 && <NotFoundData />
            }

            {/* PAGINATION */}
            {
              advise?.totalItem !== 0 && (
                <div className={`${styles.wrapPagination}`}>
                  <Pagination
                    options={{
                      defaultPageSize: advise.itemPerpage,
                      total: advise?.totalItem,
                      current: advise.currentPage,
                    }}
                    onChange={(pageNumber: any) => {
                      handleObjectQuery(router, 'page', pageNumber, AppRoutes.advise)
                    }}
                  />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(List);
