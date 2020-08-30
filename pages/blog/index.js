import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'
import Date from '../../components/date'

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>Blog - {siteTitle}</title>
            </Head>

            <section className="container mt-5">
                {allPostsData.length > 0 ? (allPostsData.map(({ id, date, title }) => (
                    <div key={id} className="card mb-3">
                        <div className="card-body">
                            <Link href="/blog/[id]" as={`/blog/${id}`}>
                                <a>
                                    <h3>{title}</h3>
                                </a>
                            </Link>
                            <br />
                            <small>
                                <Date dateString={date} />
                            </small>
                        </div>
                    </div>
                ))) : (
                    <div className="text-center">
                        <h3 className="display-4">No Blog posts yet! Please come back later!</h3>
                    </div>
                )}
            </section>

        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
