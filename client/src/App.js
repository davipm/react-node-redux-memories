import { useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Global from "./styles/global";
import { CustomAppBar, Heading, Image } from "./styles/global";
import memories from "./images/memories.png";

import Form from "./components/form";

function App() {
  const [currentID, setCurrentId] = useState(0);

  return (
    <div id="App">
      <Container maxWidth="lg">
        <CustomAppBar position="static" color="inherit">
          <Heading variant="h2" align="center">
            Memories
          </Heading>
          <Image src={memories} alt="Icon" />
        </CustomAppBar>

        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <p>Post</p>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Form currentId={currentID} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>

      <Global />

      <ToastContainer
        position="top-right"
        hideProgressBar={true}
        autoClose={2000}
      />
    </div>
  );
}

export default App;
