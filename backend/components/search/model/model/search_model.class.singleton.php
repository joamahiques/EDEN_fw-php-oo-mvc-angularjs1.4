<?php

class search_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = search_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function readProvince() {
        return $this->bll->readProvince_BLL();
    }
    public function readMuni($data) {
        return $this->bll->readMuni_BLL($data);
    }
    public function autocomplete($data) {
        return $this->bll->autocomplete_BLL($data);
    }
}