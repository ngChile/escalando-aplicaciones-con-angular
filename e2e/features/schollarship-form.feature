Feature: Página de postulación a la beca

   Quiero ingresar a la página de postulación a la beca 
   y poder llenar los campos nombre, email y motivos. Una
   llenado los campos quiero ver un mensaje que diga
   "Postulación enviada con éxito"

    Scenario: Ingreso de los datos y postulación a la beca
        Given ingreso a la página de postulación
        Then debería ver el mensaje de postulación enviado
