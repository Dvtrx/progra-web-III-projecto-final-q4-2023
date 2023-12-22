package com.proyecto.proyecto;

import org.springframework.stereotype.Controller;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RequestMapping;
    
    import jakarta.annotation.Generated;

@Controller
    @RequestMapping("/descripcion")

public class WebController {
    @GetMapping()
        public String descripcion() {
            return "pagina" ;
}
}