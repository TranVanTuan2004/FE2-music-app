<?php

namespace Database\Seeders;

use App\Models\Song;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {

        $list = [
            [
                "title" => "Mơ",
                // "artist" => "Vũ Cát Tường",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/mo.mp3",
                "image" => "song_image/mo.jpg"
            ],
            [
                "title" => "Seven",
                // "artist" => "Jungkook",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/seven.mp3",
                "image" => "song_image/seven.jpg"
            ],
            [
                "title" => "Giờ Thì",
                // "artist" => "Bùi Trường Linh",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/giothi.mp3",
                "image" => "song_image/giothi.jpg"
            ],
            [
                "title" => "Giấc Mơ Khác",
                // "artist" => "Chillies",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/giacmokhac.mp3",
                "image" => "song_image/giacmokhac.jpg"
            ],
            [
                "title" => "Trở Thành Quá Khứ",
                // "artist" => "Trí",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/trothanhquakhu.mp3",
                "image" => "song_image/trothanhquakhu.jpg"
            ],
            [
                "title" => "Cause I Love You",
                // "artist" => "Noo Phước Thịnh",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/causeiloveyou.mp3",
                "image" => "song_image/causeiloveyou.jpg"
            ],
            [
                "title" => "Say Yes",
                // "artist" => "Ogenus, PiaLinh",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/sayyes.mp3",
                "image" => "song_image/sayyes.jpg"
            ],
            [
                "title" => "Chẳng Giống Giáng Sinh",
                // "artist" => "Lu, Willistic, Datfitzx",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/changgiongiangsinh.mp3",
                "image" => "song_image/changgiongiangsinh.jpg"
            ],
            [
                "title" => "Ngõ Chạm",
                // "artist" => "BigDaddy, Emily",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/ngocham.mp3",
                "image" => "song_image/ngocham.jpg"
            ],

            [
                "title" => "Mùa Yêu Dầu",
                // "artist" => "Đinh Mạnh Linh",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/muayeudau.mp3",
                "image" => "song_image/muayeudau.jpg"
            ],

            [
                "title" => "Sau Những Lần Đau - Remake",
                // "artist" => "Dũng, Sixkie Dawgz, Hà Anh",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/saunhunglandau.mp3",
                "image" => "song_image/saunhunglandau.jpg"
            ],

            [
                "title" => "Chắc Anh Đang",
                // "artist" => "Tiên Tiên, and TRANG",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/chacanhdang.mp3",
                "image" => "song_image/chacanhdang.jpg"
            ],

            [
                "title" => "NGỰA Ô",
                // "artist" => "Dangrangto, TeuYungBoy, DONAL",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/nguao.mp3",
                "image" => "song_image/nguao.jpg"
            ],

            [
                "title" => "Buồn Hay Vui",
                // "artist" => "VSOUL, RPT MCK, Obito, Boyzed, Ronboogz",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/buonhayvui.mp3",
                "image" => "song_image/buonhayvui.jpg"
            ],

            [
                "title" => "NGÁO NGƠ",
                // "artist" => "HIEUTHUHAI, ERIK, Anh Tú Atus, JSOL, and Orange",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/ngaongo.mp3",
                "image" => "song_image/ngaongo.jpg"
            ],

            [
                "title" => "Cho Mình Em",
                // "artist" => "Binz, Den",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/chominhem.mp3",
                "image" => "song_image/chominhem.jpg"
            ],

            [
                "title" => "Yêu Sắc Yếu",
                // "artist" => "Osad",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/yeusacyeu.mp3",
                "image" => "song_image/yeusacyeu.jpg"
            ],

            [
                "title" => "Mộng Yu",
                // "artist" => "AMEE, RPT MCK",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/mongyu.mp3",
                "image" => "song_image/mongyu.jpg"
            ],
            [
                "title" => "Yêu Một Người Có Lẽ",
                // "artist" => "Lou Hoàng, Miu Lê",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/yeumotnguoicole.mp3",
                "image" => "song_image/yeumotnguoicole.jpg"
            ],
            [
                "title" => "Không Thể Say",
                // "artist" => "HIEUTHUHAI",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/khongthesay.mp3",
                "image" => "song_image/khongthesay.jpg"
            ],
        ];
        Song::truncate();
        for ($i = 0; $i < count($list); $i++) {
            Song::factory()->create([
                "title" => $list[$i]["title"],
                // "artist" => $list[$i]["artist"],
                "genre" => $list[$i]["genre"],
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => $list[$i]["path"],
                "image" => $list[$i]["image"],
            ]);
        }
        // Song::factory(100)->create();
    }
}
