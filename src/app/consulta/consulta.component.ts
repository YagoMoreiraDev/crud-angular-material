import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../../model/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule
  ],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {
  
  listaClientes: Cliente[]= [];
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email'];

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
    console.log('ConsultaComponent initialized');
    this.listaClientes = this.service.obterClientes();
  }
}
