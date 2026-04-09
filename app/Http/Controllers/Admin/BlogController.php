<?php

namespace App\Http\Controllers\Admin;

use App\Models\Blog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Http\Controllers\Controller;



class BlogController extends Controller
{


    /** Return the Dashboard View view */
    public function index()
    {
        $blogs = Blog::get();
        return Inertia::render('BackEnd/Admin/Blog/Index', [
            'blogs' => $blogs
        ]);
    }

    /** Show  a single article in the Dashboard
     * @param string @slug
     */
    public function show($slug)
    {
        $blog = Blog::where('blog_slug', $slug)->first();

        if (!$blog) {
            return Inertia::render('NotFoundBlog');
        }

        return Inertia::render('BackEnd/Admin/Blog/Show', [
            'blog' => $blog
        ]);
    }

    /** Get the Create Article view */
    public function createBlogView()
    {
        return Inertia::render('BackEnd/Admin/Blog/AddBlog');
    }


    /** Create an article
     * @param Request $request
     * @return RedirectResponse
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'blog_image' => ['required', 'image', 'mimes:jpeg,jpg,png', 'max:2048'],
            'blog_name' => ['required', 'string', 'max:255'],
            'blog_content' => ['required', 'string'],
        ], [
            'blog_image.image' => 'Файлът трябва да е изображение jpg, jpeg или png',
            'blog_image.mimes' => 'Файлът трябва да е jpg, jpeg или png',
            'blog_image.uploaded' => 'Изображението не може да надвишава 2MB!',
        ]);


        $slug = Str::slug($validated['blog_name']);

        if (Blog::where('blog_slug', $slug)->exists()) {
            return back()->withErrors([
                'blog_name' => 'Статия със същото заглавие вече съществува.'
            ]);
        }


        $file = $request->file('blog_image');
        $fileName = time() . '_' . preg_replace('/\s+/', '', $file->getClientOriginalName());
        $file->move(public_path('/assets/images/blog'), $fileName);

        Blog::create([
            'blog_name' => $validated['blog_name'],
            'blog_slug' => $slug,
            'blog_content' => $validated['blog_content'],
            'blog_image' => $fileName,
            'author_id' => Auth::id(),
        ]);

        Inertia::flash([
            'successUploadingBlog' => 'Успешно качихте блог статия'
        ]);

        return redirect()->route('blog.index');
    }

    /** Update an article
     * @param Request $request
     * @return RedirectResponse
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'blog_name' => ['required', 'string', 'max:255'],
            'blog_content' => ['required', 'string'],
            'blog_image' => ['nullable', 'image', 'mimes:jpeg,jpg,png', 'max:2048'],
        ], [
            'blog_image.image' => 'Файлът трябва да е изображение',
            'blog_image.mimes' => 'Файлът трябва да е jpg, jpeg или png',
            'blog_image.max' => 'Изображението не може да надвишава 2MB!',
        ]);

        $blog = Blog::where('id', $request->blog_id)->first();

        if (!$blog) {
            Inertia::flash([
                'errorUpdatingBlog' => 'Тази статия не съществува!'
            ]);

            return back();
        }

        // Generate slug
        $newSlug = Str::slug($validated['blog_name']);

        // Check if slug exists (excluding current blog)
        $slugExists = Blog::where('blog_slug', $newSlug)
            ->where('id', '!=', $blog->id)
            ->exists();

        if ($slugExists) {

            Inertia::flash([
                'errorUpdatingBlog' => 'Вече съществува статия със същото име.'
            ]);

            return back();
        }

        // Keep current image by default
        $imageName = $blog->blog_image;

        // Handle image upload
        if ($request->hasFile('blog_image')) {

            $file = $request->file('blog_image');
            /** Trim the image spaces */
            $imageName = preg_replace('/\s+/','',time() . '_' . $file->getClientOriginalName());
            $file->move(public_path('/assets/images/blog'), $imageName);
        }

        // Update blog
        $blog->update([
            'blog_name' => $validated['blog_name'],
            'blog_slug' => $newSlug,
            'blog_content' => $validated['blog_content'],
            'blog_image' => $imageName,
        ]);

        Inertia::flash([
            'successUpdatingBlog' => 'Статията беше обновена успешно!'
        ]);

        return redirect("/dashboard/admin/blog/{$newSlug}/edit");
    }




    /** Delete an article
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Request $request)
    {
        $blog = Blog::where('id', $request->blogId)->first();

        if (!$blog) {
            Inertia::flash([
                'errorDeletingBlog' => 'Упс.... тази статия не съществува!'
            ]);
            return redirect()->route('blog.index');
        }

        $blog->delete();

        Inertia::flash([
            'successDeletingBlog' => 'Успешно изтрихте статията!'
        ]);

        return redirect()->route('blog.index');
    }
}
