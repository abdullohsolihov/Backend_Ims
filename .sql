
CREATE TYPE staff_status AS ENUM ('active', 'inactive', 'suspended');

CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAr(250) not null,
    photo VARCHAR(255) DEFAULT NULL,
    role VARCHAR(50) DEFAULT('Admin'),
    status staff_status DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

