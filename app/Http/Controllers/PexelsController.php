<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PexelsController extends Controller
{
    public function search(Request $request)
    {
        $response = Http::withToken(config('pexels.api_key'))->get(
            'https://api.pexels.com/v1/search',
            [
                'query' => $request->query('query'),
                'per_page' => 10,
                'size' => 'large',
                'color' => '#2982FF',
                'orientation' => 'landscape',
            ]
        );

        $photos = $response->json('photos');
        $photo = $photos[random_int(0, count($photos) - 1)];

        return $photo['src'];
    }
}
