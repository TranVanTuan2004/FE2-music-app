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
            //  vũ cát tường
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
                "title" => "Từng là",
                // "artist" => "Vũ Cát Tường",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/tungla.mp3",
                "image" => "song_image/tungla.jpg"
            ],
            [
                "title" => "Vết mưa",
                // "artist" => "Vũ Cát Tường",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/vetmua.mp3",
                "image" => "song_image/vetmua.jpg"
            ],
            [
                "title" => "Người bình thường",
                // "artist" => "Vũ Cát Tường",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/nguoibinhthuong.mp3",
                "image" => "song_image/nguoibinhthuong.jpg"
            ],

            // noo phước thịnh
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
                "title" => "Những kẻ mộng mơ",
                // "artist" => "Noo Phước Thịnh",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/nhungkemongmo.mp3",
                "image" => "song_image/nhungkemongmo.jpg"
            ],
            [
                "title" => "Mãi mãi bên nhau",
                // "artist" => "Noo Phước Thịnh",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/maimaibennhau.mp3",
                "image" => "song_image/maimaibennhau.jpg"
            ],


            // Hiếu thứ 2 - 8
            [
                "title" => "Không Thể Say",
                // "artist" => "HIEUTHUHAI",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/khongthesay.mp3",
                "image" => "song_image/khongthesay.jpg"
            ],


            // big daddy
            [
                "title" => "Ngõ Chạm",
                // "artist" => "BigDaddy, Emily",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/ngocham.mp3",
                "image" => "song_image/ngocham.jpg"
            ],

            // Tiên tiên
            [
                "title" => "Chắc Anh Đang",
                // "artist" => "Tiên Tiên, and TRANG",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/chacanhdang.mp3",
                "image" => "song_image/chacanhdang.jpg"
            ],

            // đăng răng to
            [
                "title" => "NGỰA Ô",
                // "artist" => "Dangrangto, TeuYungBoy, DONAL",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/nguao.mp3",
                "image" => "song_image/nguao.jpg"
            ],

            // amme
            [
                "title" => "Mộng Yu",
                // "artist" => "AMEE, RPT MCK",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/mongyu.mp3",
                "image" => "song_image/mongyu.jpg"
            ],

            // 13
            // tuấn hưng
            [
                "title" => "Tìm lại bầu trời",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/timlaibautroi.mp3",
                "image" => "song_image/timlaibautroi.jpg"
            ],
            [
                "title" => "Anh yêu em",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/anhyeuem.mp3",
                "image" => "song_image/anhyeuem.jpg"
            ],
            [
                "title" => "Gấp đôi yêu thương",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/gapdoiyeuthuong.mp3",
                "image" => "song_image/gapdoiyeuthuong.jpg"
            ],
            [
                "title" => "Nắm lấy tay anh",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/namlaytayanh.mp3",
                "image" => "song_image/namlaytayanh.jpg"
            ],
            [
                "title" => "Chiếc khăn phiêu",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/chieckhanphieu.mp3",
                "image" => "song_image/chieckhanphieu.jpg"
            ],
            [
                "title" => "Cầu vòng khuyết",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/cauvongkhuyet.mp3",
                "image" => "song_image/cauvongkhuyet.jpg"
            ],

            // 19
            // sơn tùng
            [
                "title" => "Đừng làm trái tim anh đau",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/dunglamtraitimanhdau.mp3",
                "image" => "song_image/dunglamtraitimanhdau.jpg"
            ],
            [
                "title" => "Âm thầm bên em",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/amthambenem.mp3",
                "image" => "song_image/amthambenem.jpg"
            ],
            [
                "title" => "Nơi này có anh",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/noinaycoanh.mp3",
                "image" => "song_image/noinaycoanh.jpg"
            ],
            [
                "title" => "Buông đôi tay nhau ra",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/buongdoitaynhaura.mp3",
                "image" => "song_image/buongdoitaynhaura.jpg"
            ],
            [
                "title" => "Chúng ta của hiện tại",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/chungtacuahientai.mp3",
                "image" => "song_image/chungtacuahientai.jpg"
            ],
            [
                "title" => "Muộn rồi mà sao còn",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/muonroimasaocon.mp3",
                "image" => "song_image/muonroimasaocon.jpg"
            ],
            [
                "title" => "Chúng ta của tương lai",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/chungtacuatuonglai.mp3",
                "image" => "song_image/chungtacuatuonglai.jpg"
            ],
            [
                "title" => "Chúng ta không thuộc về nhau",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/chungtakhongthuocvenhau.mp3",
                "image" => "song_image/chungtakhongthuocvenhau.jpeg"
            ],

            [
                "title" => "Có chắc yêu là đây",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/cochacyeuladay.mp3",
                "image" => "song_image/cochacyeuladay.jpg"
            ],
            [
                "title" => "Nắng ấm xa dần",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/nangamxadan.mp3",
                "image" => "song_image/nangamxadan.jpg"
            ],

            // 29
            // justin bieber
            [
                "title" => "Beauty and a beat",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/beautyandabeat.mp3",
                "image" => "song_image/beautyandabeat.jpg"
            ],
            [
                "title" => "Sorry",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/sorry_justin.mp3",
                "image" => "song_image/sorry_justin.jpg"
            ],
            [
                "title" => "Love yourself",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/loveyourself.mp3",
                "image" => "song_image/loveyourself.jpg"
            ],
            [
                "title" => "Stay",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/stay.mp3",
                "image" => "song_image/stay.png"
            ],
            [
                "title" => "Confident",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/confident.mp3",
                "image" => "song_image/confident.jpg"
            ],
            [
                "title" => "Ghost",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/ghost.mp3",
                "image" => "song_image/ghost.jpg"
            ],
            [
                "title" => "Baby",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/baby.mp3",
                "image" => "song_image/baby.jpg"
            ],
            [
                "title" => "What do you mean",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/whatdoyoumean.mp3",
                "image" => "song_image/whatdoyoumean.jpg"
            ],
            [
                "title" => "I don't care",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/idontcare.mp3",
                "image" => "song_image/idontcare.jpg"
            ],
            [
                "title" => "That should be me",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/thatshouldbeme.mp3",
                "image" => "song_image/thatshouldbeme.jpg"
            ],


            // 39
            // Minh tốc
            [
                "title" => "Phép màu",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/phepmau.mp3",
                "image" => "song_image/phepmau.jpg"
            ],
            [
                "title" => "Bầu trời mới",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/bautroimoi.mp3",
                "image" => "song_image/bautroimoi.jpg"
            ],
            [
                "title" => "Những ngày nắng đẹp",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/nhungngaynangdep.mp3",
                "image" => "song_image/nhungngaynangdep.jpg"
            ],

            // 42
            // will
            [
                "title" => "Nơi ta chờ em",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/noitachoem.mp3",
                "image" => "song_image/noitachoem.jpg"
            ],

            // 43
            // Binz
            [
                "title" => "Bình yên",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/binhyen.mp3",
                "image" => "song_image/binhyen.jpg"
            ],
            [
                "title" => "Cơn mưa cuối",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/conmuacuoi.mp3",
                "image" => "song_image/conmuacuoi.jpg"
            ],
            [
                "title" => "Hit me up",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/hitmeup.mp3",
                "image" => "song_image/hitmeup.jpg"
            ],
            [
                "title" => "Cho Mình Em",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/chominhem.mp3",
                "image" => "song_image/chominhem.jpg"
            ],

            // 47
            // sobin hoàng sơn
            [
                "title" => "Dancing in the dark",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/dancinginthedark.mp3",
                "image" => "song_image/dancinginthedark.jpg"
            ],
            [
                "title" => "Giá như",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/gianhu.mp3",
                "image" => "song_image/gianhu.jpg"
            ],
            [
                "title" => "Thắng năm",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/thangnam.mp3",
                "image" => "song_image/thangnam.jpg"
            ],
            [
                "title" => "Vài lần đón đưa",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/vailandondua.mp3",
                "image" => "song_image/vailandondua.jpg"
            ],

            // Trí 51
            [
                "title" => "Một bài hát không vui mấy",
                "genre" => 4,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/motbaihatkhongvuimay.mp3",
                "image" => "song_image/motbaihatkhongvuimay.jpg"
            ],
            [
                "title" => "Ánh sao và bầu trời",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/anhsaovabautroi.mp3",
                "image" => "song_image/anhsaovabautroi.jpg"
            ],
            [
                "title" => "Chúng ta sau này",
                "genre" => 1,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/chungtasaunay.mp3",
                "image" => "song_image/chungtasaunay.jpg"
            ],
            [
                "title" => "Sau chia tay ai cũng khác",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/sauchiatayaicungkhac.mp3",
                "image" => "song_image/sauchiatayaicungkhac.jpg"
            ],
            [
                "title" => "Lặng im và tan vỡ",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/langimvatanvo.mp3",
                "image" => "song_image/langimvatanvo.jpg"
            ],
            [
                "title" => "Mỗi khi em nhìn anh",
                "genre" => 3,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/moikhiemnhinanh.mp3",
                "image" => "song_image/moikhiemnhinanh.jpg"
            ],
            [
                "title" => "Trở Thành Quá Khứ",
                "genre" => 2,
                "duration" => fake()->numberBetween(200, 500),
                "release_date" => fake()->time(),
                "path" => "song_audio/trothanhquakhu.mp3",
                "image" => "song_image/trothanhquakhu.jpg"
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
