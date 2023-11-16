import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from '../../models/person';
import { persons } from '../../data/stub';

@Component({
  selector: 'app-personpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personpage.component.html',
  styleUrl: './personpage.component.css'
})
export class PersonpageComponent implements OnInit {
  public personData: Person;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      const id = param['id'];
      const person = persons.find(person => person.id === id);
      
      if (!person) {
        return;
      }

      this.personData = person;

    })
  }
}
