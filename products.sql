CREATE TABLE Categorias (
    categoria_id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL
);

CREATE TABLE Fabricantes (
    fabricante_id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL
);

CREATE TABLE Componentes (
    componente_id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    categoria_id INTEGER,
    fabricante_id INTEGER,
    precio REAL,
    FOREIGN KEY (categoria_id) REFERENCES Categorias(categoria_id),
    FOREIGN KEY (fabricante_id) REFERENCES Fabricantes(fabricante_id)
);

INSERT INTO Categorias (nombre)
VALUES ('Procesadores');

INSERT INTO Fabricantes (nombre)
VALUES ('Intel'), ('Amd');

INSERT INTO Componentes (nombre, categoria_id, fabricante_id, precio)
VALUES ('intel core i5 13700', 1, 1, 199.99), ('amd ryzen 3 5500', 1, 2, 199.99);