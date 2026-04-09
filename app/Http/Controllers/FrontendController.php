<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    /** Return home view */
    public function home () {

        $articles = Blog::with('author')
                    ->orderBy('created_at', 'desc')
                    ->limit(3)
                    ->get();


         return Inertia::render('FrontEnd/Welcome' , [
            'articles' => $articles
         ]);
    }

    /** Return the about view */
    public function about() {
        return Inertia::render('FrontEnd/About');
    }

    /** Return the contact view */
    public function contact () {
        return Inertia::render('FrontEnd/Contact');
    }

    /** Show all Blog articles */
    public function blog () {

        return Inertia::render('FrontEnd/Blog/Blog', [
            'articles' => Blog::with('author')->get()
        ]);
    }

    /** Show a single Blog Article
     * @param string $slug
    */
    public function blogShow($slug) {
        $article = Blog::where('blog_slug', $slug)
                    ->with('author')
                    ->first();

        if(!$article) {
           return Inertia::render('NotFoundBlogFrontEnd');
        }

        return Inertia::render('FrontEnd/Blog/Show', [
            'article' => $article
        ]);
    }





}
