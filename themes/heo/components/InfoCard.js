import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import MenuGroupCard from './MenuGroupCard'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CONFIG from '../config'
import Announcement from './Announcement'
import Card from './Card'


/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { className, siteInfo, notice } = props
  const router = useRouter()
  // 在文章详情页特殊处理

  return (
        <Card className={className}>
            <div
                className='justify-center items-center flex py-6 dark:text-gray-100  transform duration-200 cursor-pointer'
                onClick={() => {
                  router.push('/')
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <LazyImage src={siteInfo?.icon} className='rounded-full' width={120} alt={siteConfig('AUTHOR')} />
            </div>
            <div className='font-medium text-center text-xl pb-4'>{siteConfig('AUTHOR')}</div>
            <div className='text-sm text-center'>{siteConfig('BIO')}</div>
      {/* 公告栏 */}
      <Announcement post={notice} style={{ color: 'white !important' }} />

        {/* 第三个按钮 */}
     <MenuGroupCard {...props} />
      </div>
    </Card>
  )
}

/**
 * 了解更多按鈕
 * @returns
 */
