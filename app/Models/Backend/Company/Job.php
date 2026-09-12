<?php

namespace App\Models\Backend\Company;

use App\Models\Admin\Language;
use App\Models\Backend\Application;
use App\Models\Backend\Company;
use App\Models\City;
use App\Models\JobCategory;
use App\Models\JobRole;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Job extends Model
{
    protected $fillable = [
        'reference_number',
        'user_id',
        'company_id',
        'is_active',
        'title',
        'description',
        'category_id',
        'job_role_id',
        'min_salary',
        'max_salary',
        'number_of_views',
        'work_type',
        'employment_type',
        'position_level',
        'remote_option',
        'city_id',
        'address',
        'annual_leave',
        'open_positions',
        'job_end_date',
    ];

    /**
     * Job belongs to a user / employer.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Job belongs to a category.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(
            JobCategory::class,
            'category_id'
        );
    }

    /**
     * Job belongs to a job role.
     */
    public function jobRole(): BelongsTo
    {
        return $this->belongsTo(
            JobRole::class,
            'job_role_id'
        );
    }

    /**
     * Job belongs to a city.
     */
    public function city(): BelongsTo
    {
        return $this->belongsTo(
            City::class,
            'city_id'
        );
    }

    /**
     * Job can have many languages.
     */
    public function languages(): BelongsToMany
    {
        return $this->belongsToMany(
            Language::class,
            'job_languages',
            'job_id',
            'language_id'
        );
    }

    /**
     * Show the publisher
     */
    public function publisher()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    /**
     * Get all applications for the job.
     */
    public function applications(): HasMany
    {
        return $this->hasMany(Application::class, 'job_id');
    }
}
