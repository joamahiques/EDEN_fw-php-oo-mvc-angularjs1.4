<?php

class crud_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = crud_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function select_all_homes() {
        return $this->bll->select_all_homes_BLL();
    }
    public function delete_home($data) {
        return $this->bll->delete_home_BLL($data);
    }
    public function delete_all_homes() {
        return $this->bll->delete_all_homes_BLL();
    }
    public function insert_home($data) {
        return $this->bll->insert_home_BLL($data);
    }
    public function select_home($data) {
        return $this->bll->select_home_BLL($data);
    }
    public function update_home($data) {
        return $this->bll->update_home_BLL($data);
    }
    public function validate($data) {
        return $this->bll->validate_BLL($data);
    }
}