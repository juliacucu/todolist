import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";
import { List } from "../../Components/List";

export const Home = () => {
    return (
      <>
        <h1>Home</h1>
        <p>This is a to do app.</p>
        <Header />
        <Form />
        <List />
      </>
    );
  }