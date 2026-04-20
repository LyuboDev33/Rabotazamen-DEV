<?php

namespace App\Models;

use App\Models\Backend\Company;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Role;
use App\Notifications\ResetPasswordNotification;
use App\Notifications\VerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;


class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'profile_pic',
        'email_verified_at',
        'password',
        'remember_token',

        'stripe_id',
        'pm_type',
        'pm_last_four',
        'trial_ends_at',

        'google_id',
        'google_token',
        'google_refresh_token',
    ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * The roles that belong to the user.
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    /**
     * Return all permissions attached to a user.
     */
    public function getPermissions()
    {
        $permissions = [];

        foreach ($this->roles()->with('permissions')->get() as $role) {
            foreach ($role->permissions as $permission) {
                $permissions[] = $permission->name;
            }
        }
        return array_values(array_unique($permissions));
    }


    /**
     * One article has only one author
     */
    public function articles(): HasMany
    {
        return $this->hasMany(Blog::class, 'author_id');
    }

    /**
     * Get a candidate
     */
    public function candidate()
    {
        return $this->hasOne(Candidate::class);
    }

    /**
     * Many-to-many: User can have many Companies
     */
    public function companies(): BelongsToMany
    {
        return $this->belongsToMany(Company::class);
    }

    /**
     * One to many: 1 User can have multiple tickets
     * All tickets belong to 1 User only
     */
    public function tickets(): HasMany {
        return $this->hasMany(Ticket::class);
    }

    /** Email notifications */
    /** -------------------------------------------------------------------- **/
    /** Email notifications */

    /** Send an email verification once a user registers */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail());
    }

    /** Send an email when a user requests password reset */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }
}
