package paciente;

import consulta.Consulta;
import consulta.ConsultaRepository;
import exame.Exame;
import exame.ExameRepository;
import hospital.Hospital;
import hospital.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public class PacienteDetalhesController {

    @Autowired
    private HospitalRepository hospitalRepository;

    private ConsultaRepository consultaRepository;
    
    private ExameRepository exameRepository;

    @GetMapping("/hospitais")
    public List<Hospital> listarHospitais(@PathVariable Long id) {
        return hospitalRepository.findByPacienteId(id);
    }

    @GetMapping("/consultas")
    public List<Consulta> listarConsultas(@PathVariable Long id) {
        return consultaRepository.findByPacienteId(id);
    }

    @GetMapping("/exames")
    public List<Exame> listarExames(@PathVariable Long id) {
        return exameRepository.findByPacienteId(id);
    }
}
