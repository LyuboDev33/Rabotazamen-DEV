<?php

namespace App\Models\Backend;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Company extends Model
{
    const STATUS_PENDING = 'pending';
    const STATUS_APPROVED = 'approved';
    const STATUS_REJECTED = 'rejected';
    const STATUS_CLOSED = 'closed';


    // Company profile states
    const STATUS_NO_COMPANY = 'no_company';
    const STATUS_INCOMPLETE = 'incomplete';
    const STATUS_COMPLETE = 'complete';

    const COMPANY_STATUSES = [
        self::STATUS_PENDING,
        self::STATUS_APPROVED,
        self::STATUS_REJECTED,
        self::STATUS_CLOSED
    ];


    protected $fillable = [
        'status',
        'company_name',
        'company_eik',
        'company_industry',
        'company_size',
        'company_location',
        'company_address',
        'company_website',
        'company_logo',
        'company_banner',
        'company_full_description',
        'company_benefits',
        'work_locations',
        'work_languages',
    ];

    protected $casts = [
        'company_benefits' => 'array',
        'work_locations'   => 'array',
        'work_languages'   => 'array',
    ];


    /**
     * Many-to-many: User can have many Companies
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}
