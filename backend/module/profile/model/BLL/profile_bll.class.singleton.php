<?php

class profile_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = profile_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function select_user_BLL($user){
      return $this->dao->select_user_DAO($this->db, $user);
    }
    public function update_user_BLL($arrArgument) {
        return $this->dao->update_user_DAO($this->db, $arrArgument);
    }
    public function select_user_fav_BLL($user){
        return $this->dao->select_user_fav_DAO($this->db, $user);
      }
    public function select_user_pur_BLL($user){
        return $this->dao->select_user_pur_DAO($this->db, $user);
      }
    public function delete_favo_BLL($arrArgument) {
        return $this->dao->delete_favo_DAO($this->db, $arrArgument);
    }
    public function update_pass_pro_BLL($arrArgument){
      return $this->dao->update_pass_pro_DAO($this->db, $arrArgument);
    }
}
