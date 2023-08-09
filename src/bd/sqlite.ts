import sqlite3 from 'sqlite3'
import fs from 'fs'

// Crea una instancia de la base de datos en modo lectura/escritura
const db = new sqlite3.Database('mydatabase.db')

// funcion para leer el archivo products.sql y crear las tablas
export const inicializarTablas = () => { // leer el archivo sql
  const sql = fs.readFileSync('./products.sql', 'utf-8')
  console.log('🚀 ~ file: sqlite.ts:9 ~ sql:', sql)

  // ejecutar las declaraciones del archivo sql
  db.serialize(() => {
    // ejecutar
    db.exec(sql, (err) => {
      if (err != null) {
        console.log('ha ocurrido un error al crear las tablas')
      } else {
        console.log('operacion exitosa')
      }

      // cerrar la conexion
      db.close()
    })
  })
}

// inicializarTablas()

// ver todos los productos
export const verProductos = async () => {
  return await new Promise((resolve, reject) => {
    const products: any = []
    db.serialize(() => {
      db.each('SELECT * FROM Componentes', (err, row) => {
        if (err != null) {
          console.log('No se pudo leer la tabla Componentes:', err)
        } else {
          products.push(row)
        }
      }, () => {
        // Después de leer todos los registros
        db.close()
        resolve(products) // Resuelve la promesa con los productos
      })
    })
  })
}

// crear una categoria
export const createCategoria = (name: string) => {
  db.serialize(() => {
    const insert = db.prepare('INSERT INTO Categorias (nombre) VALUES (?)')
    insert.run(name)
    insert.finalize()
    db.close()
  })
}

// crear un fabricante
export const createFabricante = (name: string) => {
  db.serialize(() => {
    const insert = db.prepare('INSERT INTO Frabricantes (nombre) VALUES (?)')
    insert.run(name)
    insert.finalize()
    db.close()
  })
}

// crear un componente
export const crearComponente = (name: string, idCategory: number, idFabricante: number, precio: number) => {
  db.serialize(() => {
    const insert = db.prepare('INSERT INTO Componentes (nombre, categoria_id, fabricante_id, precio) VALUES (?, ?, ?, ?)')
    insert.run(name, idCategory, idFabricante, precio)
    insert.finalize()
    db.close()
  })
}
