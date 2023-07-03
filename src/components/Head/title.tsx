import Head from "next/head"
import { memo } from "react"

interface Props {
  title?: string,
}

const Title: React.FC<Props> = ({ title = 'LongTran' }) => {
  return (
    <>
      <Head>
        <title>{title ? title.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'LongTran'}</title>
      </Head>
    </>
  )
}

export default memo(Title)