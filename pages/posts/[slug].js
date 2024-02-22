import PostContent from "@/components/Posts/PostDetail/PostContent";
import { getPostData, getPostsFiles } from "@/lib/PostUtil";
import { Fragment } from "react";
import Head from "next/head";

function SinglePostPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.desc} />
            </Head>
            <PostContent post={props.post} /></Fragment>
    )
}
export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
}

export function getStaticPaths() {
    const postFilenames = getPostsFiles();

    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}
export default SinglePostPage;