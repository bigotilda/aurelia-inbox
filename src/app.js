export class App {
    configureRouter(config, router){
        config.title = 'Aurelia';
        config.map([
            { route: ['','welcome'],  name: 'welcome',  moduleId: './welcome',  nav: true, title:'Welcome' },
            { route: 'users',         name: 'users',    moduleId: './users',    nav: true, title:'Github Users' },
            { route: 'inbox',         name: 'inbox',    moduleId: './inbox',    nav: true, title:'Inbox' }
        ]);

        this.router = router;
    }
}