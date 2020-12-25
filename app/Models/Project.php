<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';

    protected $fillable = [
        'name',
        'description',
        'is_completed',
    ];

    // const CREATED_AT = 'RESIT_DATE';
    // const UPDATED_AT = 'UPDATE_DATE'; 

    public function tasks()
    {
      return $this->hasMany(Task::class);
    }
}

