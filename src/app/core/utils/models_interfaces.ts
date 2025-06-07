export type LatestNewsItemType = 'normal' | 'normal-b' | 'normal-p' | 'normal-p-b' | 'title' | 'unorder-list' | 'sub-title' | 'button';

export class LatestNewsItem {
    constructor(
        public type: LatestNewsItemType = 'normal',
        public text: string = '',
        public paddingLeft: string = '',
        public list: Array<string> = []
    ) { }
}

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
        'normal-b', '34119 Kassel',
        '20px'
    )
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