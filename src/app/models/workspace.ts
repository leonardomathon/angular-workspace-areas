export type Workspaces = Workspace[];

export type Workspace = {
    name: string;
    route: string;
    isClosable: boolean;
    isActive: boolean;
}