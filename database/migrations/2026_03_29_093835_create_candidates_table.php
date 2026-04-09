<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Schema::create('candidates', function (Blueprint $table) {
        //     $table->id();

        //     $table->unsignedBigInteger('user_id')->unique();
        //     $table->foreign('user_id')
        //         ->references('id')
        //         ->on('users')
        //         ->cascadeOnDelete();

        //     $table->string('first_name');
        //     $table->string('last_name');
        //     $table->string('phone');
        //     $table->string('city');

        //     // Future-proof (you WILL need these later)
        //     $table->text('cv')->nullable();
        //     $table->text('experience')->nullable();
        //     $table->text('skills')->nullable();

        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidates');
    }
};
