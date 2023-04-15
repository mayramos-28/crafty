<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {

        try {
            $data = $request->validated();
            $data['password'] = password_hash($data['password'], PASSWORD_BCRYPT);
            $user = User::create($data);
            $user->save();
            $token = $user->createToken('auth_token')->accessToken;
            $message = 'Usuario creado correctamente';
            return response()->json(['message' => $message, 'token' => $token], 200);

        } catch (\Exception$e) {
            return response()->json(['message' => 'Ha ocurrido un error durante el registro. Por favor vuelta a intentarlo'], 500);
        }

    }
    public function login(Request $request)
    {
        try {
            $data = $request->all();
            $user = User::where('email', $data['email'])->first();
            if ($user) {
                if (password_verify($data['password'], $user->password)) {
                    $token = $user->createToken('auth_token')->accessToken;
                    $message = 'Usuario logueado correctamente';
                    return response()->json(['message' => $message, 'token' => $token], 200);
                } else {
                    $message = 'Contraseña incorrecta';
                    return response()->json(['message' => $message], 401);
                }
            } else {
                $message = 'Usuario no encontrado';
                return response()->json(['message' => $message], 401);
            }
        } catch (\Exception$e) {
            return response()->json(['message' => 'Ha ocurrido un error durante el login. Por favor vuelta a intentarlo'], 500);
        }
    }

}
