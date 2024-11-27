<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

class Home extends BaseController
{
    use ResponseTrait;
    public function index()
    {
        if (file_exists('nuxt/dist/index.html'))
            return file_get_contents('nuxt/dist/index.html');
        else
            return $this->response->redirect(env('DDEV_PRIMARY_URL') . ':3001');
    }
    function test(){
        return $this->respond([
            'result' => 'ok'
        ]);
    }
}
