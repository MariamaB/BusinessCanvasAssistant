import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";

export const subscription = gql `
  subscription DocumentOnEdit {
    documentOnEdit {
      id
      title
      content
    }
  }
`;

export default () => useSubscription(subscription);