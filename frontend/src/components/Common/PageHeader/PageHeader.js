import React from "react";
import LogoImg from "../../../assets/Logo.png";
import { PageHeaderGrid, Title, Logo } from "./PageHeader.styles";

export const PageHeader = () => {
  return (
      <PageHeaderGrid item xs={12}>
        <Logo src={LogoImg} alt="logo" />
        <Title>Chat</Title>
      </PageHeaderGrid>
  );
};
