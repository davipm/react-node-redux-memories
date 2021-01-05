import { useDispatch } from "react-redux";
import { CardContent, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { formatDistanceToNow, parseISO } from "date-fns";

import {
  Container,
  CustomCardMedia,
  OverlayLeft,
  OverlayRight,
  CustomCardActions,
  Details,
} from "./styles";

import { deletePost, likePost } from "../../../store/actions/posts";

export default function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <CustomCardMedia
        title={post.title}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      />

      <OverlayLeft>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {formatDistanceToNow(parseISO(post.createdAt))}
        </Typography>
      </OverlayLeft>

      <OverlayRight>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </OverlayRight>

      <Details>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </Details>

      <Typography
        style={{ padding: "0 16px" }}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>

      <CardContent>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.title}
        </Typography>
      </CardContent>

      <CustomCardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>

        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CustomCardActions>
    </Container>
  );
}
