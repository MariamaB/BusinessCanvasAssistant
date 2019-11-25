import { Component, OnInit } from "@angular/core";
import { Apollo, QueryRef } from "apollo-angular";
import { Subscription } from "rxjs";
import gql from "graphql-tag";

const DOCUMENT_QUERY = gql`
  query documents($searchString: String) {
    documents(searchString: $searchString) {
      id
      title
      content
    }
  }
`;

const DOCUMENT_SUBSCRIBTION = gql`
  subscription {
    documentOnEdit {
      id
      title
      content
    }
  }
`;

@Component({
  selector: "app-document-view",
  templateUrl: "./document-view.component.html",
  styleUrls: ["./document-view.component.css"]
})
export class DocumentViewComponent implements OnInit {
  documents: any[];
  loading = true;
  error: any;

  private query: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo
      .watchQuery<any>({
        query: DOCUMENT_QUERY,
        variables: {
          // searchString: "miriam"
        }
      })
      .valueChanges.subscribe(({ data }) => {
        this.documents = data.documents;
        // this.loading = loading;
        // this.error = errors;
      });
    // this.query = this.apollo.subscribe({
    // 	query: DOCUMENT_QUERY,
    // 	variables: { DOCUMENT_SUBSCRIBTION }
    // });
  }

  ngOnDestroy() {
    this.query.unsubscribe();
  }

  // public  getDocument = () => {
  //   this.apollo.query({DOCUMENT_QUERY{

  //   }});
  // };
}
