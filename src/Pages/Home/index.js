import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";
import { List } from "../../Components/List";
import React, { useState } from "react";

export const Home = () => {
    return (
      <>
        <h1>Home</h1>
        <p>This is a to do app.</p>
        <Header />
        <List />
      </>
    );
  }