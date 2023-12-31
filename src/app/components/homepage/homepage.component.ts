import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { persons } from '../../data/stub';
import { Person, Persons } from '../../models/person';
import { WorkspaceService } from '../../services/workspace.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  public personData: Persons;
  constructor(private workspaceService: WorkspaceService) { }

  ngOnInit(): void {   
    // Emulate fetch of actual data
    this.personData = persons;
  }

  public onClick = (person: Person) => {
    this.workspaceService.openWorkspace(person.name, `persons/${person.id}`, true);
  }
}
