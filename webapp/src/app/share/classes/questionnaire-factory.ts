import { IQuestion } from "../interfaces/interfaces";


export class QuestionnaireFactory {
  public static createBusinessQuestionnaire(): IQuestion[] {
    return [
      {
        category: 'participation',
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
        category: 'identification',
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
        category: 'matchmaking',
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
        category: 'transaction',
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
        category: 'incentivization',
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
      {
        category: 'interaction',
        question: 'Welche Art von Rückerstattung bieten Sie an?',
        answers: [
          {
            answer: 'Regelversorgung'
          },
          {
            answer: 'Selbstzahler'
          }
        ]
      },
      {
        category: 'content',
        question: 'Welche Rolle in der Medizintechnik bekleiden Sie?',
        answers: [
          {
            answer: 'Privatperson'
          },
          {
            answer: 'Leistungserbringer'
          },
          {
            answer: 'Kostenerstatter'
          },
          {
            answer: 'Hersteller (PLM)'
          },
          {
            answer: 'Hersteller (OEM)'
          },
          {
            answer: 'Zulieferer'
          },
          {
            answer: 'Inverkehrbringer'
          },
          {
            answer: 'MedTech-Importeur'
          },
          {
            answer: 'MedTech-Händler'
          },
          {
            answer: 'MedTech-Betreiber'
          },
          {
            answer: 'Dienstleister'
          },
          {
            answer: 'Wissenschaft'
          }
        ]
      },
      {
        category: 'privacy',
        question: 'Welche Art von Qualitätsmanagement betreiben Sie?',
        answers: [
          {
            answer: 'Kein QMS'
          },
          {
            answer: 'QMS, nicht zertifiziert'
          },
          {
            answer: 'QMS (ISO 13485)'
          },
          {
            answer: 'QMS (ISO 9001)'
          },
          {
            answer: 'QMS (ISO 27001)'
          }
        ]
      }
    ];
  }
}
