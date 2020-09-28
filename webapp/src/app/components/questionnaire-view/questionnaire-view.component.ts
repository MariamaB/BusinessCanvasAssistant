import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionnaireFactory } from 'src/app/share/classes/questionnaire-factory';
import { IQuestion } from 'src/app/share/interfaces/interfaces';

@Component({
  selector: 'app-questionnaire-view',
  templateUrl: './questionnaire-view.component.html',
  styleUrls: ['./questionnaire-view.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  questionnaireForms: FormGroup;
  questionnaire: IQuestion[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.questionnaire = QuestionnaireFactory.createBusinessQuestionnaire();
    this.initForm();
    this.setStartValues();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  private initForm(): void {
    this.questionnaireForms = this.fb.group({
      platform: ['', Validators.required],
      application: ['', Validators.required],
      therapie: ['', Validators.required],
      data: ['', Validators.required],
      infrastructur: ['', Validators.required],
    });
  }

  private setStartValues(): void {
    this.questionnaireForms.setValue({
      platform: this.questionnaire[0].answers[0].answer,
      application: this.questionnaire[1].answers[0].answer,
      therapie: this.questionnaire[2].answers[0].answer,
      data: this.questionnaire[3].answers[0].answer,
      infrastructur: this.questionnaire[3].answers[0].answer,
    });
  }

  submitForm(): void {
    this.router.navigate(['trust-build-canvas'], {
      state: { updatedData: this.questionnaireForms.value },
    });
  }
}
