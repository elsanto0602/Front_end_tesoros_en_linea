export interface MenuInterface{
    path:string,
    title:string,
    redirectTo?:string,
    pathMatch?:string,
    icon?:string,
    classCss?:string,
    subMenu?:MenuInterface[]
}