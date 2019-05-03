<?php

class login_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = login_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function validate($data) {
        return $this->bll->validate_BLL($data);
    }
    public function recover_pass($data) {
        return $this->bll->recover_pass_BLL($data);
    }
    public function update_pass($data) {
        return $this->bll->update_pass_BLL($data);
    }
    public function insert_user($data) {
        return $this->bll->insert_user_BLL($data);
    }
    public function select_user($data) {
        return $this->bll->select_user_BLL($data);
    }
    public function social($data) {
        return $this->bll->social_BLL($data);
    }
    public function delete_token($data) {
        return $this->bll->delete_token_BLL($data);
    }
}