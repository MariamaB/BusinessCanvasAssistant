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
      participation: this.questionnaire[0].answers[0].answer,
      identification: this.questionnaire[1].answers[0].answer,
      matchmaking: this.questionnaire[2].answers[0].answer,
      transaction: this.questionnaire[3].answers[0].answer,
      incentivization: this.questionnaire[4].answers[0].answer,
      interaction: this.questionnaire[5].answers[0].answer,
      content: this.questionnaire[6].answers[0].answer,
      privacy: this.questionnaire[7].answers[0].answer
    });
  }

  submitForm(): void {
    this.router.navigate(['trust-build-canvas'], {
      state: { updatedData: this.questionnaireForms.value }
    });
  }
}
