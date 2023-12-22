package com.proyecto.proyecto;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Inicio_sesion {
    private String Nombre_Usuario;
    private String ConstraseNa;
    private String JWT;
    private String mail;  // Nuevo campo 'mail'
    private String mySecreString = "Contra secreta proyecto progra III";

    public Inicio_sesion(String Nombre_Usuario, String ConstraseNa, String mail) {
        this.Nombre_Usuario = Nombre_Usuario;
        this.ConstraseNa = ConstraseNa;
        this.mail = mail;
        this.JWT = generateJsonWebToken(Nombre_Usuario, ConstraseNa);
    }

    private String generateJsonWebToken(String Nombre_Usuario, String ConstraseNa) {
        try {
            String dataToHash = "" + Nombre_Usuario + ConstraseNa + mySecreString;
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashedBytes = digest.digest(dataToHash.getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();
            for (byte b : hashedBytes) {
                hexString.append(String.format("%02x", b));
            }

            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }

    public String getNombre() {
        return this.Nombre_Usuario;
    }

    public boolean checkPassword(String ConstraseNa) {
        return this.ConstraseNa.equals(ConstraseNa);
    }

    public void setJTW() {
        this.JWT = generateJsonWebToken(this.Nombre_Usuario, this.ConstraseNa);
    }

    public String getJTW() {
        return this.JWT;
    }

    public String getContra() {
        return this.ConstraseNa;
    }

    public void setNombre(String Nombre_Usuario) {
        this.Nombre_Usuario = Nombre_Usuario;
    }

    public void setContra(String ConstraseNa) {
        this.ConstraseNa = ConstraseNa;
    }

    public String getMail() {
        return this.mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}
