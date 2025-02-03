<?php

include 'db.php';

class user{

    public $firstName = "";
    public $lastName = "";
    public $email = "";
    public $Upassw = "";

    public function __construct($pdo, $firstName, $lastName, $email, $Upassw){
        try{
            $stmt = $pdo->prepare("INSERT INTO TABLE user(firstName, lastName, email, passw) VALUES(?, ?, ?, ?)");
            $stmt->bindParam(1, $firstName);
            $stmt->bindParam(2, $lastName);
            $stmt->bindParam(3, $email);
            $stmt->bindParam(4, $Upassw);

            $stmt->execute();
            echo json_encode("success");
        }
        catch(PDOException $e){
            echo json_encode("user class Error: ".$e)
        }
    }

}

if($_SERVER['REQUEST_METHOD'] == "POST"){
    if($_POST['info'] == 'signup'){

        signup($_POST['firstName'], $_POST['lastName'], $_POST['email'], $_POST['Upassw']);
    }
}

if($_SERVER['REQUEST_METHOD'] == "GET"){
    if($_GET['info'] == 'login'){

        login($_GET['email'], $_GET['Upassw']);
    }
}

function signup($firstName, $lastName, $email, $Upassw){

    $newUser = new user($firstName, $lastName, $email, $Upassw)
}

function login($pdo, $email, $Upassw){

    try{
        $stmt = $pdo->prepare("SELECT* FROM user WHERE email = ? AND passw = ?");
        $stmt->bindParam(1, $email);
        $stmt->bindParam(2, $Upassw);
        
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if(count($result > 0)){
            echo json_encode('sucess')
        }else{
            echo json_encode('invalid')
        }
    }
    catch(PDOException $e){
        echo json_encode("login Error: ".$e);
    }
}