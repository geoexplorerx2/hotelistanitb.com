<?php

namespace App\Http\Controllers;
use App\Models\ContactForm;
use Illuminate\Http\Request;

class sendFormController extends Controller
{
    public function index()
    {
        return view('sendForm');
    }

    public function store(Request $request)
    {
        try {

            $newData = new ContactForm();
            $newData->name_surname = $request->input('fullname');
            $newData->phone = $request->input('phone');
            $newData->country = $request->input('country');
            $newData->email = $request->input('email');
            $newData->company_name = $request->input('company');
            $newData->form_status_id = 1;
            $result = $newData->save();

            if ($result) {
                return redirect('thank-you');
            }
        }
        catch (\Throwable $th) {
            throw $th;
        }
    }
    public function thanks()
    {
        return view('thank-you');
    }
}
