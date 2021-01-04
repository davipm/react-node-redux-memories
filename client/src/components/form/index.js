import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

import { Container, ButtonSubmit, FileInput } from "./styles";
import { createPost, updatePost } from "../../store/actions/posts";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(2),
    },
  })
);

export default function Form({ currentId, setCurrentId }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFiles: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  function clear() {
    setCurrentId(0);

    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFiles: "",
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setPostData({
      ...postData,
      [name]: name === "tags" ? value.split(",") : value,
    });
  }

  return (
    <Paper className={classes.paper}>
      <Container onSubmit={handleSubmit} className={classes.root}>
        <Typography variant="h6">
          {currentId ? `Editing ${post.title}` : "Creating a Memory"}
        </Typography>

        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={handleChange}
        />

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleChange}
        />

        <TextField
          name="message"
          variant="outlined"
          label="Message"
          multiline
          fullWidth
          rows={4}
          value={postData.message}
          onChange={handleChange}
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separeted)"
          fullWidth
          value={postData.tags}
          onChange={handleChange}
        />

        <FileInput>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFiles: base64 })
            }
          />
        </FileInput>

        <ButtonSubmit
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </ButtonSubmit>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </Container>
    </Paper>
  );
}
