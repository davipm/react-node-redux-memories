import styled from "styled-components/macro";
import { Card, CardMedia, CardActions } from "@material-ui/core";

export const Container = styled(Card)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-radius: 15px;
`;

export const CustomCardMedia = styled(CardMedia)`
  padding-top: 56.25%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
`;

export const OverlayLeft = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
`;

export const OverlayRight = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const CustomCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 8px 16px;
`;
