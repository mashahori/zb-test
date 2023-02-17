import { FC } from "react";
import { Form, Table } from "components";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "store/store";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <h1>Table</h1>
        <Form />
        <Table />
      </Container>
    </Provider>
  );
};

export const Container = styled.main`
  width: 600px;
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
`;
