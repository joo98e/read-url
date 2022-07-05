import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

const Document = (props: Props) => {
  return (
    <Html lang='KO'>
        <Head />
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document