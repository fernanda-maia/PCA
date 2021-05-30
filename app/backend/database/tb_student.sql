CREATE TABLE public.tb_student (
    id NUMERIC(9),
    registration CHAR(6) UNIQUE NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    username VARCHAR(10) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    birthday DATE NOT NULL,
    "password" VARCHAR(25) NOT NULL,
    CONSTRAINT pk_id PRIMARY KEY (id)

);

CREATE SEQUENCE hibernate_sequence START 1;
