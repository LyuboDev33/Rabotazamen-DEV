<?php

namespace App\Models\Backend;

use App\Models\Backend\Candidate\CandidateCV;
use App\Models\Backend\Candidate\CandidateEducation;
use App\Models\Backend\Candidate\CandidateWorkExperience;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Candidate extends Model
{

    const STATUS_PENDING = 'pending';
    const STATUS_APPROVED = 'approved';
    const STATUS_REJECTED = 'rejected';
    const STATUS_CLOSED = 'closed';


    protected $fillable = [
        'user_id',
        'professional_title',
        'phone',
        'profile_picture',
        'location',
        'work_status',
        'work_model',
        'skills',
        'about_me',
        'profile_status',
        'years_experience',
        'seniority',
        'min_salary',
        'max_salary'
    ];


    protected $casts = [
        'work_model' => 'array',
        'skills'     => 'array',
    ];

    /**
     * Candidate belongs to a user
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /** Get all CV's for a Candidate */
    public function cvs()
    {
        return $this->hasMany(CandidateCV::class)
            ->orderByDesc('id');
    }

    /** Return Work Experience */
    public function workExperience()
    {
        return $this->hasMany(CandidateWorkExperience::class)
            ->orderByDesc('id');
    }

    /** Return Education */
    public function education()
    {
        return $this->hasMany(CandidateEducation::class)
            ->orderByDesc('id');
    }

    /**
     * Get all approved reviews written for this candidate.
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'reviewed_candidate_id')
            ->where('is_approved', Review::APPROVED)
            ->latest();
    }
}
