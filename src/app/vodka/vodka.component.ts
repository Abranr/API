import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VodkaService } from './Services/vodka.service';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [HttpClientModule],
  providers: [VodkaService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css'
})
export class VodkaComponent implements OnInit {
  cocteles: any[] = [];

  constructor(private coctelesServicio: VodkaService) {}

  ngOnInit(): void {
    this.coctelesServicio.obtenerCocteles().subscribe(datos => {
      this.cocteles = datos.drinks;
    });
  }
}
