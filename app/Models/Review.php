<?php

namespace App\Models;

use App\Models\Backend\Candidate;
use App\Models\Backend\Company;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public const PENDING = 'pending';
    public const APPROVED = 'approved';
    public const REJECTED = 'rejected';

    protected $fillable = [
        'reviewer_candidate_id',
        'reviewer_company_id',
        'reviewed_candidate_id',
        'reviewed_company_id',
        'rating',
        'comment',
        'is_approved',
    ];


    public function reviewerCandidate()
    {
        return $this->belongsTo(Candidate::class, 'reviewer_candidate_id');
    }

    public function reviewerCompany()
    {
        return $this->belongsTo(Company::class, 'reviewer_company_id');
    }

    public function reviewedCandidate()
    {
        return $this->belongsTo(Candidate::class, 'reviewed_candidate_id');
    }

    public function reviewedCompany()
    {
        return $this->belongsTo(Company::class, 'reviewed_company_id');
    }

    
}
