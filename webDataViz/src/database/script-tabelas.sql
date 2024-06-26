drop database if exists TechTale;
create database if not exists TechTale;

use TechTale;

create table usuario(
id int primary key auto_increment,
nome varchar(45) not null,
email varchar(45) unique not null,
senha varchar(45) not null,
mortes int,
atoPrioritario varchar(14),
check(atoPrioritario in ("poupou","matou","poupou e matou"))
);

insert into usuario(nome,email,senha) values ("Luiz","luiz@sptech.school","1234A");

create table partida(
id int primary key auto_increment,
fkUsuario int not null,
resultado varchar(45) not null,
check(resultado in ("poupou","matou","morreu")),
foreign key (fkUsuario) references usuario(id)
);

-stop;

SELECT * from usuario;
select * from partida;

insert into partida(fkUsuario,resultado) values (1,"morreu");

update usuario
set atoPrioritario = "poupou e matou"
where id = 1;

update usuario
set mortes = 3
where id = 1;