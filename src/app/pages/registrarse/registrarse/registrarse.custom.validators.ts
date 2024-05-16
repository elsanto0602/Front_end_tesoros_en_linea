import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export const contrasenaMatch: ValidatorFn = (
    formGroupControl : AbstractControl<{clave:string; confirmClave:string}>
) : ValidationErrors | null =>{
    const clave = formGroupControl.value.clave;
    const confirmClave = formGroupControl.value.confirmClave;

    return clave !== confirmClave ? {confirmarPassError:true}:null

}

