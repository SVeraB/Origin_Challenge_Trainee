# Origin Challenge Trainee

Para el front plantee una SPA usando React Router, creando un componente por cada pagina vista. 
Para el back, por mas que no esté aplicado, se buscaba usar un partrón de diseño MVC, con una base de datos no relacinal, la cual se consultaría cuando el usuario ingresa el número de tarjeta, pasandolo desde el front al back, el cual lo buscaría en la base de datos, guradándolo en caso de encontrarlo y que la tarjeta no esté bloqueada. Para los casos de la consulta del PIN y del balance, simplemente se comprobaría con la tarjeta guardada. En el caso del retiro, se comprueba con la tarjeta guardada el monto, el cual le responde al front, si excede el monto o no,  y una vez aceptada la operación si se realizarian la actualización de la tarjeta y la creación de la operación
