import { Fragment } from 'react';
import Head from 'next/head';
import FeaturedPosts from '../components/homepage/featured-posts';
import Hero from '../components/homepage/hero';
import { getFeaturedPosts } from '../lib/posts-util';

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Its All Ball Berings</title>
        <meta name="description" content="I can't have my wages garnisheed." />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
