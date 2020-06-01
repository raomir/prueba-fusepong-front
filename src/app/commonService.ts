import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CommonService {
    formatearNumero(num, sepDecimal, separador, cantDecimales, peso = true) {
        if (!isNaN(num)) {
            num += '';
            const splitStr = num.split('.');
            let splitLeft = splitStr[0];
            const splitRight = splitStr.length > 1 ? sepDecimal + splitStr[1].slice(0, cantDecimales) : '';
            const regx = /(\d+)(\d{3})/;

            //Aplicar reemplazo cuando exista un caracter. Si se envia vacio este genera un bucle infinito.
            if(separador != null && separador.trim().length >  0){
                while (regx.test(splitLeft)) {
                    splitLeft = splitLeft.replace(regx, '$1' + separador + '$2');
                }
            }
            
            if (peso) {
                return '$ ' + splitLeft + splitRight;
            } else {
                return splitLeft + splitRight;
            }
        }
        return '';
    }
}