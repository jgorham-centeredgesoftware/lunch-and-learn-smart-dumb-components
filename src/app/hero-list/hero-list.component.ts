import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent  {

  @Input()
  heroes: Hero[];

  @Output()
  onDeleteHero = new EventEmitter<Hero>();

  constructor() { }

  delete(hero: Hero){
    this.onDeleteHero.emit(hero);
  }

}
