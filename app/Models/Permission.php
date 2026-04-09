<?php

namespace App\Models;

use App\Models\Role;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Permission extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description'
    ];


    /**
     * Many roles have many permissions
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class,);
    }
}
