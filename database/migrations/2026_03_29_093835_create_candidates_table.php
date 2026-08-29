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
        Schema::create('candidates', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id')->unique()->nullable();
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->cascadeOnDelete();

            $table->string('professional_title')->nullable();
            $table->string('phone')->nullable();
            $table->string('location')->nullable();

            $table->string('profile_status')->nullable();
            $table->string('work_status')->nullable();


            $table->string('years_experience')->nullable();
            $table->string('seniority')->nullable();
            $table->string('min_salary')->nullable();
            $table->string('max_salary')->nullable();

            $table->json('skills')->nullable();
            $table->json('work_model')->nullable();

            $table->longText('about_me')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidates');
    }
};
