import { IQuestion } from '../interfaces/interfaces';

export class QuestionnaireFactory {
  public static createBusinessQuestionnaire(): IQuestion[] {
    return [
      {
        category: 'Plattform-Betreiber',
        question: 'Welche Mission hat das Unternehmen',
        answers: [
          {
            answer:
              'z.B. Online-Psychotherapie für GKV-Versicherte mit großer Nachhaltigkeit',
          },
        ],
      },
      {
        category: 'Applikation',
        question: 'In welcher Branche sind Sie tätig?',
        answers: [
          {
            answer: 'Medizintechnik',
          },
          {
            answer: 'Biotech',
          },
          {
            answer: 'Smart Home',
          },
          {
            answer: 'Pharma',
          },
          {
            answer: 'Maschinenbau',
          },
          {
            answer: 'Automobilbau',
          },
          {
            answer: 'Sonstige Branche',
          },
        ],
      },
      {
        category: 'Gesundheit / Therapie',
        question: 'Welche Art von Kundenbeziehungen hat Ihr Geschäft?',
        answers: [
          {
            answer: 'B2B (B2B2B)',
          },
          {
            answer: 'B2C (B2B2C)',
          },
          {
            answer: 'C2B (C2B2B)',
          },
          {
            answer: 'C2C (C2B2C)',
          },
        ],
      },
      {
        category: 'Daten',
        question: 'Wo ist Ihr Geschäft tätig?',
        answers: [
          {
            answer: 'National',
          },
          {
            answer: 'Europa (EU, DACH)',
          },
          {
            answer: 'USA, China',
          },
        ],
      },
      {
        category: 'Infrastruktur',
        question: 'Was für eine Plattformart betreiben Sie?',
        answers: [
          {
            answer: 'Transaktions-zentriert',
          },
          {
            answer: 'Datenzentriert',
          },
          {
            answer: 'Innovations-zentriert',
          },
        ],
      },
    ];
  }
}
