package com.proyecto.proyecto;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.mysql.cj.util.DnsSrv.SrvRecord;

@Service

public class DatabaseServiceN {

    private static JdbcTemplate jdbcTemplate;

    @Autowired
    public DatabaseServiceN(JdbcTemplate jdbcTemplate) {
        DatabaseServiceN.jdbcTemplate = jdbcTemplate;
    }

    public static List<Notas_C> getAllnotas() {
        try {

            String query = "SELECT * FROM notas ";
            List<Map<String, Object>> todasNotas = jdbcTemplate.queryForList(query);
            List<Notas_C> Notas = new ArrayList<>();

            for (Map<String, Object> row : todasNotas) {
                int Numero_De_nota = (int) row.get("Numero_De_nota");
                String titulo = (String) row.get("titulo");
                String Descripcion = (String) row.get("Descripcion");
                String Fecha_de_vencimiento = (String) row.get("Fecha_de_vencimiento");
                String Prioridad = (String) row.get("Prioridad");
                String Nombre_Usuario = (String) row.get("Nombre_Usuario");

                Notas_C Notas_C = new Notas_C(Numero_De_nota, titulo, Descripcion, Fecha_de_vencimiento, Prioridad,
                        Nombre_Usuario);
                Notas.add(Notas_C);
            }
            return Notas;
        } catch (Exception e) {

            e.printStackTrace();
            return null;

        }
    }

    public static Inicio_sesion authenticateUser(String Nombre_Usuario, String ConstraseNa) {
        System.out.println("Nombre_Usuario = " + Nombre_Usuario);
        try {
            String query = "SELECT * FROM users WHERE Nombre_Usuario = ? and ConstraseNa =?";

            return jdbcTemplate.queryForObject(query, (rs, rowNum) -> {

                String nombreUsuario = rs.getString("Nombre_Usuario");
                String contrasena = rs.getString("ConstraseNa");

                return new Inicio_sesion(nombreUsuario, contrasena);
            }, Nombre_Usuario, ConstraseNa);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static void updateNotas(Notas_C Notas_C) {
        try {
            String query = "UPDATE notas SET titulo = ?, Descripcion = ?, Fecha_de_vencimiento =? , Prioridad=? WHERE Numero_De_nota = ? and Nombre_Usuario = ? ";
            jdbcTemplate.update(query, Notas_C.gettitulo(), Notas_C.getDescripcion(), Notas_C.getFecha_de_vencimiento(),
                    Notas_C.getPrioridad(), Notas_C.getNumero_De_nota(), Notas_C.getNombre());
        } catch (Exception e) {
            e.printStackTrace();

        }
    }

    public static void insertNotas_C(Notas_C notas) {
        try {
            String query = "INSERT INTO notas (titulo, Descripcion, Fecha_de_vencimiento, Prioridad, Nombre_Usuario) "
                    + "VALUES (?, ?, ?, ?, ?)";
            jdbcTemplate.update(query, notas.gettitulo(), notas.getDescripcion(),
                    notas.getFecha_de_vencimiento(), notas.getPrioridad(), notas.getNombre());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void insertCuenta(Inicio_sesion Inicio_sesion) {
        try {
            String query = "INSERT INTO users (Nombre_Usuario, ConstraseNa,JWT) VALUES (?, ?,?)";
            jdbcTemplate.update(query, Inicio_sesion.getNombre(), Inicio_sesion.getContra(), Inicio_sesion.getJTW());
        } catch (Exception e) {
            e.printStackTrace();

        }
    }

    public static int deleteNotas_C(int Numero_De_nota, String Nombre_Usuario) {
        try {
            String query = "DELETE FROM notas WHERE Numero_De_nota = ? and Nombre_Usuario = ?";
            jdbcTemplate.update(query, Numero_De_nota, Nombre_Usuario);
            return 1;
        } catch (Exception e) {
            e.printStackTrace();
            return 0;

        }
    }
}
