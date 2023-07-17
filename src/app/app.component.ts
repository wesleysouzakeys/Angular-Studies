import { Component } from '@angular/core';

// Um decorator define que este arquivo typescript é um componente 
@Component({
  // selector: define o nome da tag no html quando quiser chamar um componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
}
