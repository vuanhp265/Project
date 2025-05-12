<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use App\Models\Course;

class ImportCourses extends Command
{
    protected $signature = 'import:courses';
    protected $description = 'Import courses from courselist.json';

    public function handle()
    {
        if (!Storage::exists('courselist.json')) {
            $this->error('❌ File courselist.json not found in storage/app');
            return;
        }

        $json = Storage::get('courselist.json');
        $courses = json_decode($json, true);

        if (!$courses || !is_array($courses)) {
            $this->error('❌ Failed to parse courselist.json');
            return;
        }

        foreach ($courses as $course) {
            Course::create([
                'name' => $course['name'] ?? '',
                'level' => $course['level'] ?? '',
                'description' => $course['description'] ?? $course['objective'] ?? '',
                'target' => $course['target'] ?? '',
                'duration' => $course['duration'] ?? '',
                'special_features' => json_encode($course['special_features'] ?? []),
            ]);
        }

        $this->info('✅ Courses imported successfully!');
    }
}
