<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TicketMessage extends Model
{
    protected $fillable = [
        'ticket_id',
        'ticket_content',
        'ticket_sender_name',
        'ticket_sender_role',
        'ticket_is_seen',
        'admin_id',
        'user_id',
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
