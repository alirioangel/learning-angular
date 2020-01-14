import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    show = true;
    phrase = {
        message: 'with great power comes great responsibility',
        author: 'Ben Parker',
    };
    characters: string[] = [' Spider-Man', 'Spider-Gwen', 'Spider-Man Noir', 'SP//dr', 'Spider-Ham', 'Spider-Man 2099'];

    handleShow() {
        this.show = !this.show;
    }
}
