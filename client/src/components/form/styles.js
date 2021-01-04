import styled from "styled-components/macro";
import { Button } from "@material-ui/core";

export const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FileInput = styled.div`
  width: 97%;
  margin: 10px 0;
`;

export const ButtonSubmit = styled(Button)`
  margin-bottom: 10px;
`;
