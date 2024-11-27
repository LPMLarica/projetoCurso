import { Component } from '@angular/core';
import { PacienteService } from './services/paciente.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    paciente = {
        nome: 'João Silva',
        cpf: '12345678900',
        email: 'joao@gmail.com',
        telefone: '99999-9999'
    };

    constructor(private pacienteService: PacienteService) {}

    cadastrar() {
        // Chama o método e se inscreve para processar a resposta
        this.pacienteService.cadastrarPaciente(this.paciente).subscribe({
            next: (res) => console.log('Paciente cadastrado:', res),
            error: (err) => console.error('Erro ao cadastrar paciente:', err)
        });
    }
}
