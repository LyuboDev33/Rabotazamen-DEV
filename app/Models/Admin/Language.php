<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
      /**
     * The attributes that are mass assignable.
     * @var list<string>
     */
    protected $fillable = [
        'language_name',
    ];
}
