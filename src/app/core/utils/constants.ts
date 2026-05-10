import { LatestNewsItem } from "./models_interfaces";

export const transportList = [
    new LatestNewsItem(
        'title', 'Wir ziehen um!',
        ''
    ),
    new LatestNewsItem(
        'normal-p-b', 'Liebe Patientinnen und Patienten,',
        ''
    ),
    new LatestNewsItem(
        'normal-p', 'wir freuen uns, Ihnen mitteilen zu können, dass wir unsere Praxis ab dem 04. August 2025 in neue Räumlichkeiten verlegen – modern, barrierefrei und noch komfortabler für Sie!',
        ''
    ),
    new LatestNewsItem(
        'sub-title', 'Neue Adresse ab 04.08.2025:',
        ''
    ),
    new LatestNewsItem(
        'normal-b', 'Augenarztpraxis Naema',
        '20px'
    ),
    new LatestNewsItem(
        'normal-b', 'Goethestraße 27',
        '20px'
    ),
    new LatestNewsItem(
        'normal-p-b', '34119 Kassel',
        '20px'
    ),
    new LatestNewsItem(
        'normal-p-b', 'Unsere Telefonnummer bleibt unverändert!',
        ''
    ),
    new LatestNewsItem(
        'normal', 'Sie erreichen uns weiterhin wie gewohnt.',
        ''
    ),
    new LatestNewsItem(
        'normal-p', 'So finden Sie uns bequem mit den öffentlichen Verkehrsmitteln: <span class="x-font-semiBold">Straßenbahnlinie 7, Richtung Bahnhof Wilhelmshöhe</span>',
        ''
    ),
    new LatestNewsItem(
        'normal-p', 'Alle bestehenden Termine bleiben gültig – es ändert sich nur die Adresse.',
        ''
    ),
    new LatestNewsItem(
        'normal', 'Wir freuen uns darauf, Sie in unserer neuen Praxis willkommen zu heißen!',
        ''
    ),
];

export const praxisClose = [
    new LatestNewsItem(
        'normal-p-b', 'Liebe Patient:innen,',
        ''
    ),
    new LatestNewsItem(
        'normal-p', 'am 30.05.2025 bleibt unsere Praxis geschlossen. Den augenärztlichen Notdienst erfragen Sie während diesem Tag bitte unter Tel: 116 117.',
        ''
    ),
    new LatestNewsItem(
        'normal-p', 'Gerne sind wir wieder ab Montag 02.06.2025 für Sie erreichbar und freuen uns auf Sie.',
        ''
    ),
    new LatestNewsItem(
        'normal', 'Liebe Grüße',
        ''
    ),
    new LatestNewsItem(
        'normal', 'Ihr Praxis-Team',
        ''
    )
];


const augenarztPraxisNajjar: Array<LatestNewsItem> = [
    new LatestNewsItem(
        'normal-b', 'ÜBAG Najjar - Naema',
        '20px'
    ),
    new LatestNewsItem(
        'normal-b', 'Augenarztpraxis Najjar',
        '20px'
    ),
    new LatestNewsItem(
        'normal-b', 'Louis-Peter-Straße 4-8',
        '20px'
    ),
    new LatestNewsItem(
        'normal-b', '34497 Korbach',
        '20px'
    ),
    new LatestNewsItem(
        'normal-p-b', 'Tel: <a href="tel:+49563163063">05631-63063</a>',
        '20px'
    )
];

const AugenzentrumBadWildungen: Array<LatestNewsItem> = [
    new LatestNewsItem(
        'normal-b', 'Augenzentrum Bad Wildungen',
        '20px'
    ),
    new LatestNewsItem(
        'normal-b', 'Asklepios Gesundheitszentrum',
        '20px'
    ),
    new LatestNewsItem(
        'normal-b', 'Laustraße 30, 3. Stock',
        '20px'
    ),
    new LatestNewsItem(
        'normal-b', '34537 Bad Wildungen',
        '20px'
    ),
    new LatestNewsItem(
        'normal-b', 'Tel: <a href="tel:+4956214166">05621-4166</a>',
        '20px'
    ),
    new LatestNewsItem(
        'normal-p-b', 'Fax: <a href="fax:+4956211700">05621-1700</a>',
        '20px'
    )
];

const dringendeNotfaelle: LatestNewsItem = new LatestNewsItem(
        'normal-p', 'In dringenden Notfällen können Sie sich auch an den Ärztlichen Bereitschaftsdienst unter der Tel. Nr.: <span class="x-font-semiBold">116117</span> wenden.',
        ''
    );

export const AugustUrlaub2025: LatestNewsItem = 
    new LatestNewsItem(
        'normal-p', 'im Zeitraum von <span class="x-font-semiBold">27.10.2025</span> bis einschließlich <span class="x-font-semiBold">31.10.2025</span> bleibt unsere Praxis aufgrund von Urlaub geschlossen.',
        ''
    );

export const EasterUrlaub2026: LatestNewsItem = 
    new LatestNewsItem(
        'normal-p', 'im Zeitraum von <span class="x-font-semiBold">06.04.2026</span> bis einschließlich <span class="x-font-semiBold">10.04.2026</span> bleibt unsere Praxis aufgrund von Urlaub geschlossen.',
        ''
    );

export const praxisUrlaub = [
    new LatestNewsItem(
        'normal-p-b', 'Liebe Patient:innen,',
        ''
    ),
    EasterUrlaub2026,
    new LatestNewsItem(
        'sub-title', 'Unsere Vertretung:',
        ''
    ),
    ...AugenzentrumBadWildungen,
    dringendeNotfaelle,
    new LatestNewsItem(
        'normal', 'Terminabgabe können Sie uns weiter kontaktieren:',
        ''
    ),
    new LatestNewsItem(
        'normal', 'Email: <a href="mailto:info@augenpraxis-kassel.de">info@augenpraxis-kassel.de</a>',
        ''
    ),
    new LatestNewsItem(
        'normal-p', 'Oder <a href="https://www.augenpraxis-kassel.de" target="_blank">www.augenpraxis-kassel.de</a>',
        ''
    ),
    new LatestNewsItem(
        'normal', 'Wir bitten um Ihr Verständnis.',
        ''
    ),
    new LatestNewsItem(
        'normal', 'Ihr Praxis-Team',
        ''
    )
];


export const stelleAnzeige = [
    new LatestNewsItem(
        'title', 'Stellenanzeige: MFA und Optiker (m/w/d) für Augenarztpraxis in Kassel – Vorderer Westen:',
        ''
    ),
    new LatestNewsItem(
        'normal-p', 'Für unsere moderne Augenarztpraxis im beliebten Stadtteil Vorderer Westen in <span class="x-font-semiBold">Kassel</span> suchen wir ab sofort engagierte Unterstützung:',
        ''
    ),
    new LatestNewsItem(
        'normal-p-b', 'Medizinische Fachangestellte (MFA) (m/w/d)',
        ''
    ),
    new LatestNewsItem(
        'normal-p-b', 'Augenoptiker (m/w/d)',
        ''
    ),
    new LatestNewsItem(
        'sub-title', 'Wir bieten:',
        ''
    ),
    new LatestNewsItem(
        'unorder-list', '',
        '', [
            'Attraktive und leistungsgerechte Vergütung',
            'Angenehmes Arbeitsumfeld in einem freundlichen, kollegialen Team',
            'Moderne Praxisausstattung',
            'Strukturierte Einarbeitung',
            'Langfristige Perspektive'
        ]
    ),
    new LatestNewsItem(
        'sub-title', 'Ihre Aufgaben (je nach Qualifikation):',
        ''
    ),
    new LatestNewsItem(
        'unorder-list', '',
        '', [
            'Betreuung und Beratung unserer Patientinnen und Patienten',
            'Assistenz bei Untersuchungen und Behandlungen',
            'Durchführung von Voruntersuchungen',
            'Organisation von Praxisabläufen und Terminmanagement',
            'Unterstützung im Bereich Augenoptik (z. B. Sehtests, Anpassungen)'
        ]
    ),
    new LatestNewsItem(
        'sub-title', 'Ihr Profil:',
        ''
    ),
    new LatestNewsItem(
        'unorder-list', '',
        '', [
            'Abgeschlossene Ausbildung als MFA oder Augenoptiker (m/w/d)',
            'Freundliches, professionelles Auftreten',
            'Teamfähigkeit und Zuverlässigkeit',
            'Selbstständige und sorgfältige Arbeitsweise'
        ]
    ),
    new LatestNewsItem(
        'normal', '<span class="x-font-semiBold"><span class="x-font-semiBold">Arbeitsort:</span></span> Kassel - Vorderer Westen',
        ''
    ),
    new LatestNewsItem(
        'normal-p', '<span class="x-font-semiBold"><span class="x-font-semiBold">Start:</span></span> Ab sofort',
        ''
    ),
    new LatestNewsItem(
        'normal', '<span class="x-font-semiBold"><span class="x-font-semiBold">Bewerbung:</span></span>',
        ''
    ),
    new LatestNewsItem(
        'normal-p', 'Bitte senden Sie Ihre Bewerbung per E-Mail an: <a href="mailto:bewerbung@augenpraxis-kassel.de">bewerbung@augenpraxis-kassel.de</a>',
        ''
    ),
    new LatestNewsItem(
        'normal', 'Wir freuen uns darauf, Sie kennenzulernen!',
        ''
    )
];


// Stellenanzeige: MFA und Optiker (m/w/d) für Augenarztpraxis in Kassel – Vorderer Westen

// Für unsere moderne Augenarztpraxis im beliebten Stadtteil Vorderer Westen in Kassel suchen wir ab sofort engagierte Unterstützung:

// Medizinische Fachangestellte (MFA) (m/w/d)
// Augenoptiker (m/w/d)

// Wir bieten:

// * Attraktive und leistungsgerechte Vergütung
// * Angenehmes Arbeitsumfeld in einem freundlichen, kollegialen Team
// * Moderne Praxisausstattung
// * Strukturierte Einarbeitung
// * Langfristige Perspektive

// Ihre Aufgaben (je nach Qualifikation):

// * Betreuung und Beratung unserer Patientinnen und Patienten
// * Assistenz bei Untersuchungen und Behandlungen
// * Durchführung von Voruntersuchungen
// * Organisation von Praxisabläufen und Terminmanagement
// * Unterstützung im Bereich Augenoptik (z. B. Sehtests, Anpassungen)

// Ihr Profil:

// * Abgeschlossene Ausbildung als MFA oder Augenoptiker (m/w/d)
// * Freundliches, professionelles Auftreten
// * Teamfähigkeit und Zuverlässigkeit
// * Selbstständige und sorgfältige Arbeitsweise

// Arbeitsort: Kassel – Vorderer Westen
// Start: Ab sofort

// Bewerbung:
// Bitte senden Sie Ihre Bewerbung per E-Mail an:
// bewerbung[at]augenpraxis-kassel.de

// Wir freuen uns darauf, Sie kennenzulernen!