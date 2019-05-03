<?php

class crud_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = crud_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function select_all_homes_BLL(){
        return $this->dao->select_all_homes_DAO($this->db);
      }
    public function delete_home_BLL($data){
        return $this->dao->delete_home_DAO($this->db, $data);
    }
    public function delete_all_homes_BLL(){
        return $this->dao->delete_all_homes_DAO($this->db);
    }
    // public function insert_user_BLL($data){
    //     return $this->dao->insert_user_DAO($this->db, $data);
    // }
    // public function select_user_BLL($data){
    //     return $this->dao->select_user_DAO($this->db, $data);
    // }
    // public function social_BLL($data){
    //     return $this->dao->social_DAO($this->db, $data);
    // }
    // public function delete_token_BLL($data){
    //     return $this->dao->delete_token_DAO($this->db, $data);
    // }
}