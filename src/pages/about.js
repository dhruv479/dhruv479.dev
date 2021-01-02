import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExtLink, InlinePageLink } from "../components/atoms"
import Contact from "../components/contact"

const About = _ => {
  return (
    <Layout activePage="about">
      <SEO title="About" />
      <div className="container">
        <article className="prose">
          <h2>About Me</h2>
          <p>
            I'm Dhruv, I work full-time as a software engineer at{" "}
            <ExtLink link="https://shipsy.io/">Shipsy Logistics</ExtLink>. In my
            free time, I study system designing along with golang. My goal is to
            write useful apps that impact and conttibute to society while
            working a full-time job.
          </p>
          <h2>Why make this website?</h2>
          {/* <p>
            I made this website to learn what actually goes into web
            development. From planning, design, development, launch, and
            maintenance. For sure there are other things that I have yet to
            encounter, and I’m ready to learn them.
          </p> */}
          <p>
            This serves as a motivation for me to continue making projects and
            writing blogs because now I finally have a place to showcase them.
          </p>
          {/* <h2>Why write a blog?</h2>
          <p>
            My{" "}
            <InlinePageLink to="/blog/welcome">first blog post</InlinePageLink>{" "}
            explained it. I'd be happy if you read it :)
          </p> */}
          <h2>What else?</h2>
          <p>
            When I’m not programming, I endlessly watch Anime (Onepiece, Naruto,
            ... ) and browse Instagram for dark humor
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
