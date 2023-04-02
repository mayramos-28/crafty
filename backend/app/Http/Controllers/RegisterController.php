<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Routing\Controller;

class RegisterController extends Controller
{
    // public function show()
    // {
    //     if(auth()->check()) {
    //         //return redirect()->route('/home');
    //         //pendiente de modificar cuando tenga la api y el front para probar
    //     }
    //     //return view('auth.register');
    //     //pendiente de modificar cuando tenga la api y el front para probar
    // }

    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);
        $user->save();
        auth()->login($user);
        $res = $user->save();
        if ($res) {
            return response()->json(['message' => 'Usuario registrado correctamente'], 200);
            //pendiente de modificar cuando tenga la api y el front para probar
        }

        return response()->json(['message' => 'Ha ocurrido un error durante el registro'], 500);
        //pendiente de modificar cuando tenga la api y el front para probar

    }
}
