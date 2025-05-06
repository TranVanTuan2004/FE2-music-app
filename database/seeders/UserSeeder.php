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
            'password' => Hash::make('password'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0978476115',
            'role' => 'admin'
        ]);
        User::factory()->create([
            'name' => 'Test',
            'email' => 'test@gmail.com',
            'password' => Hash::make('password'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0385623512',
            'role' => 'user'
        ]);

        User::factory(100)->create();
    }
}
