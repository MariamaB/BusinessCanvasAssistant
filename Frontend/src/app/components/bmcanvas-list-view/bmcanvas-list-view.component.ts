import { Component, OnInit } from "@angular/core";
import { Apollo, QueryRef } from "apollo-angular";
import { Subscription } from "rxjs";
import gql from "graphql-tag";

const BUSINESS_MODEL_QUERY = gql`
  query businessModels($searchString: String) {
    businessModels(searchString: $searchString) {
      id
      name
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

const BUSINESS_MODEL_CREATE = gql`
  mutation createBusinessModel($name: String!) {
    createBusinessModel(name: $name) {
      id
      name
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

const BUSINESS_MODEL_DELETE = gql`
  mutation deleteBusinessModel($id: String!) {
    deleteBusinessModel(id: $id) {
      id
      name
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
const BUSINESS_MODEL_EDIT = gql`
  mutation editBusinessModel($id: String!, $name: String, $content: BMInput) {
    editBusinessModel(id: $id, name: $name, content: $content) {
      id
      name
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

const BUSINESS_MODEL_ON_EDIT = gql`
  subscription businessModelOnEdit {
    businessModelOnEdit {
      id
      name
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

const ON_NEW_BUSINESS_MODEL = gql`
  subscription newBusinessModel {
    newBusinessModel {
      id
      name
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

@Component({
  selector: "app-bmcanvas-list-view",
  templateUrl: "./bmcanvas-list-view.component.html",
  styleUrls: ["./bmcanvas-list-view.component.css"]
})
export class BmcanvasListViewComponent implements OnInit {
  businessModels: any[];
  businessModel: {};
  loading = true;
  error: any;
  public name = "My business name!";

  private query: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getData();
    this.onNewBusinessModel();

    console.log("onINit " + history.state.updatedData);
    if (history.state.updatedData != undefined) {
      console.log("passed data " + history.state.updatedData.name);
      let updatedBusinessmodel = history.state.updatedData;
      // this.businessModels.map(bm =>
      //   bm.i === updatedBusinessmodel.id ? updatedBusinessmodel : bm
      // );
      this.updateBusinessModel(history.state.updatedData);
    }
  }

  ngOnDestroy() {
    this.query.unsubscribe();
  }

  public createNewBusinessModel() {
    this.query = this.apollo
      .mutate({
        mutation: BUSINESS_MODEL_CREATE,
        variables: {
          name: this.name
        }
      })
      .subscribe(
        ({ data }) => {
          this.businessModels.push(data.createBusinessModel);
        },
        error => {
          console.log(error);
          alert("Creating " + this.name + " failed!");
        }
      );
  }

  public deleteBusinessModel(bmId) {
    this.apollo
      .mutate({
        mutation: BUSINESS_MODEL_DELETE,
        variables: {
          id: bmId
        }
      })
      .subscribe(
        ({ data }) => {
          this.businessModels = data.deleteBusinessModel
            ? this.businessModels.filter(
                d => d.id != data.deleteBusinessModel.id
              )
            : this.businessModels;
        },
        error => {
          console.log(error);
          alert("Deleting " + bmId.name + " failed!");
        }
      );
  }

  public editBusinessModel(id, name?, content?) {
    this.apollo
      .mutate({
        mutation: BUSINESS_MODEL_EDIT,
        variables: {
          id,
          name,
          content
        }
      })
      .subscribe(
        ({ data }) => {
          this.businessModels.map(bm =>
            bm.id === data.editBusinessModel.id ? data.editBusinessModel : bm
          );
        },
        error => {
          console.log(error);
          alert("Updating " + name + " failed!");
        }
      );
  }

  async onNewBusinessModel() {
    this.query = this.apollo
      .subscribe({
        query: ON_NEW_BUSINESS_MODEL,
        variables: {}
      })
      .subscribe(({ data }) => {
        // this.document = {
        //   /* eslint-disable */
        //   id: data.newDocument.id,
        //   name: data.newDocument.name,
        //   /* eslint-disable */
        //   content: data.newDocument.content
        // };
        // return data.newDocument;
        // this.documents.push(data.document);
      });
  }

  private getData() {
    this.query = this.apollo
      .watchQuery({
        query: BUSINESS_MODEL_QUERY
      })
      .valueChanges.subscribe(({ data }) => {
        this.businessModels = data.businessModels;
      });
  }

  private updateBusinessModel(businessModel) {
    this.editBusinessModel(
      businessModel.id,
      businessModel.name,

      {
        keyPartners: businessModel.content.keyPartners,
        keyActivities: businessModel.content.keyActivities,
        valueProposition: businessModel.content.valueProposition,
        customerRelationships: businessModel.content.customerRelationships,
        customerSegments: businessModel.content.CustomerSegments,
        keyResources: businessModel.content.keyResources,
        channels: businessModel.content.channels,
        costStructure: businessModel.content.costStructure,
        revenueStreams: businessModel.content.revenueStreams
      }
    );
  }
}
