import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// o _app toda vez que o usuario acessa uma pagina diferente é reaproveitado porém é recalculado assim gerando um processamento a mais.
// o arquivo _document é estático e será carregado somente uma vez, assim diminuindo o impacto de processamento.
export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
        ) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })
    
          const initialProps = await Document.getInitialProps(ctx)
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal()
        }
      }
    render(){
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}