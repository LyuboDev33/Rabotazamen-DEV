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
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('company_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('reference_number')->unique();

            $table->boolean('is_active')->default(true);

            $table->string('title');

            $table->longText('description');

            $table->foreignId('category_id')
                ->nullable()
                ->constrained('job_categories')
                ->nullOnDelete();

            $table->foreignId('job_role_id')
                ->nullable()
                ->constrained('job_roles')
                ->nullOnDelete();

            $table->unsignedInteger('min_salary');

            $table->unsignedInteger('max_salary');

            $table->unsignedBigInteger('number_of_views')->default(0);

            $table->string('work_type');

            $table->string('employment_type');

            $table->string('position_level');

            $table->string('remote_option');

            $table->foreignId('city_id')
                ->nullable()
                ->constrained('cities')
                ->nullOnDelete();

            $table->string('address');

            $table->unsignedInteger('annual_leave')->nullable();

            $table->unsignedInteger('open_positions')->default(1);

            $table->timestamp('job_end_date');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
