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
        Schema::create('applications', function (Blueprint $table) {
            $table->id();

            $table->foreignId('candidate_id')
                ->constrained('candidates')
                ->cascadeOnDelete();

            $table->foreignId('job_id')
                ->constrained('jobs')
                ->cascadeOnDelete();

            $table->foreignId('candidate_cv_id')
                ->nullable()
                ->constrained('candidate_cv')
                ->nullOnDelete();

            $table->text('message')->nullable();

            $table->string('status')->default('pending');

            $table->timestamps();

            $table->unique(['candidate_id', 'job_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
