<?php

class home_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = home_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function select_scroll($data) {
        return $this->bll->select_scroll_BLL($data);
    }
    public function count() {
        return $this->bll->count_BLL();
    }
    public function active_user($data) {
        return $this->bll->active_user_BLL($data);
    }
}