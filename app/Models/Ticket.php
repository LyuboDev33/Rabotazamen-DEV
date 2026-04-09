<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ticket extends Model
{
    protected $fillable = [
        'ticket_name',
        'ticket_reason',
        'user_id',           // creator (user)
        'admin_id',          // optional assigned admin
        'status',            // open, closed, pending, etc.
        'created_at',
        'updated_at',
    ];

    /**
     * A ticket can have many messages
     */
    public function messages(): HasMany
    {
        return $this->hasMany(TicketMessage::class);
    }
}
