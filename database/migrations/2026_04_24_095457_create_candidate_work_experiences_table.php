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


            $table->unsignedSmallInteger('start_year');
            $table->unsignedTinyInteger('start_month');

            $table->unsignedSmallInteger('end_year')->nullable();
            $table->unsignedTinyInteger('end_month')->nullable();

            $table->boolean('is_current')->default(false);

            $table->string('location')->nullable();

            $table->text('responsibilities')->nullable();
            $table->text('achievements')->nullable();

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
