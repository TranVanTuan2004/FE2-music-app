<?php

return [
    'paths' => ['song_audio/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173', 'https://tuanplus.io.vn'], // hoặc ['*'] để test nhanh
    'allowed_headers' => ['*'],
    'exposed_headers' => ['Content-Range', 'Accept-Ranges', 'Content-Length'],
    'max_age' => 0,
    'supports_credentials' => true,
];