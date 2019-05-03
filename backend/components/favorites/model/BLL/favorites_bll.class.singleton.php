<?php


class favorites_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = favorites_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    public function insertFavorites_BLL($data){
        return $this->dao->insertFavorites_DAO($this->db,$data);
    }
    public function readFavorites_BLL($data){
        return $this->dao->readFavorites_DAO($this->db,$data);
    }
    public function deleteFavorites_BLL($data){
        return $this->dao->deleteFavorites_DAO($this->db,$data);
    }

}