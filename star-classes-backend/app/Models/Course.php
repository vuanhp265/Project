<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = ['name', 'level', 'description', 'target', 'duration', 'special_features'];

}
