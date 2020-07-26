import { IBusinessModel } from './../../share/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import queryies from 'src/app/graphql/query';
const { BUSINESS_MODEL_QUERY } = queryies;
import mutations from '../../graphql/mutation';
const { BUSINESS_MODEL_CREATE, BUSINESS_MODEL_DELETE, BUSINESS_MODEL_EDIT } = mutations;
import {ON_NEW_BUSINESS_MODEL} from '../../graphql/subscription';




@Component({
  selector: 'app-bmcanvas-list-view',
  templateUrl: './bmcanvas-list-view.component.html',
  styleUrls: ['./bmcanvas-list-view.component.css'],
})
export class BmcanvasListViewComponent implements OnInit {
  businessModels: any[];
  businessModel: IBusinessModel;
  loading = true;
  error: any;
  public name = 'My business name!';

  private query: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getData();
    this.onNewBusinessModel();

    console.log('onINit ' + history.state.updatedData);
    if (history.state.updatedData !== undefined) {
      console.log('passed data ' + history.state.updatedData.name);
      // let updatedBusinessmodel = history.state.updatedData;
      // this.businessModels.map(bm =>
      //   bm.i === updatedBusinessmodel.id ? updatedBusinessmodel : bm
      // );
      this.updateBusinessModel(history.state.updatedData);
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.query.unsubscribe();
  }

  public createNewBusinessModel() {
    this.query = this.apollo
      .mutate({
        mutation: BUSINESS_MODEL_CREATE,
        variables: {
          name: this.name,
        },
      })
      .subscribe(
        ({ data }) => {
          const { createBusinessModel }: any = data;
          this.businessModels.push(createBusinessModel);
        },
        (error) => {
          console.log(error);
          alert('Creating ' + this.name + ' failed!');
        }
      );
  }

  public deleteBusinessModel(bmId) {
    this.apollo
      .mutate({
        mutation: BUSINESS_MODEL_DELETE,
        variables: {
          id: bmId,
        },
      })
      .subscribe(
        ({ data }) => {
          const { deleteBusinessModel }: any = data;
          this.businessModels = deleteBusinessModel
            ? this.businessModels.filter((d) => d.id !== deleteBusinessModel.id)
            : this.businessModels;
        },
        (error) => {
          console.log(error);
          alert('Deleting ' + bmId.name + ' failed!');
        }
      );
  }

  public editBusinessModel(businessModel?) {
    this.apollo
      .mutate({
        mutation: BUSINESS_MODEL_EDIT,
        variables: {
          businessModel,
        },
      })
      .subscribe(
        ({ data }) => {
          const { editBusinessModel }: any = data;
          this.businessModels.map((bm) =>
            bm.id === editBusinessModel.id ? editBusinessModel : bm
          );
        },
        (error) => {
          console.log(error);
          alert('Updating ' + name + ' failed!');
        }
      );
  }

  async onNewBusinessModel() {
    this.query = this.apollo
      .subscribe({
        query: ON_NEW_BUSINESS_MODEL,
        variables: {},
      })
      .subscribe(({ data }) => {
        const { newBusinessModel }: any = data;
        // if (!this.businessModels.some(bm => bm.id === newBusinessModel.id)) {
        this.businessModels.push(newBusinessModel);
        // }
      });
  }
  private getData() {
    this.query = this.apollo
      .watchQuery({
        query: BUSINESS_MODEL_QUERY,
      })
      .valueChanges.subscribe(({ data }) => {
        const { businessModels }: any = data;
        this.businessModels = businessModels;
      });
  }

  private updateBusinessModel(businessModel) {
    this.editBusinessModel({
      id: businessModel.id,
      name: businessModel.name,
      keyPartners: businessModel.keyPartners,
      keyActivities: businessModel.keyActivities,
      valueProposition: businessModel.valueProposition,
      customerRelationships: businessModel.customerRelationships,
      customerSegments: businessModel.customerSegments,
      keyResources: businessModel.keyResources,
      channels: businessModel.channels,
      costStructure: businessModel.costStructure,
      revenueStreams: businessModel.revenueStreams,
    });
  }
}
