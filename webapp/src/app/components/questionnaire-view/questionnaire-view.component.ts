import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionnaireFactory } from 'src/app/share/classes/questionnaire-factory';
import { IQuestion } from 'src/app/share/interfaces/interfaces';

@Component({
  selector: 'app-questionnaire-view',
  templateUrl: './questionnaire-view.component.html',
  styleUrls: ['./questionnaire-view.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questionnaireForms: FormGroup;
  questionnaire: IQuestion[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.questionnaire = QuestionnaireFactory.createBusinessQuestionnaire();
    this.initForm();
    this.setStartValues();
  }

  private initForm(): void {
    this.questionnaireForms = this.fb.group({
      participation: ['', Validators.required],
      identification: ['', Validators.required],
      matchmaking: ['', Validators.required],
      transaction: ['', Validators.required],
      incentivization: ['', Validators.required],
      interaction: ['', Validators.required],
      content: ['', Validators.required],
      privacy: ['', Validators.required]
    });
  }

  private setStartValues(): void {
    this.questionnaireForms.setValue({
      stakeholder: this.questionnaire[0].answers[0].answer,
      business: this.questionnaire[1].answers[0].answer,
      relationship: this.questionnaire[2].answers[0].answer,
      segment: this.questionnaire[3].answers[0].answer,
      platform: this.questionnaire[4].answers[0].answer,
      reimbursement: this.questionnaire[5].answers[0].answer,
      role: this.questionnaire[6].answers[0].answer,
      management: this.questionnaire[7].answers[0].answer,
      product: this.questionnaire[8].answers[0].answer,
      discipline: this.questionnaire[9].answers[0].answer,
      treatment: this.questionnaire[10].answers[0].answer
    });
  }

  submitForm(): void {
    this.router.navigate(['trust-build-canvas'], {
      state: { updatedData: this.questionnaireForms.value }
    });
  }
}
