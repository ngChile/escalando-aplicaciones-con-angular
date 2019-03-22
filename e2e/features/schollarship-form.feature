Feature: Página de postulación a la beca

   Quiero ingresar a la página de postulación a la beca 
   y poder llenar los campos nombre, email y motivos. Una vez
   llenado los campos quiero ver un mensaje que diga
   "Postulación enviada con éxito"
@focus
    Scenario: Ingreso de los datos y postulación a la beca
        Given ingreso a la página de postulación 
        When escribo una razón en el text area de motivo
        