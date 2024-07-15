import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VodkaComponent } from './vodka/vodka.component';
import { WineComponent } from './wine/wine.component';
import { TequilaComponent } from './tequila/tequila.component';
import { MargaritaComponent } from './margarita/margarita.component';

export const routes: Routes = [
  {
    path: '',
    component: MargaritaComponent,
  },
  {
    path: 'vodka',
    component: VodkaComponent,
  },
  {
    path: 'wine',
    component: WineComponent,
  },
  {
    path:'tequila',
    component: TequilaComponent,
  },
  {
    path: 'margarita',
    component: MargaritaComponent,
  },
];
