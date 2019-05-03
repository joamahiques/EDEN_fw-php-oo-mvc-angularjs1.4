<?php

class favorites_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = favorites_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function insertFavorites($data) {
        return $this->bll->insertFavorites_BLL($data);
    }
    public function readFavorites($data) {
        return $this->bll->readFavorites_BLL($data);
    }
    public function deleteFavorites($data) {
        return $this->bll->deleteFavorites_BLL($data);
    }
}