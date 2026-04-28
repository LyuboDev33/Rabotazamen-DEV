<?php

namespace App\Models\Backend\Candidate;

use Illuminate\Database\Eloquent\Model;

class CandidateEducation extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */

    protected $fillable = [
        'candidate_id',
        'institution',
        'specialty',
        'degree',
        'start_year',
        'start_month',
        'end_year',
        'end_month',
        'is_current',
        'certificate',
    ];
}
