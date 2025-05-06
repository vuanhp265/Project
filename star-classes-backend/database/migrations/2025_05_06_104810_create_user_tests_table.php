<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('user_tests', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('current_level');
        $table->string('target_score');
        $table->string('location');
        $table->string('email')->unique();
        $table->string('phone');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_tests');
    }
};
