import { Component, OnInit } from '@angular/core';
import { CoctelesService } from '../Services/cocteles.service';
import { HttpClientModule } from '@angular/common/http';
import { MargaritaService } from './Services/margarita.service';

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [HttpClientModule],
  providers: [MargaritaService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css'
})
export class MargaritaComponent implements OnInit {
  cocteles: any[] = [];

  constructor(private coctelesServicio: MargaritaService) {}

  ngOnInit(): void {
    this.coctelesServicio.obtenerCocteles().subscribe(datos => {
      this.cocteles = datos.drinks;
    });
  }
}
