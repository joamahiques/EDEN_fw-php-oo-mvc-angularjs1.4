<?php


class profile_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = profile_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function select_user($user) {
        return $this->bll->select_user_BLL($user);
    }
    public function update_user($arrArgument) {
        return $this->bll->update_user_BLL($arrArgument);
    }
    public function select_user_fav($user) {
        return $this->bll->select_user_fav_BLL($user);
    }
    public function select_user_pur($user) {
        return $this->bll->select_user_pur_BLL($user);
    }
    public function delete_favo($arrArgument) {
        return $this->bll->delete_favo_BLL($arrArgument);
    }
    public function update_pass_pro($arrArgument){
        return $this->bll->update_pass_pro_BLL($arrArgument);
    }

}
