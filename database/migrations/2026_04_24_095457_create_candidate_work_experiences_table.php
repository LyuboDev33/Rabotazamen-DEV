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
        Schema::create('candidate_work_experiences', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('candidate_id');
            $table->foreign('candidate_id')
                ->references('id')
                ->on('candidates')
                ->cascadeOnDelete();

            $table->string('position');
            $table->string('company');


            $table->string('start_year');
            $table->string('start_month');

            $table->string('end_year')->nullable();
            $table->string('end_month')->nullable();

            $table->boolean('is_current')->default(false);

            $table->string('location')->nullable();

            $table->longText('responsibilities')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_experiences');
    }
};
