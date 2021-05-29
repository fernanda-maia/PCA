CREATE TABLE public.tb_student (
    id NUMERIC(9),
    registration CHAR(6) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    username VARCHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL,
    birthday DATE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    CONSTRAINT pk_id PRIMARY KEY (id)

);
