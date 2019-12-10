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

const DOCUMENT_CREATE = gql`
  mutation creatDocument($title: String!) {
    creatDocument(title: $title) {
      id
      title
      content
    }
  }
`;

const DOCUMENT_DELETE = gql`
  mutation deleteDocument($id: String!) {
    deleteDocument(id: $id) {
      id
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
  document: {};
  loading = true;
  error: any;
  text: String;
  title = "My Business Canvas!";

  private query: Subscription;

  constructor(private apollo: Apollo) {
    // this.documents.push(this.document);
  }

  ngOnInit() {
    this.getData();
    this.onNewDocument();
  }

  ngOnDestroy() {
    this.query.unsubscribe();
  }

  public createNewDocument() {
    this.query = this.apollo
      .mutate({
        mutation: DOCUMENT_CREATE,
        variables: {
          title: this.title
        }
      })
      .subscribe(
        ({ data }) => {
          console.log("created new Document!" + data.creatDocument.title);
          /* eslint-disable */
          this.documents.push(data.creatDocument);
        },
        error => {
          console.log(error);
          alert("Creating " + this.title + " failed!");
        }
      );
  }

  public deleteDocument(id) {
    this.query = this.apollo
      .mutate({
        mutation: DOCUMENT_DELETE,
        variables: {
          id
        }
      })
      .subscribe(
        ({ data }) => {
          /* eslint-disable */
          console.log("created new Document!" + data.deleteDocument);
          /* eslint-disable */
          this.documents = this.documents.filter(
            /* eslint-disable */
            d => (d.id = !data.deleteDocument)
          );
        },
        error => {
          console.log(error);
          alert("Deleting " + id + " failed!");
        }
      );
  }

  async onNewDocument() {
    this.query = this.apollo
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
      .subscribe(({ data }) => {
        /* eslint-disable */
        // console.log("On created new Document!" + data.newDocument.title);
        // /* eslint-disable */
        // this.document = {
        //   /* eslint-disable */
        //   id: data.newDocument.id,
        //   /* eslint-disable */
        //   title: data.newDocument.title,
        //   /* eslint-disable */
        //   content: data.newDocument.content
        // };
        // return data.newDocument;
        // this.documents.push(data.document);
      });
  }

  private getData() {
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
  }

  // public  getDocument = () => {
  //   this.apollo.query({DOCUMENT_QUERY{

  //   }});
  // };
}
