Feature: Registro
  Quiero ingresar a la página de registro y corroborar que la información del usuario queda registrada. En caso de error mostrar un mensaje con el motivo del error. También se espera
  que los campos de ingreso de la validación marquen los errores si se les provee valores inválidos
  o si se dejan sin llenar los campos obligatorios. En caso que no exista el rol
  este debe ser creado en la url del formulario de registro.

  Quiero que los usuarios registrados tengan asociado un rol y este quede guardado.

  Scenario: Ingresar a la página de registro
    Given ingreso a la página de registro
    When ingresar nombre
    When ingresar email
    When ingresar password
    When ingresar grupo
    When ingresar rol
    # falta algo acá

  # Hay funcionalidades que no estan siendo probadas. cada grupo aportará con una
