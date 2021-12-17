const usuariosQueries = {
    insertUsuario: `
    INSERT INTO
    usuarios(
        nombre,
        email,
        password,
        status
    )
    VALUES
    (?, ?, ?, ?)
    `,
}