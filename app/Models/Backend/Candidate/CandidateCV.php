<?php

namespace App\Models\Backend\Candidate;

use App\Models\Backend\Candidate;
use Illuminate\Database\Eloquent\Model;

class CandidateCV extends Model
{
    /** Name of the table */
    protected $table = 'candidate_cv';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'candidate_id',
        'file_name',
    ];

    /** All CVs belong to one Candidate */
    public function candidate() {
        return $this->belongsTo(Candidate::class);
    }


}
