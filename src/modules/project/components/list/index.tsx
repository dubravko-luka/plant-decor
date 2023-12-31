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

  const [projectType] = useState(
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

  const [project] = useState(
    {
      data: [
        {
          slug: 'du-an-tranh-cay-canh',
          thumbnail: "/images/jpg/home-banner.jpg",
          name: "Dự Án Tranh Cây Cảnh",
          style: "Cổ Điển",
          location: "Quận Tân Bình",
          acreage: null,
          year: null,
          price: null,
        }
      ],
      totalItem: 1,
      itemPerpage: 10,
      currentPage: 1,
    }
  )

  useEffect(() => {
    if (projectType && projectType.length > 0) {
      if (!router.query.type) {
        handleObjectQuery(router, 'type', projectType[0].slug, AppRoutes.project)
      } else {
        if (router.query) {
          const item: any = _.find(projectType, { slug: router.query.type ?? '' })
          if (item) {
            setCurrentQuery(item?.slug ?? 0)
          }
        }
      }
    }
  }, [router.query.type, projectType])

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.content} pb-10`}>
          <div className="px-2">
            <h1 className='text-2xl font-bold text-center text-black uppercase'>DỰ ÁN ĐÃ TRIỂN KHAI THỰC TẾ</h1>
          </div>

          <div className="mt-5 sm:px-10 px-5 pt-10">
            <div className={`${styles.filters}`}>
              <div className={`${styles._filters}`}>
                {projectType?.map((item, index) => (
                  <Link scroll={false} href={`${AppRoutes.project}?page=${router.query.page ?? 1}&type=${item.slug}`} className={`${styles.itemQuery} ${currentQuery === item.slug ? styles.active : ''}`} key={index}>
                    <p className={styles.textQuery}>{item?.name}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-12 sm:gap-4 gap-y-4">
              {
                project?.data?.map((item: any, index: any) => (
                  <div key={index} className="lg:col-span-4 sm:col-span-6 col-span-12">
                    <PostThumb item={item} />
                  </div>
                ))
              }
            </div>

            {
              project?.totalItem === 0 && <NotFoundData />
            }

            {/* PAGINATION */}
            {
              project?.totalItem !== 0 && (
                <div className={`${styles.wrapPagination}`}>
                  <Pagination
                    options={{
                      defaultPageSize: project.itemPerpage,
                      total: project?.totalItem,
                      current: project.currentPage,
                    }}
                    onChange={(pageNumber: any) => {
                      handleObjectQuery(router, 'page', pageNumber, AppRoutes.project)
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
