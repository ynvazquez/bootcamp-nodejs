function logger(msg){      
    console.log(getMsg(msg) + " " +  new Date().toDateString());
}

function getMsg(str){
    return str.split("=")[1];
}

function init(){  
    logger(process.argv[2]);
}

init();