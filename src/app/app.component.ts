  import { Component } from '@angular/core';
  import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';


  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [HttpClientModule, RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {

  }
