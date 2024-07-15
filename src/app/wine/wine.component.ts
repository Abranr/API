import { Component, OnInit } from '@angular/core';
import { CoctelesService } from '../Services/cocteles.service';
import { HttpClientModule } from '@angular/common/http';
import { WineService } from './Services/wine.service';

@Component({
  selector: 'app-wine',
  standalone: true,
  imports: [HttpClientModule],
  providers: [WineService],
  templateUrl: './wine.component.html',
  styleUrl: './wine.component.css'
})
export class WineComponent implements OnInit {
  cocteles: any[] = [];

  constructor(private coctelesServicio: WineService) {}

  ngOnInit(): void {
    this.coctelesServicio.obtenerCocteles().subscribe(datos => {
      this.cocteles = datos.drinks;
    });
  }
}
