import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();

export const sqlServerConfig = {
    user: 'sa',
    password: 'Demacia05',
    server: 'localhost', // SIEMPRE debe ser localhost o 127.0.0.1
    database: 'Users',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        instanceName: 'SQLEXPRESS' // Aquí es donde se especifica la instancia
    }
};

export const getConnection = async () => {
    const pool = await sql.connect(sqlServerConfig);
    return pool;
};
