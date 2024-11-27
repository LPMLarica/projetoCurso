package exame;

import jakarta.persistence.*;
import paciente.Paciente;

import java.time.LocalDate;

@Entity
public class Exame {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tipo;
    private String resultado;
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;

    // Getters e Setters
    // ...
}
