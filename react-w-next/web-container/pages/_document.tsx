import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        {/* <script src="https://mf-app1.vercel.app/_next/static/runtime/app1RemoteEntry.js" /> */}
        {/* <script src="http://localhost:3001/_next/static/chunks/remoteEntry.js" /> */}
        <script src="http://localhost:8081/remoteEntry.js" />
        {/* <script src="http://localhost:8081/components.bundle.css" async defer /> */}
        <script src="http://localhost:8081/bundle.js" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
