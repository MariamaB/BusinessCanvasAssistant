import { ITrustBuildCanvas } from '../interfaces/interfaces';

export class TrustBuildCanvasFactory {
  public static createTrustBuildCanvas(): ITrustBuildCanvas {
    return {
      categories: [
        {
          categoryTitle: 'Plattform-Betreiber',
          sections: [
            {
              section: 'Mission',
            },
            {
              section: 'Werte',
            },
            {
              section: 'Teammitglieder',
            },
            {
              section: 'Organisationsform',
            },
            {
              section: 'Sitz ',
            },
            {
              section: 'Referenzprojekte',
            },
            {
              section: 'Zertifizierungen, Qualitätsauszeichnungen',
            },
            {
              section: 'Bewertungen von Dritten',
            },
            {
              section: 'Partner',
            },
          ],
        },
        {
          categoryTitle: 'Applikation',
          sections: [
            {
              section: 'Identifikation / Registrierung',
            },
            {
              section: 'Matching - Transparenz des Verfahrens',
            },
            {
              section: 'Transaktion – Überblick Nutzungsprozess',
            },
            {
              section: 'Nutzungs-/Kaufanreize / Preispolitik',
            },
            {
              section: 'Interaktion / Kommunikation',
            },
          ],
        },
        {
          categoryTitle: 'Gesundheit / Therapie',
          sections: [
            {
              section: 'Etablierte Methode',
            },
            {
              section: 'Wissenschaftliche Studien',
            },
            {
              section: 'Expertenmeinungen',
            },
          ],
        },
        {
          categoryTitle: 'Daten',
          sections: [
            {
              section: 'Inhalt / Beiträge',
            },
            {
              section: 'Datenschutz / Datensicherheit',
            },
            {
              section: 'Datenspeicher',
            },
            {
              section: 'Transfer / Datenexport',
            },
            {
              section: 'Transparenz der Datennutzung',
            },
          ],
        },
        {
          categoryTitle: 'Infrastruktur',
          sections: [
            {
              section: 'Ort des Daten-Server',
            },
            {
              section: 'Sicherheit/Schutz vor Hacker-Attacken',
            },
            {
              section: 'Infrastruktur-Konnektivität / Standards',
            },
          ],
        },
      ],
    };
  }
}
