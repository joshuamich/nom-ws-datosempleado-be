CREATE DATABASE test;

COMMENT ON DATABASE test IS 'Base de datos examen cofino';
  
CREATE TABLE IF NOT EXISTS public.colaborador
(
    idcolaborador GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    direccion VARCHAR(255),
    edad INTEGER,
    profesion VARCHAR(100),
    estado_civil VARCHAR(25)
);

COMMENT ON TABLE public.colaborador IS 'informacion de colaboradores';