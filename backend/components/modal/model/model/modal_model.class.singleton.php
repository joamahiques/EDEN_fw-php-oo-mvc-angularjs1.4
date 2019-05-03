<?php

class modal_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = modal_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function select_home($data) {
        return $this->bll->select_home_BLL($data);
    }
    
}