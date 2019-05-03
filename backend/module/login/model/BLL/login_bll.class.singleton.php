<?php

class login_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = login_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function validate_BLL($data){
        return $this->dao->validate_DAO($this->db, $data);
      }
    public function recover_pass_BLL($data){
        return $this->dao->recover_pass_DAO($this->db, $data);
    }
    public function update_pass_BLL($data){
        return $this->dao->update_pass_DAO($this->db, $data);
    }
    public function insert_user_BLL($data){
        return $this->dao->insert_user_DAO($this->db, $data);
    }
    public function select_user_BLL($data){
        return $this->dao->select_user_DAO($this->db, $data);
    }
    public function social_BLL($data){
        return $this->dao->social_DAO($this->db, $data);
    }
    public function delete_token_BLL($data){
        return $this->dao->delete_token_DAO($this->db, $data);
    }
}