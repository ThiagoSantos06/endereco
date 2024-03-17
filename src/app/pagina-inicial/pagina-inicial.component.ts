import { EnderecoService } from './../services/buscar-endereco';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {
  endereco: any
  cep: string = ''

  constructor(private enderecoService: EnderecoService) {}

  buscarEnderecoPorCep(cep: string) {
    this.enderecoService.buscarEnderecoPorCep(cep).subscribe((endereco: any) => {
      this.endereco = endereco;
    });
  }

  filtrarInput(event: any) {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 8) {
      valor = valor.slice(0, 8);
    }
    this.cep = valor.replace(/^(\d{5})(\d{3})$/, '$1-$2');
    input.value = this.cep;
  }
}
