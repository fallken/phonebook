<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phonebook extends Model
{
   protected $fillable=['name','phone','email'];
   protected $hidden = [
        'created_at', 'updated_at',
    ];
}
