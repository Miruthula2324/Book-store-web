const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyAdminToken = (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Access Denied. No token provided' });
        }

        const token = authHeader.split(' ')[1];

        // Verify the token
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error('JWT Verification Error:', err.message); // Log the error for debugging
                return res.status(403).json({ message: 'Invalid credentials' });
            }

            // Attach the user to the request object for further processing
            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error('Token verification failed:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = verifyAdminToken;
