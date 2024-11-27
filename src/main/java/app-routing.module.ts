import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroPacienteComponent } from './modules/components/cadastro-paciente/cadastro-paciente.component';
import { PacienteDetalhesComponent } from './modules/components/paciente-detalhes/paciente-detalhes.component';
import { HospitaisComponent } from './modules/components/hospitais/hospitais.component';
import { ConsultasComponent } from './modules/components/consultas/consultas.component';
import { ExamesComponent } from './modules/components/exames/exames.component';

const routes: ({ path: string; pathMatch: string; redirectTo: string } | {
    path: string;
    component: CadastroPacienteComponent
} | { path: string; component: PacienteDetalhesComponent } | { path: string; component: HospitaisComponent } | {
    path: string;
    component: ConsultasComponent
} | { path: string; component: ExamesComponent })[] = [
    { path: '', redirectTo: '/cadastro-paciente', pathMatch: 'full' }, // Redireciona para a página de cadastro por padrão
    { path: 'cadastro-paciente', component: CadastroPacienteComponent }, // Página de cadastro de pacientes
    { path: 'paciente/:id', component: PacienteDetalhesComponent }, // Detalhes de um paciente específico
    { path: 'hospitais/:pacienteId', component: HospitaisComponent }, // Lista de hospitais próximos para um paciente
    { path: 'consultas/:pacienteId', component: ConsultasComponent }, // Consultas agendadas para um paciente
    { path: 'exames/:pacienteId', component: ExamesComponent } // Resultados de exames de um paciente
];

let RouterModule;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}