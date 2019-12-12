import gql from "graphql-tag";

const BUSINESS_MODEL_QUERY = gql`
  query businessModels($searchString: String) {
    businessModels(searchString: $searchString) {
      id
      title
      content {
        keyPartners
        keyActivities
        valueProposition
        customerRelationships
        CustomerSegments
        keyResources
        channels
        costStructure
        revenueStreams
      }
    }
  }
`;
