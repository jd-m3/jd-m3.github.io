import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import ReactTyped from 'react-typed'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero Section */}
      <Jumbotron className="jumbotron jumbotron-fluid text-center">
        <h1 className="display-3">Hi, I'm John.</h1>
        <div>
          <ReactTyped
            strings={["Full Stack Developer", "Process Automation Expert", "Fitness Enthusiast"]}
            typeSpeed={30}
            backSpeed={40}
            backDelay={500}
            loop
            smartBackspace
          />
        </div>
      </Jumbotron>

      <hr />

      <section>
        <Container>
          <p></p>
        </Container>
      </section>
    </Layout>
  )
}
