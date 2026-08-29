<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ticket extends Model
{

    const OPEN = 'open';
    const PENDING = 'pending';
    const CLOSED = 'closed';

    protected $fillable = [
        'ticket_name',
        'ticket_reason',
        'user_id',
        'admin_id',
        'status',    
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

    /**
     * One to many: Tickets belong to one user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }




}
