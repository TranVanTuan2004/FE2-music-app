<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        // truncate() -> xóa toàn bộ data để khi fake lại bắt đầu từ 1
        User::truncate();
        User::factory()->create([
            'name' => 'Trần Văn Tuấn',
            'email' => 'test@gmail.com',
            'password' => Hash::make('password'),
            'address' => 'Số nhà 23/17 Hẻm 17 Đường Dương Văn Cam, Linh Tây, Thủ Đức',
            'phone' => '0978476115'
        ]);

        $this->call([
            UserSeeder::class
        ]);
    }
}
