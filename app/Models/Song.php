<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    /** @use HasFactory<\Database\Factories\SongFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'artist',
        'genre',
        'duration',
        'release_date',
        'path',
        'image',
    ];
}
