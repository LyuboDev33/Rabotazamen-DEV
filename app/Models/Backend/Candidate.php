<?php

namespace App\Models\Backend;

use App\Models\Backend\Candidate\CandidateCV;
use App\Models\Backend\Candidate\CandidateEducation;
use App\Models\Backend\Candidate\CandidateWorkExperience;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Candidate extends Model
{

    const STATUS_PENDING = 'pending';
    const STATUS_APPROVED = 'approved';
    const STATUS_REJECTED = 'rejected';
    const STATUS_CLOSED = 'closed';


    protected $fillable = [
        'user_id',
        'status',
        'first_name',
        'last_name',
        'phone',
        'city',
        'cv',
        'experience',
        'skills',
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
        return $this->hasMany(CandidateCV::class);
    }

    /** Return Work Experience */
    public function workExperience()
    {
        return $this->hasMany(CandidateWorkExperience::class);
    }

    /** Return Education */
    public function education()
    {
        return $this->hasMany(CandidateEducation::class);
    }
}
