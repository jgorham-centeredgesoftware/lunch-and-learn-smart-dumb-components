import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Associate } from './associate';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const associates: Associate[] = [
      {
        "id": 1,
        "source": 11,
        "target": 19
      },
      {
        "id": 2,
        "source": 12,
        "target": 18
      },
      {
        "id": 3,
        "source": 13,
        "target": 14
      },
      {
        "id": 4,
        "source": 13,
        "target": 20
      },
      {
        "id": 5,
        "source": 13,
        "target": 12
      },
      {
        "id": 6,
        "source": 13,
        "target": 17
      },
      {
        "id": 7,
        "source": 14,
        "target": 16
      },
      {
        "id": 8,
        "source": 14,
        "target": 15
      },
      {
        "id": 9,
        "source": 14,
        "target": 18
      },
      {
        "id": 10,
        "source": 14,
        "target": 13
      },
      {
        "id": 11,
        "source": 15,
        "target": 18
      },
      {
        "id": 12,
        "source": 15,
        "target": 11
      },
      {
        "id": 13,
        "source": 16,
        "target": 12
      },
      {
        "id": 14,
        "source": 17,
        "target": 15
      },
      {
        "id": 15,
        "source": 17,
        "target": 12
      },
      {
        "id": 16,
        "source": 18,
        "target": 16
      },
      {
        "id": 17,
        "source": 19,
        "target": 12
      },
      {
        "id": 18,
        "source": 19,
        "target": 17
      },
      {
        "id": 19,
        "source": 19,
        "target": 16
      },
      {
        "id": 20,
        "source": 20,
        "target": 18
      },
      {
        "id": 21,
        "source": 20,
        "target": 14
      },
      {
        "id": 22,
        "source": 20,
        "target": 14
      },
      {
        "id": 23,
        "source": 20,
        "target": 19
      }
    ];

    return { heroes, associates };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  
}
