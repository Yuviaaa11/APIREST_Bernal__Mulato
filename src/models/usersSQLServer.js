import sql from 'mssql';
import { getConnection } from '../config/sqlserver.js';

// SQL Server
export const getAllUsers = async () => {  
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM users');
    return result.recordset;  
};

export const createUser = async (user) => {
    const { nombre, Telefono, correo, password, preguntarc, respuestarc } = user;

    const pool = await getConnection();
    const result = await pool.request()
        .input('nombre',      sql.NVarChar, nombre)
        .input('Telefono',    sql.NVarChar, Telefono)
        .input('correo',      sql.NVarChar, correo)
        .input('password',    sql.NVarChar, password)
        .input('preguntarc',  sql.NVarChar, preguntarc) // ← NVarChar no Int
        .input('respuestarc', sql.NVarChar, respuestarc)
        .query(`
            INSERT INTO users (nombre, Telefono, correo, password, preguntarc, respuestarc)
            VALUES (@nombre, @Telefono, @correo, @password, @preguntarc, @respuestarc);
            SELECT SCOPE_IDENTITY() AS id;
        `);

    return result.recordset[0].id;
};

export const getByEmail = async (correo) => {
    const pool = await getConnection();
    const result = await pool.request()
        .input('correo', sql.NVarChar, correo)
        .query('SELECT * FROM users WHERE correo = @correo');
    return result.recordset[0] || null;
};