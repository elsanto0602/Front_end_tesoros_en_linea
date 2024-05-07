import { PATH } from "../core/enum/path.enum";
import { MenuInterface } from "../core/interface/menu.interface";

export const MenuRoutes : MenuInterface[] = [
    {
        path:PATH.HOME,
        title:'Home',
        icon:'',
        classCss:'',
        subMenu: []
    },
    {
        path:PATH.CREAR_SUBASTA,
        title:'Crear Subasta',
        icon:'',
        classCss:'',
        subMenu: []
    },
    {
        path:PATH.LOGIN,
        title:'Iniciar Sesión',
        icon:'',
        classCss:'',
        subMenu: []
    },
    {
        path:PATH.REGISTRARSE,
        title:'Registrarse',
        icon:'',
        classCss:'',
        subMenu: []
    },
]