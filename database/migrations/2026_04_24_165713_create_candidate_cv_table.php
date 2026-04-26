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
        Schema::create('candidate_cv', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('candidate_id');
            $table->foreign('candidate_id')
                  ->references('id')
                  ->on('candidates')
                  ->cascadeOnDelete();

            $table->text('file_name');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidate_cv');
    }
};
