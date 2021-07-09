import Layout from "../components/Frontend/Layout/Layout";
import About from "../components/Frontend/Pages/About";
import Skills from "../components/Frontend/Pages/Skills";
import Resume from "../components/Frontend/Pages/Resume";
import Service from "../components/Frontend/Pages/Service";
import Portfolio from "../components/Frontend/Pages/Portfolio";
import Contact from "../components/Frontend/Pages/Contact";

export default function Home() {
    return (
        <Layout>

            {/*About Section*/}
            <About/>
            {/*End About Section*/}

            {/*Skills Section*/}
            <Skills/>
            {/*End Skills Section*/}

            {/*Resume Section*/}
            <Resume/>
            {/*End Resume Section*/}


            {/*Services Section*/}
            <Service/>
            {/*End Services Section*/}


            {/*Portfolio Section*/}
            <Portfolio/>
            {/*End Portfolio Section*/}


            {/*Contact Section*/}
            <Contact/>
            {/*End Contact Section*/}

        </Layout>
    )
}
