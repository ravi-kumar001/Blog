import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './post-item.module.css'

const PostItem = (props) => {
    const { title, date, desc, image, slug } = props.post;
    const formateDate = new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`
    return (
        <li  className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <date>{formateDate}</date>
                    <p>
                        {desc}
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default PostItem;