import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute } from '../../../../../../@angular/router';

@Component({
    selector: 'app-consultas',
    templateUrl: './consultas.component.html',
    styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
    consultas: any[] = [];

    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const pacienteId = +this.route.parent?.snapshot.paramMap.get('id')!;
        this.pacienteService.getConsultas(pacienteId).pacienteId((data) => {
            this.consultas = data;
        });
    }
}
