import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Paciente} from "../../paciente/paciente.model";

@Injectable({
    providedIn: 'root'
})
export class PacienteService {
    private apiUrl = 'http://localhost:8080/api/pacientes'; // URL base da API para pacientes
    private hospitaisUrl = 'http://localhost:8080/api/hospitais'; // URL base da API para hospitais
    private consultasUrl = 'http://localhost:8080/api/consultas'; // URL base da API para consultas
    private examesUrl = 'http://localhost:8080/api/exames'; // URL base da API para exames

    constructor(private http: HttpClient) {} // Injeta o HttpClient no serviço
    /**
     * Cadastra um novo paciente.
     * @param paciente Dados do paciente a ser cadastrado.
     * @returns Observable com o resultado da operação.
     */
    cadastrarPaciente(paciente: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${this.apiUrl}`, paciente, { headers });
    }

    /**
     * Obtém os detalhes de um paciente pelo ID.
     * @param id ID do paciente.
     * @returns Observable com os dados do paciente.
     */
    obterPaciente(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${id}`);
    }

    /**
     * Atualiza os dados de um paciente.
     * @param id ID do paciente.
     * @param paciente Dados atualizados do paciente.
     * @returns Observable com o resultado da operação.
     */
    atualizarPaciente(id: number, paciente: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${this.apiUrl}/${id}`, paciente, { headers });
    }

    /**
     * Remove um paciente pelo ID.
     * @param id ID do paciente.
     * @returns Observable com o resultado da operação.
     */
    deletarPaciente(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    /**
     * Obtém a lista de todos os pacientes.
     * @returns Observable com a lista de pacientes.
     */
    listarPacientes(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}`);
    }

    // Métodos adicionais para obter hospitais, consultas e exames do paciente

    /**
     * Obtém a lista de hospitais próximos de um paciente.
     * @param pacienteId ID do paciente.
     * @returns Observable com a lista de hospitais.
     */
    getHospitais(pacienteId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/${pacienteId}/hospitais`);
    }

    /**
     * Obtém a lista de consultas agendadas de um paciente.
     * @param pacienteId ID do paciente.
     * @returns Observable com a lista de consultas.
     */
    getConsultas(pacienteId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/${pacienteId}/consultas`);
    }

    /**
     * Obtém a lista de exames realizados de um paciente.
     * @param pacienteId ID do paciente.
     * @returns Observable com a lista de exames.
     */
    getExames(pacienteId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/${pacienteId}/exames`);
    }

    getPacientes(): Observable<Paciente[]> {
        return this.http.get<Paciente[]>(this.apiUrl);
    }
    createPaciente(paciente: Paciente): Observable<Paciente> {
        return this.http.post<Paciente>(this.apiUrl, paciente);
    }

    getPacienteById(pacienteId: number): Observable<Paciente> {
        return this.http.get<Paciente>(`${this.apiUrl}/${pacienteId}`);
    }
}
