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
        return Inertia::render('BackEnd/Admin/SupportTickets/Index', [
            'supportTickets' => Ticket::get()
        ]);
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
    public function show($ticket_id)
    {
        $ticket = Ticket::with([
            'messages' => function ($query) {
                $query->orderBy('created_at', 'asc');
            },
            'user'
        ])->where('id', $ticket_id)->first();

        if (!$ticket) {
            return Inertia::render('Errors/NoTicketFound');
        }

        return Inertia::render('BackEnd/SupportTickets/Show', [
            'ticket' => $ticket,
            'messages' => $ticket->messages,
        ]);
    }

    /** Create a reply to
     * @param Request $request
     * @return RedirectResponse
     */
    public function reply(Request $request)
    {
        $request->validate([
            'ticket_id' => 'required|exists:tickets,id',
            'message_content' => 'required|string',
        ]);

        $user = Auth::user();

        $ticket = Ticket::find($request->ticket_id);

        if (!$ticket) {
            return back()->with('error', 'Ticket not found.');
        }

        // Get user roles
        $roles = $user->roles->pluck('role_name')->toArray();

        // Determine if admin
        $isAdmin = in_array('admin', $roles) || in_array('super_admin', $roles);

        // Create message
        TicketMessage::create([
            'ticket_id' => $ticket->id,
            'ticket_content' => $request->message_content,
            'ticket_sender_name' => $user->first_name . ' ' . $user->last_name,
            'ticket_sender_role' => $isAdmin ? 'Администратор' : 'Потребител',
            'user_id' => $isAdmin ? null : $user->id,
            'admin_id' => $isAdmin ? $user->id : null,
            'ticket_is_seen' => 0,
        ]);

        return redirect()->back()->with('success', 'Message sent.');
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
