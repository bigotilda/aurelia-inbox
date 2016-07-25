import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

export class Users {
    static inject() { return [HttpClient]; }

    constructor(http) {
        this.http = http;
        this.heading = 'Github Users';
        this.users = [];

        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://api.github.com/');
        });
    }

    activate() {
        return this.http.fetch('users?since=2525953')
            .then(response => response.json())
            .then(users => this.users = users);
    }
}