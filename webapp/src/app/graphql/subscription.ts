import gql from 'graphql-tag';


export const BUSINESS_MODEL_ON_EDIT = gql`
  subscription businessModelOnEdit {
    businessModelOnEdit {
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

export const ON_NEW_BUSINESS_MODEL = gql`
  subscription newBusinessModel {
    newBusinessModel {
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
