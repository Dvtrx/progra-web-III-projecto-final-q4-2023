package com.proyecto.proyecto;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/inicio")
public class RestControllerProyecto {
    @Autowired
    private DatabaseServiceN databaseServiceN;


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/listas")
    public List<Notas_C> all() {
        return databaseServiceN.getAllnotas();

    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/actualizar")
    public void update(String titulo, String Descripcion, String Fecha_de_vencimiento, String Prioridad,
            int Numero_De_nota, String Nombre_Usuario) {

        Notas_C Notas_C = new Notas_C(Numero_De_nota, titulo, Descripcion, Fecha_de_vencimiento, Prioridad,
                Nombre_Usuario);
        databaseServiceN.updateNotas(Notas_C);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/subir")
    public void insert(String titulo, String Descripcion, String Fecha_de_vencimiento, String Prioridad,
            String Nombre_Usuario) {
        Notas_C notasC = new Notas_C(0, titulo, Descripcion, Fecha_de_vencimiento, Prioridad, Nombre_Usuario);
        databaseServiceN.insertNotas_C(notasC);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public Inicio_sesion loginUser(String Nombre_Usuario, String ConstraseNa) {

        Inicio_sesion tmpUser = DatabaseServiceN.authenticateUser(Nombre_Usuario, ConstraseNa);
        tmpUser.setJTW();
        return tmpUser;

    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/Registro")
    public Inicio_sesion insertCuenta(String Nombre_Usuario, String ConstraseNa, String JWT) {

        Inicio_sesion Inicio_sesion = new Inicio_sesion(Nombre_Usuario, ConstraseNa);
        databaseServiceN.insertCuenta(Inicio_sesion);
        return Inicio_sesion;

    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/borrar")
    public void delete(int Numero_De_nota, String Nombre_Usuario) {

        databaseServiceN.deleteNotas_C(Numero_De_nota, Nombre_Usuario);
    }

}