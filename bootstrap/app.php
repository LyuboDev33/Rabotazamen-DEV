<?php

use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\CandidateMiddleware;
use App\Http\Middleware\EmployerMiddleware;
use App\Http\Middleware\SuperAdminMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware
            ->web(append: [
                \App\Http\Middleware\HandleInertiaRequests::class,
                \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
            ])
            ->alias([
                'super_admin' => SuperAdminMiddleware::class,
                'admin' => AdminMiddleware::class,
                'empoyer' => EmployerMiddleware::class,
                'candidate' => CandidateMiddleware::class
            ]);


        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
