<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TicketMessage extends Model
{
    protected $fillable = [
        'ticket_id',          // which ticket this message belongs to
        'message_content',    // text of the message
        'sender_name',        // name of the sender
        'sender_role',        // user or admin
        'user_id',            // nullable if admin sent
        'admin_id',           // nullable if user sent
        'ticket_is_seen',     // boolean for notifications
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
