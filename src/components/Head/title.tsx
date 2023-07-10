import Head from "next/head"
import { memo } from "react"

interface Props {
  title?: string,
}

const Title: React.FC<Props> = ({ title = 'LongTran' }) => {
  return (
    <>
      <Head>
        <title>{title ? title : 'LongTran'}</title>
      </Head>
    </>
  )
}

export default memo(Title)