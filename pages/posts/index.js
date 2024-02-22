import AllPosts from "@/components/Posts/AllPosts";
import { getAllPosts } from "@/lib/PostUtil";
import Head from "next/head";
import { Fragment } from "react";

// const dummyData = [
//     { title: 'Image 1', date: '2002-12-23', desc: 'This is Description 1', image: 'image-1.png', slug: 'image-1' },
//     { title: 'Image 2', date: '2002-12-23', desc: 'This is Description 2', image: 'image-2.png', slug: 'image-2' },
//     { title: 'Image 3', date: '2002-12-23', desc: 'This is Description 3', image: 'image-3.png', slug: 'image-3' },
//     { title: 'Image 4', date: '2002-12-23', desc: 'This is Description 4', image: 'image-4.png', slug: 'image-4' },
// ]


function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name='description' content="This page about all courses!" />
            </Head>
            <AllPosts posts={props.posts} /></Fragment>
    )
}
export function getStaticProps() {
    const allPosts = getAllPosts();
    return {
        props: {
            posts: allPosts
        }
    }
}
export default AllPostsPage;