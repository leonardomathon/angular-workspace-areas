import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { WorkspaceService } from '../../services/workspace.service';
import { Workspaces } from '../../models/workspace';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public workspaces: Workspaces;

  constructor(private workspaceService: WorkspaceService) {}

  ngOnInit(): void {
    this.workspaceService.getWorkspaces().subscribe(workspaces => {
      this.workspaces = workspaces;
    })
  }
}
