import { Injectable } from '@angular/core';
import { Workspace, Workspaces } from '../models/workspace';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  private workspaces: Workspaces;

  constructor() { 
    // TODO: on init read workspaces stored in localstorage
  }

  public getWorkspaces: () => Workspaces = () => {
    return this.workspaces;
  }

  public openWorkspace = (workspace: Workspace) => {
    this.workspaces.push(workspace);

    // TODO: update localstorage
  }

  public closeWorkspace = (id: string) => {
    this.workspaces = this.workspaces.filter(item => item.id !== id);

    // TODO: update localstorage
  }
}
