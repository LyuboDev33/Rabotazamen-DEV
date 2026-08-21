<?php

use App\Models\Backend\Company;
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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('status')->nullable();

            $table->string('company_eik')->unique();
            $table->string('company_name');
            $table->string('company_industry');
            $table->string('company_size');
            $table->string('company_location');
            $table->string('company_address');
            $table->string('company_website')->nullable();

            $table->string('company_logo');
            $table->string('company_banner');

            $table->longText('company_full_description');

            $table->json('company_benefits');
            $table->json('work_locations');
            $table->json('work_languages');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
