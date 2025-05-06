<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AudioController extends Controller
{
    public function streamAudio($filename)
    {
        $path = storage_path('storage/song_audio/' . $filename);

        if (!file_exists($path)) {
            abort(404, 'File not found');
        }

        $file = fopen($path, 'rb');
        $size = filesize($path);
        $length = $size;
        $start = 0;
        $end = $size - 1;

        // Nếu client gửi request range, chúng ta xử lý yêu cầu đó
        if (isset($_SERVER['HTTP_RANGE'])) {
            list($a, $range) = explode('=', $_SERVER['HTTP_RANGE'], 2);
            if (strpos($range, ',') !== false) {
                // Không hỗ trợ nhiều ranges
                header('HTTP/1.1 416 Requested Range Not Satisfiable');
                exit;
            }
            list($start, $end) = explode('-', $range, 2);
            $start = (int) $start;
            $end = (int) $end;
            if ($end == 0) {
                $end = $size - 1;
            }
            $length = $end - $start + 1;
            fseek($file, $start);
        }

        // Set các headers để client có thể stream bài hát
        header("HTTP/1.1 206 Partial Content");
        header("Content-Type: audio/mpeg");
        header("Content-Range: bytes $start-$end/$size");
        header("Content-Length: $length");
        header("Accept-Ranges: bytes");
        header("Connection: close");

        // Đọc và trả về phần dữ liệu cho client
        echo fread($file, $length);
        fclose($file);
    }
}
