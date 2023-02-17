import { FC, useEffect } from "react";
import { Button, Card } from "@mui/material";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "store/sagaActions";
import { IState } from "utils/types";

export const Table: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_DATA_SAGA });
  }, [dispatch]);

  const apiDataList = useSelector((state: IState) => state.items.apiItems);
  const localDataList = useSelector((state: IState) => state.items.localItems);

  const onDeleteItem = (id: string) => {
    dispatch({ type: sagaActions.DELETE_ITEM_SAGA, payload: id });
  };

  return (
    <Conteiner>
      <List>
        {apiDataList.map(({ title, id }) => (
          <li key={id}>
            <StyledCard>
              {title}
              <Button onClick={() => onDeleteItem(id)}>Delete</Button>
            </StyledCard>
          </li>
        ))}
      </List>
      <List>
        {localDataList.map(({ title, id, status }, index) => (
          <li key={index}>
            <StyledCard>
              {title} {status}
            </StyledCard>
          </li>
        ))}
      </List>
    </Conteiner>
  );
};

const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledCard = styled(Card)`
  height: 40px;
  padding: 0 20px;
  margin-bottom: 10px;
  width: 250px;
`;
