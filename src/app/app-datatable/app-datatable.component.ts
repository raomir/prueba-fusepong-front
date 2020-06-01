import { Component, OnInit, Input } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-app-datatable',
  templateUrl: './app-datatable.component.html',
  styleUrls: ['./app-datatable.component.styl']
})
export class AppDatatableComponent implements OnInit {

  @Input() id;
  
  public datos = [];

  constructor(private _appService: AppServiceService) { }

  ngOnInit(): void {
    this.cargarTabla()
  }

  cargarTabla() {
    this._appService.obtenerProductos(this.id).subscribe(
      (res: any) => {
        this.datos = res;
      })
  }

}
