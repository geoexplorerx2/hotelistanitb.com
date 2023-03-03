<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class sendFormController extends Controller
{
    public function index()
    {
        return view('sendForm');
    }
}
