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
      business: ['', Validators.required],
      product: ['', Validators.required],
      relationship: ['', Validators.required],
      partner: ['', Validators.required],
      platform: ['', Validators.required]
    });
  }

  private setStartValues(): void {
    this.questionnaireForms.setValue({
      business: this.questionnaire[0].answers[0].answer,
      product: this.questionnaire[1].answers[0].answer,
      relationship: this.questionnaire[2].answers[0].answer,
      partner: this.questionnaire[3].answers[0].answer,
      platform: this.questionnaire[3].answers[0].answer
    });
  }

  submitForm(): void {
    this.router.navigate(['trust-build-canvas'], {
      state: { updatedData: this.questionnaireForms.value }
    });
  }
}
