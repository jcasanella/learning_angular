import { Component } from '@angular/core';

@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar: boolean = true;
    
    frase: any = {
        mensaje: 'Esto es un mensaje guay!!!',
        autor: 'yo mismo'
    };

    personajes: string[] = [ 'batman', 'joker', 'penguin' ];
}