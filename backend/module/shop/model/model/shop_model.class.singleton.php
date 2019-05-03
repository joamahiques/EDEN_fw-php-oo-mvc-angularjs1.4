<?php

class shop_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = shop_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function count($data) {
        return $this->bll->count_BLL($data);
    }
    public function alldrops($data){
        return $this->bll->alldrops_BLL($data);
    }
    public function productsmap($data){
        return $this->bll->productsmap_BLL($data);
    }
}