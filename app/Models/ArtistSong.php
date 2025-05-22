<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * 
 *
 * @property int $id
 * @property int $song_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtistSong newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtistSong newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtistSong query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtistSong whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtistSong whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtistSong whereSongId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtistSong whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtistSong whereUserId($value)
 * @mixin \Eloquent
 */
class ArtistSong extends Model
{
    /** @use HasFactory<\Database\Factories\ArtisanSongFactory> */
    use HasFactory;

    protected $fillable = [
        'is_follow',
    ];
}
