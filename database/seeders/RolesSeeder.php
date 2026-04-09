<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{   
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          DB::table('roles')->insert([
            [
                'role_name' => 'super_admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_name' => 'admin',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_name' => 'employer',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'role_name' => 'candidate',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
