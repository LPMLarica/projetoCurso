import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroPacienteComponent } from './components/cadastro-paciente/cadastro-paciente.component';
import { PacienteDetalhesComponent } from './components/paciente-detalhes/paciente-detalhes.component';
import { HospitaisComponent } from './components/hospitais/hospitais.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ExamesComponent } from './components/exames/exames.component';

const routes: ({ path: string; pathMatch: string; redirectTo: string } | { path: string; component: any } | {
    path: string;
    component: any;
    children: ({ path: string; component: any } | { path: string; component: any } | { path: string; component: any })[]
})[] = [
    { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
    { path: 'cadastro', component: CadastroPacienteComponent },
    {
        path: 'paciente/:id',
        component: PacienteDetalhesComponent,
        children: [
            { path: 'hospitais', component: HospitaisComponent },
            { path: 'consultas', component: ConsultasComponent },
            { path: 'exames', component: ExamesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
