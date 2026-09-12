<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ReviewsController extends Controller
{
    public function index()
    {
        $reviews = Review::with([
            'reviewerCandidate.user',
            'reviewerCompany',

            'reviewedCandidate.user',
            'reviewedCompany',
        ])
            ->latest()
            ->get();

        return Inertia::render('BackEnd/Admin/Reviews/Index', [
            'reviews' => $reviews,
        ]);
    }

    /**
     * Update the status of the review
     *
     * @param Request $request
     * @param Review  $review
     */
    public function updateStatus(Request $request, Review $review)
    {
        $validated = $request->validate([
            'status' => [
                'required',
                'string',
                Rule::in([
                    Review::PENDING,
                    Review::APPROVED,
                    Review::REJECTED,
                ]),
            ],
        ]);

        $review->update([
            'is_approved' => $validated['status'],
        ]);

        return back()->with('success', 'Статусът на ревюто беше обновен успешно.');
    }
}
