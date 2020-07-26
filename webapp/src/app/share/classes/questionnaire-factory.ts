import { IQuestion } from '../interfaces/interfaces';


export class QuestionnaireFactory {
  public static createBusinessQuestionnaire(): IQuestion[] {
    return [
      {
        category: 'business',
        question: 'Welche Art von Stakeholder sind Sie?',
        answers: [
          {
            answer: 'Betreiber / Orchestrator (alleiniger)'
          },
          {
            answer: 'Betreiber / Orchestrator (in Kooperation)',
          },
          {
            answer: 'Anbieter / Produzent'
          },
          {
            answer: 'Dritt-Anbieter / Partner'
          },
          {
            answer: 'Unterstützer / Zulieferer'
          },
          {
            answer: 'Innovationspartner (Ökosystem)'
          },
          {
            answer: 'Investor (Plattform)'
          },
          {
            answer: 'Sonstiger Plattform-Stakeholder'
          },
          {
            answer: 'Traditionelles Geschäftsmodell'
          },
          {
            answer: 'Geschäftsidee'
          }
        ]
      },
      {
        category: 'product',
        question: 'In welcher Branche sind Sie tätig?',
        answers: [
          {
            answer: 'Medizintechnik'
          },
          {
            answer: 'Biotech'
          },
          {
            answer: 'Smart Home'
          },
          {
            answer: 'Pharma'
          },
          {
            answer: 'Maschinenbau'
          },
          {
            answer: 'Automobilbau'
          },
          {
            answer: 'Sonstige Branche'
          }
        ]
      },
      {
        category: 'relationship',
        question: 'Welche Art von Kundenbeziehungen hat Ihr Geschäft?',
        answers: [
          {
            answer: 'B2B (B2B2B)'
          },
          {
            answer: 'B2C (B2B2C)'
          },
          {
            answer: 'C2B (C2B2B)'
          },
          {
            answer: 'C2C (C2B2C)'
          }
        ]
      },
      {
        category: 'partner',
        question: 'Wo ist Ihr Geschäft tätig?',
        answers: [
          {
            answer: 'National'
          },
          {
            answer: 'Europa (EU, DACH)'
          },
          {
            answer: 'USA, China'
          }
        ]
      },
      {
        category: 'platform',
        question: 'Was für eine Plattformart betreiben Sie?',
        answers: [
          {
            answer: 'Transaktions-zentriert'
          },
          {
            answer: 'Datenzentriert'
          },
          {
            answer: 'Innovations-zentriert'
          }
        ]
      },
    ];
  }
}
