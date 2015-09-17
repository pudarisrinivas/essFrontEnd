/**
 * Created by narsaiah on 17-09-2015.
 */
var empNo=100;//Number
var empName="john";//String
var isEmp = true;//Boolean
function getEmpSalary()
{
 /* var uname=null;
    if(uname == null || uname == ""){
        alert("User Should not be empty");
    }else if(uname != null){
        alert("Welcome To Dash Borad Mr. "+uname);
    }else{
        alert("who are you");
    }
*/

    //switch
    /*var marks = '65';
    var result;
    switch (marks){

        case '50':
            result="third class";
            break;
        case '60':
            result="second class";
            break;
        case '70':
            result="first class";
            break;
        default:
            result="faild candidate";
    }
    alert(result);*/

    //For loop
   /* for(var i=1;i<=5;i++){
        document.write("N.Of Vistors Visted Today are: "+i);
        document.write("\n");
    }*/

    //while loop
   /* var i=1;
    while(i<=5){
        document.write(i+"</br>");
        i++;
    }*/

    //do-while
    var i=1;
    do{
        document.write(i+"</br>");
        i++;
    }while(i<=3);

/*uname==null?alert("User Name Should n't be empty"):alert("Welcome To Dash Borad Mr. "+uname);*/
}
function empBasic(){
    alert(empNo);

}
function m(){
    window.value=1000;//declaring global variable by window object
}
function n(){
    alert(window.value);//accessing global variable from other function
}

