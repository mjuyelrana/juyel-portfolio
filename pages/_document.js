import Document, {Head, Html, Main, NextScript} from 'next/document'
import HeaderAssets from "../components/Frontend/Header/HeaderAssets";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                <HeaderAssets/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;



