import gql from 'graphql-tag';

const BUSINESS_MODEL_QUERY = gql`
  query businessModels {
    businessModels {
      id
      title
      content {
        keyPartners
        keyActivities
        valueProposition
        customerRelationships
        customerSegments
        keyResources
        channels
        costStructure
        revenueStreams
      }
    }
  }
`;

 const BUSINESS_MODEL_SEARCH_QUERY = gql`
  query businessModels($searchString: String) {
    businessModels(searchString: $searchString) {
      id
      title
      content {
        keyPartners
        keyActivities
        valueProposition
        customerRelationships
        customerSegments
        keyResources
        channels
        costStructure
        revenueStreams
      }
    }
  }
`;
export default { BUSINESS_MODEL_SEARCH_QUERY, BUSINESS_MODEL_QUERY};
