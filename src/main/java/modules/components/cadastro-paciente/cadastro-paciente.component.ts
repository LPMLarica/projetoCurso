import {Component, OnInit} from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute } from '../../../../../../@angular/router';
import { Paciente } from 'paciente/paciente.model.ts';

class Router {
    navigate(strings: string[]) {

    }
}

@Component({
    selector: 'app-cadastro-paciente',
    templateUrl: './cadastro-paciente.component.html',
    styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {
    pacientes: Paciente[] = []; // Array de pacientes

    constructor(private pacienteService: PacienteService) {}

    ngOnInit(): void {
        this.getPacientes();
    }

    // Método para buscar todos os pacientes
    getPacientes(): void {
        this.pacienteService.getPacientes().subscribe((data: Paciente[]) => {
            this.pacientes = data;
            console.log('Pacientes:', this.pacientes);
        });
    }

    // Exemplo de como acessar o pacienteId
    logPacienteIds(): void {
        this.pacientes.forEach(paciente => {
            console.log('Paciente ID:', paciente.pacienteId);
        });
    }
}

function cadastrarPaciente() {


        if (!this.paciente.nome || !this.paciente.cpf || !this.paciente.email) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Envia os dados para o serviço
        this.pacienteService.cadastrarPaciente(this.paciente).subscribe({
            next: (response) => {
                alert('Paciente cadastrado com sucesso!');
                // Redireciona para a página de detalhes do paciente
                this.router.navigate([`/paciente/${response.id}`]);
            },
            error: (err) => {
                console.error('Erro ao cadastrar paciente:', err);
                alert('Ocorreu um erro ao cadastrar o paciente. Tente novamente.');
            }
        });

}