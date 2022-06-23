import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

let url: string = "https://api.github.com/graphql";
let accessKey: string = "";

const graphQLClient = new GraphQLClient(url, {
  headers: {
    Authorization: `bearer ${accessKey}`
  }
});

export const QueryCheckGraphQL: FC = memo(() => {
  const { data, state } = useQuery("POST", async () => {
    await graphQLClient.request(gql`
      query {
        viewer {
          login
          name
          email
          createdAt
        }
      }
    `);
  });
  console.log(state);

  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <p>This is QueryCheckGraphQLPage</p>
      <button onClick={onClickHome}>to home</button>
    </>
  );
});
