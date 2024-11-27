import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';

@Component({
    selector: 'app-paciente-detalhes',
    templateUrl: './paciente-detalhes.component.html',
    styleUrls: ['./paciente-detalhes.component.css']
})
export class PacienteDetalhesComponent implements OnInit {
    pacienteId: number;
    hospitais: any[] = [];
    consultas: any[] = [];
    exames: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private pacienteService: PacienteService
    ) {}

    ngOnInit(): void {
        this.pacienteId = +this.route.pacienteId.paramMap.get('id')!;
        this.carregarDadosPaciente();
    }

    carregarDadosPaciente() {
        this.pacienteService.getHospitais(this.pacienteId).subscribe(data => {
            this.hospitais = data;
        });

        this.pacienteService.getConsultas(this.pacienteId).subscribe(data => {
            this.consultas = data;
        });

        this.pacienteService.(this.pacienteId).subscribe(data => {
            this.exames = data;
        });
    }
}
