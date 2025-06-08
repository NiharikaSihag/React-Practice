import jwt from 'jsonwebtoken';
export const jwtToken = (email, role) => {
    return jwt.sign({
        email: email,
        role: role
    },
    'Your own Jwt',
    {
        expiresIn: '30d'
    }
)
}

