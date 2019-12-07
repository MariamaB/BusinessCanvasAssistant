import { Component, OnInit } from "@angular/core";
import { Apollo, QueryRef } from "apollo-angular";
import { Subscription } from "rxjs";
import gql from "graphql-tag";
import { TextFieldModule } from "@angular/cdk/text-field";
import { MatButtonModule } from "@angular/material/button";

const DOCUMENT_QUERY = gql`
  query documents($searchString: String) {
    documents(searchString: $searchString) {
      id
      title
      content
    }
  }
`;

const DOCUMENT_MUTATION = gql`
  mutation creatDocument($title: String!) {
    creatDocument(title: $title) {
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

const ON_NEW_DOCUMENT = gql`
  subscription newDocument {
    newDocument {
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
  text: String;
  title = "My Business Canvas!";

  private query: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.onNewDocument();
    this.getData();
  }

  ngOnDestroy() {
    // this.query.unsubscribe();
  }

  public createNewDocument() {
    this.query = this.apollo
      .mutate({
        mutation: DOCUMENT_MUTATION,
        variables: {
          title: this.title
        }
      })
      .subscribe(
        ({ data }) => {
          // this.documents.push(data);
        },
        error => {
          console.log(error);
          alert("Creating " + this.title + " failed!");
        }
      );
  }

  async onNewDocument() {
    await this.apollo
      .subscribe({
        query: gql`
          subscription {
            newDocument {
              id
              title
              content
            }
          }
        `,
        variables: {}
      })
      .subscribe({
        next({ data }) {
          console.log("got now Docs: " + data);
          // this.documents.push(data.document);
        }
      });
  }

  private getData() {
    this.apollo
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
  }

  // public  getDocument = () => {
  //   this.apollo.query({DOCUMENT_QUERY{

  //   }});
  // };
}
