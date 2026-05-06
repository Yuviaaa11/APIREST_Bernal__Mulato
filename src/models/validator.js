export const validateUser = (user) => {
    const { nombre, Telefono, correo, password, preguntaId, respuestarc } = user;

    if (!nombre || nombre.length < 2) {
        throw new Error('Nombre inválido');
    }
    if (!Telefono || Telefono.length < 10) {
        throw new Error('Teléfono inválido');
    }
    if (!correo || !correo.includes('@')) {
        throw new Error('Correo inválido');
    }
    if (!password || password.length < 8) {
        throw new Error('Contraseña inválida, mínimo 8 caracteres');
    }
    if (!preguntaId || isNaN(preguntaId)) {
        throw new Error('Pregunta de recuperación requerida');
    }
    if (!respuestarc) {
        throw new Error('Respuesta de recuperación requerida');
    }
};