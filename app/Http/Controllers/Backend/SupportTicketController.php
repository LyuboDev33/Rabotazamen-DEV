<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use App\Models\TicketMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SupportTicketController extends Controller
{
    /** Return all the tickets to the Admins */
    public function indexAdmin()
    {

        return Inertia::render('BackEnd/Admin/SupportTickets/Index');
    }

    /** Return all the tickets to normal users */
    public function index()
    {
        $tickets = Ticket::where('user_id', Auth::id())
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('BackEnd/SupportTickets/Index', [
            'supportTickets' => $tickets
        ]);
    }
    /** Create the support ticket */
    public function createTicketView()
    {
        return Inertia::render('BackEnd/SupportTickets/CreateTicket');
    }

    /** Request to create a ticket from a user
     * @param Request $request
     * @return RedirectResponse
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'ticket_name' => ['required', 'string', 'max:255'],
            'ticket_reason' => ['required', 'string', 'max:255'],
            'ticket_content' => ['required', 'string'],
        ]);


        $ticket = Ticket::create([
            'ticket_name' => $validated['ticket_name'],
            'ticket_reason' => $validated['ticket_reason'],
            'user_id' => Auth::id(),
            'status' => 'open'
        ]);

        TicketMessage::create([
            'ticket_id' => $ticket->id,
            'ticket_content' => $validated['ticket_content'],

            'ticket_sender_name' => Auth::user()->name,
            'ticket_sender_role' => 'user',

            'user_id' => Auth::id(),
            'admin_id' => null
        ]);

        Inertia::flash([
            'ticketSuccesCreation' => 'Тикета беше създаден успешно!'
        ]);

        return redirect()->route('user.tickets');
    }
}
