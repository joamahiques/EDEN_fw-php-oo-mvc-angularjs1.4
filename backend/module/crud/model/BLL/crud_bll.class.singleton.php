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
    public function insert_home_BLL($data){
        return $this->dao->insert_home_DAO($this->db, $data);
    }
    public function select_home_BLL($data){
        return $this->dao->select_home_DAO($this->db, $data);
    }
    public function update_home_BLL($data){
        return $this->dao->update_home_DAO($this->db, $data);
    }
    public function validate_BLL($data){
        return $this->dao->validate_DAO($this->db, $data);
    }
}