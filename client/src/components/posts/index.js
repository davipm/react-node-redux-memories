import { Grid, CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./post";

export default function Posts({ setCurrentId }) {
  const { posts, loading, error } = useSelector((state) => state.posts);

  if (loading) return <CircularProgress />;

  if (error) return <Typography variant="h6">Error!</Typography>;

  return (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
