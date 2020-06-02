import { Component, OnInit, Input } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { CommonService } from '../commonService';

@Component({
  selector: 'app-app-datatable',
  templateUrl: './app-datatable.component.html',
  styleUrls: ['./app-datatable.component.styl']
})
export class AppDatatableComponent implements OnInit {

  @Input() id;
  
  public datos = [];

  constructor(
    private _appService: AppServiceService,
    public _commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.cargarTabla()
  }

  cargarTabla() {
    this._appService.obtenerProductos(this.id).subscribe(
      (res: any) => {
        console.log("Respuesta de los datos de la tabla")
        console.log(res)
        this.datos = res;
      })
  }

}
