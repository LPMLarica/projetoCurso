import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { ActivatedRoute } from '../../../../../../@angular/router';
@Component({
    selector: 'app-hospitais',
    templateUrl: './hospitais.component.html',
    styleUrls: ['./hospitais.component.css']
})
export class HospitaisComponent implements OnInit {
    hospitais: any[] = [];

    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const pacienteId = +this.route.parent?.snapshot.paramMap.get('id')!;
        this.pacienteService.getHospitais(pacienteId).subscribe((data) => {
            this.hospitais = data;
        });
    }
}
