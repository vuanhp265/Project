<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Console\Commands\ImportCourses;



class Kernel extends ConsoleKernel
{
    /**
     * Đăng ký các command Artisan tùy chỉnh.
     */
    protected $commands = [
        \App\Console\Commands\ImportCourses::class,
    ];
    
    

    /**
     * Xác định lịch chạy (schedule) cho các command.
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
    }

    /**
     * Đăng ký các file command cho Artisan.
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
