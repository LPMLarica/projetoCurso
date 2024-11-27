import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { AppComponent } from './AppComponent';
import { CadastroPacienteComponent } from './components/cadastro-paciente/cadastro-paciente.component';
import { PacienteDetalhesComponent } from './components/paciente-detalhes/paciente-detalhes.component';
import { HospitaisComponent } from './components/hospitais/hospitais.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ExamesComponent } from './components/exames/exames.component';

// Angular Material Modules
import { MatFormFieldModule } from '../../../../@angular/material/form-field';
import { MatInputModule } from '../../../../@angular/material/input';
import { MatButtonModule } from '../../../../@angular/material/button';
import { MatListModule } from '../../../../@angular/material/list';
import { MatSidenavModule } from '../../../../@angular/material/sidenav';

@NgModule({
    declarations: [
        AppComponent,
        CadastroPacienteComponent,
        PacienteDetalhesComponent,
        HospitaisComponent,
        ConsultasComponent,
        ExamesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
