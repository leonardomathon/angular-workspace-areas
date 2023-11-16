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
    this.loadWorkspaces();
  }

  public getWorkspacesObservable: () => BehaviorSubject<Workspaces> = () => {
    return this.workspaces;
  }

  public openWorkspace = (name: string, route: string, isClosable: boolean) => {
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
    
    // Update local storage
    this.saveWorkspaces();
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

    // Update local storage
    this.saveWorkspaces();
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

    // Update local storage
    this.saveWorkspaces();
  }

  private loadWorkspaces = () => {
    const data = localStorage.getItem("workspaces");

    // If nothing in localstorage, save default workspace
    if (!data) {
      this.saveWorkspaces();
    }

    // Set all workspaces to inactive, except for the current route
    const workspaceObject = (JSON.parse(data as string) as Workspaces).map(item => {
      item.isActive = item.route === this.router.routerState.snapshot.url;
      return item
    });  

    this.workspaces.next(workspaceObject);
  }

  private saveWorkspaces = () => {
    localStorage.setItem("workspaces", JSON.stringify(this.workspaces.value));
  }
}
