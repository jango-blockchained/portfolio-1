import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Anurag | Frontend Dev</title>
        </Head>
        <body className="bg-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;