import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        {/* <script src="https://mf-app1.vercel.app/_next/static/runtime/app1RemoteEntry.js" /> */}
        {/* <script src="http://localhost:3001/_next/static/chunks/remoteEntry.js" /> */}
        <script src="http://localhost:8081/remoteEntry.js" />
        <script src="http://localhost:3002/remoteEntry.js" async defer />
        {/* <script src="http://localhost:8081/components.bundle.css" async defer /> */}
        <script src="http://localhost:8081/src_styles_tailwind_css-webpack_sharing_consume_default_react_react.bundle.js" />
        <script src="http://localhost:8081/bundle.js" />
        <script src="http://localhost:3002/bundle.js" async defer />
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
