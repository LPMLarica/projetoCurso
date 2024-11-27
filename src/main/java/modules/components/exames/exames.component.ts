import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute } from '../../../../../../@angular/router';

@Component({
    selector: 'app-exames',
    templateUrl: './exames.component.html',
    styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {
    exames: any[] = [];

    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const pacienteId = +this.route.parent?.snapshot.paramMap.get('id')!;
        this.pacienteService.getExames(pacienteId).subscribe((data) => {
            this.exames = data;
        });
    }
}
