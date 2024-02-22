import React from 'react';
import PostHeader from './PostHeader';
import classes from './post-content.module.css';
import Markdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// const dummyData = { title: 'Image 1', date: '2002-12-23', content: 'This is content', image: 'image-1.png', slug: 'image-1' }
const PostContent = (props) => {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const customRenderers = {
        // img(image) {
        //   return (
        //     <Image
        //       src={`/images/posts/${post.slug}/${image.src}`}
        //       alt={image.alt}
        //       width={600}
        //       height={300}
        //     />
        //   );
        // },
        p(paragraph) {
          const { node } = paragraph;
    
          if (node.children[0].tagName === 'img') {
            const image = node.children[0];
    
            return (
              <div className={classes.image}>
                <Image
                  src={`/images/posts/${post.slug}/${image.properties.src}`}
                  alt={image.alt}
                  width={600}
                  height={300}
                />
              </div>
            );
          }
    
          return <p>{paragraph.children}</p>;
        },
    
        code(code) {
          const { className, children } = code;
          const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
          return (
            <SyntaxHighlighter
              style={atomDark}
              language={language}
              children={children}
            />
          );
        },
      };
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} imagePath={imagePath} />
            <Markdown components={customRenderers}>{post.content}</Markdown>
        </article>
    );
};

export default PostContent;