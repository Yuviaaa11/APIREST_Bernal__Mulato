import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();

export const sqlServerConfig = {
    user: 'sa',
    password: 'maxon123',
    server: 'YUVIA',
    database: 'Users',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        instanceName: 'ABIGAIL'
    },
};

export const getConnection = async () => {
    const pool = await sql.connect(sqlServerConfig);
    return pool;
};
