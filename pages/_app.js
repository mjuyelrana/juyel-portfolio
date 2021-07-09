import '../styles/globals.css'
import '../styles/theme-css/custom.css'
import Head from 'next/head'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

                <title>Md. Juyel Rana - A Full Stack Software Developer</title>

                <meta name="keywords"
                      content="Md. Juyel Rana, A Full Stack Developer, React Js (Next Js, Redux, Flux, Material UI, React-bootstrap), Vue Js(Nuxt Js, Vuex), PHP (Laravel, Codeigniter), Node Js (Express Js), Native (Java, Android, Swift), Cross Platform (React Native, Ionic), MySQL, MongoDB, Firebase"/>
                <meta name="description"
                      content="React Js (Next Js, Redux, Flux, Material UI, React-bootstrap), Vue Js(Nuxt Js, Vuex), PHP (Laravel, Codeigniter), Node Js (Express Js), Native (Java, Android, Swift), Cross Platform (React Native, Ionic), MySQL, MongoDB, Firebase, Digital Ocean,AWS, Cloud, Linux (Apache, Mysql Server), Docker, Kubernetes, Jenkins, Git, Bitbucket, Github, Gitlab, Trello, Jira, ClickUp."/>
                <meta property="og:title"
                      content="Md. Juyel Rana, A Full Stack Developer."/>
                <meta name="author" content="Md. Juyel Rana"/>
                <meta content='241110544128' property='fb:app_id'/>
                <meta property="og:url" content="https://juyelrana.com/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/assets/img/favicons/favicon-400x400.png"/>
                <meta property="og:image:width" content="400"/>
                <meta property="og:image:height" content="400"/>


                <meta property="og:site_name" content="Md. Juyel Rana | Personal Portfolio"/>
                <meta property="og:description"
                      content="React Js (Next Js, Redux, Flux, Material UI, React-bootstrap), Vue Js(Nuxt Js, Vuex), PHP (Laravel, Codeigniter), Node Js (Express Js), Native (Java, Android, Swift), Cross Platform (React Native, Ionic), MySQL, MongoDB, Firebase, Digital Ocean,AWS, Cloud, Linux (Apache, Mysql Server), Docker, Kubernetes, Jenkins, Git, Bitbucket, Github, Gitlab, Trello, Jira, ClickUp."/>

                {/*Favicons*/}
                <link
                    href="/assets/img/favicons/favicon180.png"
                    rel="icon"/>

                <link
                    href="/assets/img/favicons/favicon32.png"
                    rel="apple-touch-icon"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
