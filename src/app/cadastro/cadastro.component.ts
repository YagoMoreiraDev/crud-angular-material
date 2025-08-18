import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from "@angular/material/icon";
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastro',
  imports: [
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon
],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cliente: Cliente = Cliente.newCliente();

  constructor(private service: ClienteService) { 
  }

  salvar() {
    this.service.salvar(this.cliente);
  }

}
