package com.proyecto.proyecto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inicio")
public class RestControllerProyecto {

    private static final Logger logger = LoggerFactory.getLogger(RestControllerProyecto.class);

    @Autowired
    private DatabaseServiceN databaseServiceN;

    @GetMapping("/listas")
    public ResponseEntity<List<Notas_C>> all() {
        try {
            List<Notas_C> notas = databaseServiceN.getAllnotas();
            logger.info("Operación getAllnotas ejecutada con éxito.");
            return new ResponseEntity<>(notas, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error al ejecutar la operación getAllnotas.", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/actualizar")
    public void update(
            @RequestParam String titulo,
            @RequestParam String Descripcion,
            @RequestParam String Fecha_de_vencimiento,
            @RequestParam String Prioridad,
            @RequestParam int Numero_De_nota,
            @RequestParam String Nombre_Usuario) {
        try {
            Notas_C notas_C = new Notas_C(titulo, Descripcion, Fecha_de_vencimiento, Prioridad, Nombre_Usuario);
            notas_C.setNumero_De_nota(Numero_De_nota);
            databaseServiceN.updateNotas(notas_C);
            logger.info("Operación update ejecutada con éxito para la nota {} del usuario: {}", Numero_De_nota, Nombre_Usuario);
        } catch (Exception e) {
            logger.error("Error al ejecutar la operación update.", e);
        }
    }

    @PostMapping("/subir")
    public void insert(
            @RequestParam String titulo,
            @RequestParam String Descripcion,
            @RequestParam String Fecha_de_vencimiento,
            @RequestParam String Prioridad,
            @RequestParam String Nombre_Usuario) {
        try {
            Notas_C notasC = new Notas_C(titulo, Descripcion, Fecha_de_vencimiento, Prioridad, Nombre_Usuario);
            databaseServiceN.insertNotas_C(notasC);
            logger.info("Operación insert ejecutada con éxito para el usuario: {}", Nombre_Usuario);
        } catch (Exception e) {
            logger.error("Error al ejecutar la operación insert.", e);
        }
    }
    @PostMapping("/login")
    public ResponseEntity<Inicio_sesion> loginUser(@RequestParam String Nombre_Usuario, @RequestParam String ConstraseNa) {
        try {
            Inicio_sesion tmpUser = databaseServiceN.authenticateUser(Nombre_Usuario, ConstraseNa);
            
            if (tmpUser != null) {
                tmpUser.setJTW();
                logger.info("Operación loginUser ejecutada con éxito para el usuario: {}", Nombre_Usuario);
                return new ResponseEntity<>(tmpUser, HttpStatus.OK);
            } else {
                logger.warn("Credenciales incorrectas para el usuario: {}", Nombre_Usuario);
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            logger.error("Error al ejecutar la operación loginUser.", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping("/Registro")
    public ResponseEntity<Inicio_sesion> insertCuenta(
            @RequestParam String Nombre_Usuario,
            @RequestParam String ConstraseNa,
            @RequestParam String JWT,
            @RequestParam String mail) {
        try {
            Inicio_sesion inicio_sesion = new Inicio_sesion(Nombre_Usuario, ConstraseNa, mail);
            inicio_sesion.setMail(mail);
            
            databaseServiceN.insertCuenta(inicio_sesion);
            logger.info("Operación insertCuenta ejecutada con éxito para el usuario: {}", Nombre_Usuario);
            return new ResponseEntity<>(inicio_sesion, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Error al ejecutar la operación insertCuenta.", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    @DeleteMapping("/borrar")
    public void delete(@RequestParam int Numero_De_nota, @RequestParam String Nombre_Usuario) {
        try {
            databaseServiceN.deleteNotas_C(Numero_De_nota, Nombre_Usuario);
            logger.info("Operación delete ejecutada con éxito para la nota {} del usuario: {}", Numero_De_nota, Nombre_Usuario);
        } catch (Exception e) {
            logger.error("Error al ejecutar la operación delete.", e);
        }
    }
}
