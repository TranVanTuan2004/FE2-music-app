<?php


return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'storage/*'], // đảm bảo đường dẫn audio nằm trong đây
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'],
    'allowed_headers' => ['*'],
    'exposed_headers' => ['Content-Length', 'X-Knowledge'],
    'max_age' => 0,
    'supports_credentials' => true,
];