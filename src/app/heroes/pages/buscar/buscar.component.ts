import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  termino: string = '';
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService){}
  
  buscando(){
    this.heroesService.getHeroes().subscribe( heroes => this.heroes = heroes);
  }
}
