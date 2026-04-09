<?php

namespace App\Models;

use App\Models\JobRole;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class JobCategory extends Model
{

    /**
     * The attributes that are mass assignable.
     * @var list<string>
     */
    protected $fillable = [
        'name'
    ];

    /**
     * Candidate belongs to a user
     */
    public function job_roles(): HasMany
    {
        return $this->hasMany(JobRole::class, 'category_id');
    }
}
