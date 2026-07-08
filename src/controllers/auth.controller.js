import supabase from "../../config/supabase.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const { nombre, email, password, rol } = req.body;

        if (!nombre || !email || !password || !rol) {
            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios"
            });
        }

        // Hasheamos la contraseña
        const passwordHash = await bcrypt.hash(password, 10);

        // Verificamos si el usuario ya existe
        const { data: usuarioExistente, error: searchError } = await supabase
            .from("users")
            .select("*")
            .eq("email", email)
            .maybeSingle(); // Usamos maybeSingle para evitar que tire error si no lo encuentra

        if (usuarioExistente) {
            return res.status(409).json({
                mensaje: "El email ya está registrado"
            });
        }

        // Insertamos el nuevo usuario
        const { data, error: insertError } = await supabase
            .from("users")
            .insert([
                {
                    nombre,
                    email,
                    password: passwordHash,
                    rol
                }
            ])
            .select();

        if (insertError) {
            return res.status(500).json({
                mensaje: "Error al registrar el usuario",
                error: insertError.message
            });
        }

        return res.status(201).json({
            mensaje: "Usuario registrado correctamente",
            usuario: data[0]
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Error interno del servidor",
            error: error.message
        });
    }
};


