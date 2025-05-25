<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        User::truncate();
        // 1
        User::factory()->create([
            'name' => 'Vũ Cát Tường',
            'email' => 'vucattuong@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '09123123123',
            'image' => 'user_image/vucattuong.jpg',
            'role' => 'artist'
        ]);
        // 2

        User::factory()->create([
            'name' => 'Noo Phước Thịnh',
            'email' => 'noophuocthinh@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noophuocthinh.jpg',
            'role' => 'artist'
        ]);
        // 3

        User::factory()->create([
            'name' => 'Tuấn Hưng',
            'email' => 'tuanhung@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/tuanhung.jpg',
            'role' => 'artist'
        ]);
        // 4

        User::factory()->create([
            'name' => 'Sơn Tùng',
            'email' => 'sontung@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/sontung.jpg',
            'role' => 'artist'
        ]);
        // 5

        User::factory()->create([
            'name' => 'Justin Bieber',
            'email' => 'justinbieber@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/justin_bieber.jpg',
            'role' => 'artist'
        ]);
        // 6

        User::factory()->create([
            'name' => 'Minh Tốc',
            'email' => 'minhtoc@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/minhtoc.jpg',
            'role' => 'artist'
        ]);
        //7

        User::factory()->create([
            'name' => 'Will',
            'email' => 'will@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/will.jpg',
            'role' => 'artist'
        ]);
        // 8
        User::factory()->create([
            'name' => 'Binz',
            'email' => 'binz@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/binz.jpg',
            'role' => 'artist'
        ]);
        // 9

        User::factory()->create([
            'name' => 'Sobin Hoàng Sơn',
            'email' => 'sobinhoangson@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/sobinhoangson.jpg',
            'role' => 'artist'
        ]);
        // 10

        User::factory()->create([
            'name' => 'Trí',
            'email' => 'tri@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/tri.jpg',
            'role' => 'artist'
        ]);
        // 11

        User::factory()->create([
            'name' => 'Hiếu Thứ Hai',
            'email' => 'hieuthu2@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0385623512',
            'image' => 'user_image/hieuthuhai.jpg',
            'role' => 'artist'
        ]);
        // 12

        User::factory()->create([
            'name' => 'Tiên Tiên',
            'email' => 'toctien@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0385623512',
            'image' => 'user_image/toctien.jpg',
            'role' => 'artist'
        ]);
        // 13

        User::factory()->create([
            'name' => 'Đăng Răng To',
            'email' => 'dangrangto@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0385623512',
            'image' => 'user_image/dangrangto.jpg',
            'role' => 'artist'
        ]);
        // 14

        User::factory()->create([
            'name' => 'Amme',
            'email' => 'amme@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0385623512',
            'image' => 'user_image/amme.jpg',
            'role' => 'artist'
        ]);

        // 15
        User::factory()->create([
            'name' => 'Big daddy',
            'email' => 'bigdaddy@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0385623512',
            'image' => 'user_image/bigdaddy.jpg',
            'role' => 'artist'
        ]);

        User::factory()->create([
            'name' => 'Trần Văn Tuấn',
            'email' => 'tuantran280504@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0978476115',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'admin'
        ]);
        User::factory()->create([
            'name' => 'Test',
            'email' => 'test@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0385623512',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'user'
        ]);



        User::factory(20)->create();
    }
}
