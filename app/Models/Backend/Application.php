<?php

namespace App\Models\Backend;

use App\Models\Backend\Candidate\CandidateCV;
use App\Models\Backend\Company\Job;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Application extends Model
{
    protected $fillable = [
        'candidate_id',
        'job_id',
        'candidate_cv_id',
        'message',
        'status',
    ];

    /**
     * Application belongs to a candidate.
     */
    public function candidate(): BelongsTo
    {
        return $this->belongsTo(
            Candidate::class,
            'candidate_id'
        );
    }

    /**
     * Application belongs to a job.
     */
    public function job(): BelongsTo
    {
        return $this->belongsTo(
            Job::class,
            'job_id'
        );
    }

    /**
     * Application belongs to the CV used for applying.
     */
    public function candidateCv(): BelongsTo
    {
        return $this->belongsTo(
            CandidateCV::class,
            'candidate_cv_id'
        );
    }
}
