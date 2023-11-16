import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WorkspaceService } from './services/workspace.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private workspaceService: WorkspaceService ) { }

  ngOnInit(): void {
    // const activeWorkspace = this.workspaceService.getActiveWorkspace();
    // this.router.navigateByUrl(activeWorkspace.route);
  }
}
