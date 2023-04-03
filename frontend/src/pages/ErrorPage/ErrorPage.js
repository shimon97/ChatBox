import React from "react";
import { Grid } from "@mui/material";
import { PageHeader } from "../../components/Common/PageHeader/PageHeader";
import { ErrorSubtitle, ErrorTitle, StyledButton } from "./ErrorPage.styles";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export const ErrorPage = () => {
  const dispatch = useDispatch();
  return (
    <Grid container spacing={0}>
      <PageHeader />
      <Grid item xs={12}>
        <ErrorTitle>Sorry!, somthing went wrong.</ErrorTitle>
      </Grid>
      <Grid item xs={12}>
        <ErrorSubtitle>Try to refresh the page or come back later.</ErrorSubtitle>
      </Grid>
      <Grid item xs={12} display={"flex"} justifyContent={"center"}>
        <StyledButton
          variant="contained"
          onClick={() => {
            dispatch(push("/"));
          }}
        >
          Refresh
        </StyledButton>
      </Grid>
    </Grid>
  );
};
