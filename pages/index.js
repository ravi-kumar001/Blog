import { Fragment } from "react";
import Hero from "@/components/home-pages/Hero";
import FeaturedPosts from "@/components/home-pages/featured-posts";
import { getFeaturedPosts } from "@/lib/PostUtil";
import Head from "next/head";

// const dummyData = [
//     { title: 'Image 1', date: '2024-12-23', desc: 'This is Description 1', image: 'image-1.png', slug: 'image-1' },
//     { title: 'Image 2', date: '2024-12-23', desc: 'This is Description 2', image: 'image-2.png', slug: 'image-2' },
//     { title: 'Image 3', date: '2024-12-23', desc: 'This is Description 3', image: 'image-3.png', slug: 'image-3' },
//     { title: 'Image 4', date: '2024-12-23', desc: 'This is Description 4', image: 'image-4.png', slug: 'image-4' },
// ]

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Ravi's Blog</title>
                <meta name="description" content="This Web is about programming and development." />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}
export function getStaticProps() {
    const allPosts = getFeaturedPosts();
    return {
        props: {
            posts: allPosts
        }
    }
}
export default HomePage;