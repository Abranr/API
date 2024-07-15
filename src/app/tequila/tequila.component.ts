import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { TequilaService } from './Services/tequila.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule],
  providers: [TequilaService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css'
})
export class TequilaComponent implements OnInit {
  cocteles: any[] = [];

  constructor(private coctelesServicio: TequilaService) {}

  ngOnInit(): void {
    this.coctelesServicio.obtenerCocteles().subscribe(datos => {
      this.cocteles = datos.drinks;
    });
  }
}
