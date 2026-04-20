<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TicketMessage extends Model
{
    protected $fillable = [
        'ticket_id',
        'message_content',
        'sender_name',
        'sender_role',
        'user_id',
        'admin_id',
        'ticket_is_seen', 
        'created_at',
        'updated_at',
    ];

    /**
     * The ticket this message belongs to
     */
    public function ticket(): BelongsTo
    {
        return $this->belongsTo(Ticket::class);
    }
}
