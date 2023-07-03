import { Html, Main, NextScript } from 'next/document'
import HeadDocs from './_head'

export default function Document() {
  return (
    <Html lang="en">
      <HeadDocs />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
