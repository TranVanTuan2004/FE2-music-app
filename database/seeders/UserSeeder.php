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

        User::factory()->create([
            'name' => 'Vũ Cát Tường',
            'email' => 'vucattuong@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '09123123123',
            'image' => 'user_image/vucattuong.jpg',
            'role' => 'artist'
        ]);

        User::factory()->create([
            'name' => 'Noo Phước Thịnh',
            'email' => 'noophuocthinh@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noophuocthinh.jpg',
            'role' => 'artist'
        ]);

        User::factory()->create([
            'name' => 'Hòa minzy',
            'email' => 'hoaminzy@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/hoaminmzy.jpg',
            'role' => 'artist'
        ]);
        User::factory()->create([
            'name' => 'Hải nguyễn',
            'email' => 'abc@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'artist'
        ]);
        User::factory()->create([
            'name' => 'Hoa Trần',
            'email' => '1234@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'artist'
        ]);
        User::factory()->create([
            'name' => 'Nam Trần',
            'email' => 'namtran@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'artist'
        ]);
        User::factory()->create([
            'name' => 'Ngọc Ánh',
            'email' => 'ngocanh@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'artist'
        ]);
        User::factory()->create([
            'name' => 'Quyền Ngô',
            'email' => 'quyenngo@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'artist'
        ]);
        User::factory()->create([
            'name' => 'Nhi Phạm',
            'email' => 'nhpham@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'artist'
        ]);
        User::factory()->create([
            'name' => 'Bống',
            'email' => 'bong@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'artist'
        ]);
        User::factory()->create([
            'name' => 'Shin',
            'email' => 'shin@gmail.com',
            'password' => Hash::make('123456'),
            'address' => 'Quận 6 HCM city',
            'phone' => '12312312312',
            'image' => 'user_image/noavtar.jpg',
            'role' => 'artist'
        ]);

        User::factory(20)->create();
    }
}
