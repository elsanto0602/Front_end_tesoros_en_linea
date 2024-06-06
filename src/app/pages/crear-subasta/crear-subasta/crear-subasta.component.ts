import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubastaInterface } from '../../../core/interface/subasta.interface';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { SubastaService } from '../../../services/subasta.service';
import { ErrorService } from '../../../services/error.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crear-subasta',
  standalone: true,
  imports: [ReactiveFormsModule,SpinnerComponent],
  templateUrl: './crear-subasta.component.html',
  styleUrl: './crear-subasta.component.css',
})
export class CrearSubastaComponent {
  imageUrl: string | ArrayBuffer | null = null;
  archivo:any;
  
  cargando: boolean = false;
  private readonly _formBuilder = inject(FormBuilder);

  constructor(
    private _subastaService: SubastaService,
    private router:Router,
    private _errorService:ErrorService
  ){
    
  }

  newSubasta: SubastaInterface = {
    nombre_producto : '',
    foto_producto : '',
    descripcion_producto : '',
    precio_inicial : '',
    precio_minimo : '',
    monto_puja:''
  }

  formGroup = this._formBuilder.nonNullable.group(
    {
      nombre_producto: ['', Validators.required],
      // foto_producto: ['', ],
      descripcion_producto: ['', Validators.required],
      precio_inicial: ['', Validators.required],
      precio_minimo: ['', Validators.required],
      monto_puja: ['', Validators.required]
    },
  );


  crearSubasta(){
    const fd = new FormData();
    
    const nombre_producto = this.nombre_productoField.value;
    const foto_producto = this.imageUrl;
    const descripcion_producto = this.descripcion_productoField.value;
    const precio_inicial = this.precio_inicialField.value;
    const precio_minimo = this.precio_minimoField.value;
    const monto_puja = this.monto_pujaField.value;
    if(this.formGroup.valid){
      this.newSubasta = {
        nombre_producto,
        foto_producto,
        descripcion_producto,
        precio_inicial,
        precio_minimo,
        monto_puja
      }
      this.cargando = true;
      console.log('aaaa-> ',this.newSubasta);
      
      this.enviar(this.newSubasta);

      console.log(typeof(this.monto_pujaField.value));
      // console.log(this.foto_productoField);  
      console.log(foto_producto);
      
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Todos los campos son obligatorios',
        text: 'Ingrese todos los campos',
        confirmButtonColor: '#0d6efd',
      });
      return;
    } 
  }

  enviar(subasta: SubastaInterface) {
    try {
      this._subastaService.crearSubasta(subasta).subscribe({
        next: (v) => {
          this.cargando = false;
          console.log('Se creó la subasta exitosamente');
          Swal.fire({
            icon: 'success',
            title: `Producto ${this.newSubasta.nombre_producto} registrado con éxito`,
            text: '',
            confirmButtonColor: '#0d6efd',
          }).then(()=>{
            this.router.navigate(['/login/ver_subastas'])
          });;
          
        },
        error: (e: HttpErrorResponse) => {
          this.cargando = false;
          this._errorService.msjError(e);
        },
        
      });

    } catch (error) {
      console.error(error);
      console.log('No se pudo hacer peticion http');

      Swal.fire({
        icon: 'error',
        title: `No se pudo registrar el producto ${this.newSubasta.nombre_producto} `,
        text: '',
        confirmButtonColor: '#0d6efd',
      });
    }
  }

  mostrarImagen(event: any) {
    this.archivo = event.target.files[0];
    let vistaPrevia = document.getElementById('vista-previa');
    if (this.archivo) {
      let lector = new FileReader();
      lector.readAsDataURL(this.archivo);
      console.log(lector);
      
      lector.onload = () => {
        this.imageUrl = lector.result as string;
      };
    }
  }

  get nombre_productoField(): FormControl<string> {
    return this.formGroup.controls.nombre_producto;
  }
  // get foto_productoField(): FormControl<string> {
  //   return this.formGroup.controls.foto_producto;
  // }
  get descripcion_productoField(): FormControl<string> {
    return this.formGroup.controls.descripcion_producto;
  }
  get precio_inicialField(): FormControl<string> {
    return this.formGroup.controls.precio_inicial;
  }
  get precio_minimoField(): FormControl<string> {
    return this.formGroup.controls.precio_minimo;
  }
  get monto_pujaField(): FormControl<string> {
    return this.formGroup.controls.precio_minimo;
  }
  
  
}
