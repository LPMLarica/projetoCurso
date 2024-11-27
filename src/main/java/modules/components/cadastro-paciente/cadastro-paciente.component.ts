import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute } from '../../../../../../@angular/router';
import { Observable } from 'rxjs';

class Router {
}

@Component({
    selector: 'app-cadastro-paciente',
    templateUrl: './cadastro-paciente.component.html',
    styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent {

    paciente = {
        nome: '',
        cpf: '',
        email: '',
        telefone: ''
    };


    constructor(private pacienteService: PacienteService, private router: Router) {}

    /**
     * Método para enviar os dados do paciente para o backend.
     */
    cadastrarPaciente() {

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
}