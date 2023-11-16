import { Injectable } from '@angular/core';
import { Workspace, Workspaces } from '../models/workspace';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  private workspaces = new BehaviorSubject<Workspaces>([
    {name: 'Overview', route: '', isClosable: false, isActive: false}
  ])

  constructor(private router: Router) { 
    // TODO: on init read workspaces stored in localstorage
    // TODO: set default workspace to be always open
  }

  public getWorkspaces: () => BehaviorSubject<Workspaces> = () => {
    return this.workspaces;
  }

  public getActiveWorkspace: () => Workspace = () => {
    return this.workspaces.value.filter(item => item.isActive)[0];
  }

  public createWorkspace = (name: string, route: string, isClosable: boolean) => {
    // If workspace already exists, activate it
    const workspace = this.workspaces.value.find(item => item.route === route)

    if (workspace) {
      this.activateWorkspace(workspace.route);
      return;
    }

    // Create a new workspace, add it to state and activate it
    const newWorkspace: Workspace = {
      name, route, isClosable, isActive: false
    }
    this.workspaces.next([...this.workspaces.value, newWorkspace]);
    this.activateWorkspace(newWorkspace.route);
    // TODO: update localstorage
  }

  public activateWorkspace = (route: string) => {
    const workspace = this.workspaces.value.find(item => item.route === route)

    // If route is not found in list of workspaces, do nothing
    if (!workspace) {
      return;
    }

    // Navigate to workspace and make it active
    this.router.navigateByUrl(route);

    // Ensure that there's only 1 active workspace
    if (!this.workspaces.value.find(item => item.route === route)?.isActive) {
      const newWorkspaces = this.workspaces.value.map(item => {
        if (item.route === route) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return item;
      })

      this.workspaces.next(newWorkspaces);
    }
  }

  public closeWorkspace = (route: string) => {
    const workspace = this.workspaces.value.find(item => item.route === route)

    // If route is not found in list of workspaces, do nothing
    if (!workspace) {
      return;
    }

    // Remote workspace from state and goto main page
    this.workspaces.next(this.workspaces.value.filter(item => item.route !== route));
    this.activateWorkspace('');

    // TODO: update localstorage
  }
}
