package com.proyecto.proyecto;

public class Notas_C {
    private int Numero_De_nota;
    private String titulo;
    private String Descripcion;
    private String Fecha_de_vencimiento;
    private String Prioridad;
    private String Nombre_Usuario;

    public Notas_C(String titulo, String Descripcion, String Fecha_de_vencimiento, String Prioridad,
                   String Nombre_Usuario) {
        this.titulo = titulo;
        this.Descripcion = Descripcion;
        this.Fecha_de_vencimiento = Fecha_de_vencimiento;
        this.Prioridad = Prioridad;
        this.Nombre_Usuario = Nombre_Usuario;
    }

    // Otros métodos y atributos siguen aquí...

    public String getNombre() {
        return this.Nombre_Usuario;
    }

    public String gettitulo() {
        return this.titulo;
    }

    public String getDescripcion() {
        return this.Descripcion;
    }

    public int getNumero_De_nota() {
        return this.Numero_De_nota;
    }

    public String getFecha_de_vencimiento() {
        return this.Fecha_de_vencimiento;
    }

    public String getPrioridad() {
        return this.Prioridad;
    }

    public void setNombre(String Nombre_Usuario) {
        this.Nombre_Usuario = Nombre_Usuario;
    }

    public void settitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String Descripcion) {
        this.Descripcion = Descripcion;
    }

    public void setNumero_De_nota(int Numero_De_nota) {
        this.Numero_De_nota = Numero_De_nota;
    }

    public void setFecha_de_vencimiento(String Fecha_de_vencimiento) {
        this.Fecha_de_vencimiento = Fecha_de_vencimiento;
    }

    public void setPrioridad(String Prioridad) {
        this.Prioridad = Prioridad;
    }
}
