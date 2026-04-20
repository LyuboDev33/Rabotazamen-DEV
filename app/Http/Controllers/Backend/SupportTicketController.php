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

    /** Show the ticket with the communication
     * @param int $ticket_id
    */
    public function show ($ticket_id) {
        $ticket = Ticket::where('id', $ticket_id)->first();

        if(!$ticket) {
            return Inertia::render('Errors/NoTicketFound');
        }

        return Inertia::render('');

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

        Ticket::create([
            'ticket_name' => $validated['ticket_name'],
            'ticket_reason' => $validated['ticket_reason'],
            'user_id' => Auth::id(),
            'status' => Ticket::OPEN
        ]);

        Inertia::flash([
            'ticketSuccesCreation' => 'Тикета беше създаден успешно!'
        ]);

        return redirect()->route('user.tickets');
    }
}
