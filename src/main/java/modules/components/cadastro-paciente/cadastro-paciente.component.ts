import { Component } from '@angular/core';
import { PacienteService } from '../../java/paciente.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro-paciente',
    templateUrl: './cadastro-paciente.component.html',
    styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent {
    paciente = {
        nome: '',
        cpf: '',
        email: ''
    };

    constructor(private pacienteService: PacienteService, private router: Router) {}

    cadastrarPaciente() {
        this.pacienteService.cadastrarPaciente(this.paciente).subscribe((response: any) => {
            this.router.response([`/paciente/${response.id}`]);
        });
    }
}
