import { Component, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { AppServiceService } from './app-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})
export class AppComponent {
	
	@ViewChild('inputFile')
	inputFile: ElementRef

	public productos = [];
	public marcas = [];
	public categorias = [];
	public categoria_producto = [];
	public mostrar = false;
	public idMarca = 0;
	public listaMarcas = [];

	constructor(
		private _appService: AppServiceService,
	) { }

	ngOnInit(){
		this.obtenerMarca();
	}

	cargarTabla(id){
		this.mostrar = false;
		this.idMarca = id;
		setTimeout(()=>{
            this.mostrar = true;
        },200);
	}

	obtenerMarca(){
		this._appService.listarMarca().subscribe(
			(res: any) => {
				this.listaMarcas = res
		})
	}

	onFileChange(evt: any) {
		/* wire up file reader */
		let target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
			const nombreHoja = wb.SheetNames;

			/* save data */
			for (let index = 0; index < nombreHoja.length; index++) {
				const element = nombreHoja[index];
				this.productos = (XLSX.utils.sheet_to_json(wb.Sheets[element]));
			}
		};
		reader.readAsBinaryString(target.files[0]);
		target = null;
	}

	guardarExcel() {
		let datos = {
			data: {
				producto: this.productos,
			}
		};
		this.inputFile.nativeElement.value = "";
		console.log(datos)
		this._appService.categorias(datos).subscribe(
			(res: any) => {
				if (res) {
					this.obtenerMarca();
					console.log("Respuesta al guardar correctamente el producto")
					console.log(res)
					alert(res)
				}	
			},
			(error: any) => {
				console.log("Respuesta de error de la consulta de guardar producto")
				console.log(error)
				alert(error.error.text)
			})
	}

	

}