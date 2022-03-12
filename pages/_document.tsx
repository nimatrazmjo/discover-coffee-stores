import Document, { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">Î
        <Head>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument