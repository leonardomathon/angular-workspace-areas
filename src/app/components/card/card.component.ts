import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { WorkspaceService } from '../../services/workspace.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string;
  @Input() route: string;
  @Input() isClosable: boolean;
  @Input() isActive: boolean;

  constructor(private workspaceService: WorkspaceService) {  }

  public onClick = () => {
    this.workspaceService.activateWorkspace(this.route);
  }

  public onClose = () => {
    this.workspaceService.closeWorkspace(this.route);
  }
}
