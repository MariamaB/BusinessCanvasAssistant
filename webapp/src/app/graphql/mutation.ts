import gql from 'graphql-tag';

const BUSINESS_MODEL_CREATE = gql`
  mutation createBusinessModel($name: String!) {
    createBusinessModel(name: $name) {
      id
      name
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
`;

const BUSINESS_MODEL_DELETE = gql`
  mutation deleteBusinessModel($id: ID!) {
    deleteBusinessModel(id: $id) {
      id
    }
  }
`;
const BUSINESS_MODEL_EDIT = gql`
  mutation editBusinessModel($businessModel: BMInput) {
    editBusinessModel(businessModel: $businessModel) {
      id
      name
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
`;
export default { BUSINESS_MODEL_DELETE, BUSINESS_MODEL_CREATE, BUSINESS_MODEL_EDIT};
