export class Inbox {

    constructor() {
        this.messages = [
            {
                key: '1',
                subject: 'Pied Piper beta invite',
                body: 'You can totally have one of my invites. In A.D. 2101, war was beginning. Captain: What happen? Mechanic: Somebody set us up the bomb.',
                from: 'Dinesh',
                active: true
            },
            {
                key: '2',
                subject: 'Enlarge your brain by 3 inches',
                body: 'With this pills unapproved by the FDA! You have no chance to survive make your time.',
                from: 'LegitimateBusinessman'
            },
            {
                key: '3',
                subject: 'FW: Hot internet garbage',
                body: 'something something something memes. Takeoff every ZIG for great justice!',
                from: 'Redditor'
            },
            {
                key: '4',
                subject: 'Pure junk',
                body: 'Uhhhhhhh All your base are belong to us.',
                from: 'SpamArtist'
            }
        ];

        this.showMessage = (msg) => {
            this.messages.forEach( m => {
                m.active = m.key === msg.key;
            });
            console.log(this.messages);
        }
    }

    get msgBody() {
        return this.messages.filter( m => m.active)[0].body;
    }

    activate() {
        // would put some async stuff here
    }
}