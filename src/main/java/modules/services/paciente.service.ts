import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    private apiUrl = 'http://localhost:8080/api/pacientes'; // URL da API

    constructor(private http: HttpClient) {}

    // Envia o cadastro do paciente para o backend
    cadastrarPaciente(paciente: any): Observable<any> {
        return this.http.paciente<any>(this.apiUrl, paciente);
    }
}
