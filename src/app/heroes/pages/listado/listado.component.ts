import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private heroesService: HeroesService){}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(resp => console.log(resp));
  }
}
