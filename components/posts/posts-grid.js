import PostItem from './post-item';
import classes from './posts-grid.module.css';

export default function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {/* Map each post into a PostItem */}
      {posts.map((post, i) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
