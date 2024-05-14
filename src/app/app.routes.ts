import { Routes } from '@angular/router';
import { PATH } from './core/enum/path.enum';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse/registrarse.component';
import { CrearSubastaComponent } from './pages/crear-subasta/crear-subasta/crear-subasta.component';
import { VerUsuariosComponent } from './pages/ver-usuarios/ver-usuarios.component';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'home',
    children: [
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.REGISTRARSE,
        title: 'Registro',
        component: RegistrarseComponent,
      },
      {
        path: PATH.CREAR_SUBASTA,
        title: 'Crear Subasta',
        component: CrearSubastaComponent,
      },
      
      
    ],
  },
  {
    path: PATH.LOGIN,
    title: 'Login',
    component: LoginComponent,
    children:[
      {
        path: PATH.VER_USUARIOS,
        title: 'Usuarios',
        component: VerUsuariosComponent,
      },
    ]
  },
  
  
];
