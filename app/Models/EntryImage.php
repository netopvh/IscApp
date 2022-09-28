<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntryImage extends Model
{
    use HasFactory;

    protected $fillable = ['entry_id', 'path'];
}
