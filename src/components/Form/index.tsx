import { FC } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { sagaActions } from "store/sagaActions";

export const Form: FC = () => {
  const dispatch = useDispatch();

  const onSubmit = ({ item }: { item: string }) => {
    console.log(item);
    dispatch({
      type: sagaActions.ADD_ITEM_SAGA,
      payload: { title: item, status: "added" },
    });
  };

  return (
    <Container>
      <FinalForm
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <h2>Add item</h2>

            <Field name="item">
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  id="item"
                  label="item"
                  variant="standard"
                  placeholder="item"
                  error={!!error && !!touched}
                  helperText={touched ? error : ""}
                />
              )}
            </Field>

            <Button type="submit" variant="contained">
              Add
            </Button>
          </StyledForm>
        )}
      />
      <Button
        type="submit"
        variant="text"
        onClick={() =>
          dispatch({
            type: sagaActions.CLEAR_ITEMS_SAGA,
          })
        }
      >
        Clear
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 400px;
`;
