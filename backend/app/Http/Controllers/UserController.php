<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UserController extends Controller

{
    public function update(Request $request, int $id)
    {
        $user = User::find($id);
   
        $user->update($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Datos de usuario actualizado correctamente',
                'data' => $user
            ],
            200
        );
        
    }
}
