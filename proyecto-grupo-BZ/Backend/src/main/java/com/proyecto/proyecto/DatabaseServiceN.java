package com.proyecto.proyecto;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

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
                String titulo = (String) row.get("titulo");
                String Descripcion = (String) row.get("Descripcion");
                String Fecha_de_vencimiento = (String) row.get("Fecha_de_vencimiento");
                String Prioridad = (String) row.get("Prioridad");
                String Nombre_Usuario = (String) row.get("Nombre_Usuario");

                Notas_C Notas_C = new Notas_C(titulo, Descripcion, Fecha_de_vencimiento, Prioridad, Nombre_Usuario);
                Notas.add(Notas_C);
            }
            return Notas;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Inicio_sesion authenticateUser(String Nombre_Usuario, String ConstraseNa) {
        try {
            String sql = "SELECT * FROM users WHERE Nombre_Usuario = ? AND ConstraseNa = ?";
            return jdbcTemplate.queryForObject(sql, new Object[]{Nombre_Usuario, ConstraseNa}, (rs, rowNum) ->
                    new Inicio_sesion(rs.getString("Nombre_Usuario"), rs.getString("ConstraseNa"), rs.getString("mail")));
        } catch (EmptyResultDataAccessException e) {
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
            if (notas.gettitulo() == null || notas.gettitulo().isEmpty()) {
                throw new IllegalArgumentException("El título no puede ser nulo o vacío");
            }

            String query = "INSERT INTO notas (titulo, Descripcion, Fecha_de_vencimiento, Prioridad, Nombre_Usuario) "
                    + "VALUES (?, ?, ?, ?, ?)";
            jdbcTemplate.update(query, notas.gettitulo(), notas.getDescripcion(),
                    notas.getFecha_de_vencimiento(), notas.getPrioridad(), notas.getNombre());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void insertCuenta(Inicio_sesion inicio_sesion) {
        try {
            String query = "INSERT INTO users (Nombre_Usuario, ConstraseNa, JWT, mail) VALUES (?, ?, ?, ?)";
            jdbcTemplate.update(query, inicio_sesion.getNombre(), inicio_sesion.getContra(), inicio_sesion.getJTW(), inicio_sesion.getMail());
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
