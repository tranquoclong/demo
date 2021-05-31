/**
 * While
 */

function divice() {
    var num = document.getElementById("inputSoChan").value;
    var content = "";
    //Tạo biến bước nhảy (số lần lặp)
    var count = 0;

    //điều kiện lặp
    //while(điều kiện)
    //Dừng lại khi num nhỏ hơn 1
    while (num > 1) {
        //các xử lý khi thỏa đk
        num = Math.floor(num / 2);
        count++;
        console.log("count:" + count + "-" + "num:" + num);
        // content = content(old) + "count:"+count+"-"+"num:"+num
        content += "<p>count:" + count + "-" + "num:" + num + "</p>";
    }

    document.getElementById("divAler").innerHTML = content;
}

/**
 * Do While
 */
inSo();
function inSo() {
    var count = 1;
    var num = 5;
    do {
        console.log(count);
        count++;
    }
    while (count <= num); //loop sẽ dừng khi count >5
}


function inDauSao() {
    var content = "";
    //for(Khởi tạo;Điều kiện;tăng biến bước nhảy)
    for (var i = 0; i < 5; i++) {
        console.log(i);
        // content = content + "*";
        content += "* ";
    }
    console.log(content);
}
inDauSao();

/**
 * Demo in số chẵn lẻ
 */

function inSoChanLe() {
    var contentChan = "";
    var contentLe = "";
    //Khai báo biến bước nhảy
    //  var i = 1;
    //  while(i < 100){
    //     if(i%2 == 0){
    //         //nếu là số chẵn
    //         // contentChan = contentChan + i + " ";
    //         contentChan += i + " ";
    //     }else{
    //         //ngược lại là số lẻ
    //         contentLe += i + " ";
    //     }
    //     i++;
    //  }

    for (var i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            //nếu là số chẵn
            // contentChan = contentChan + i + " ";
            contentChan += i + " ";
        } else {
            //ngược lại là số lẻ
            contentLe += i + " ";
        }
    }

    document.getElementById("txtChanLe").innerHTML = "Số chẵn: " + contentChan + "<br><br>" + "Số lẻ: " + contentLe;

}

//  document.getElementById("inSo").onclick = inSoChanLe;
// onclick = function(){
//     //hàm 1
//     inSoChanLe();
//     //hàm 2
//     //hàm3
// };

document.getElementById("inSo").addEventListener("click", inSoChanLe);

/**
 * Demo tính tổng số chẵn
 */

function tinhTongSoChan() {
    //n : giá trị lấy từ form của người dùng
    var n = document.getElementById("inputSoN").value;
    var sum = 0;
    // for(var i = 1; i <=n;i++){
    //     if(i%2 == 0){
    //         // sum = sum + i;
    //         sum += i;
    //         console.log(i);
    //     }
    // }

    var i = 1;
    while (i <= n) {
        if (i % 2 == 0) {
            // sum = sum + i;
            sum += i;
            console.log(i);
        }
        i++;
    }
    document.getElementById("txtTongSoChan").innerHTML = sum;
}

document.getElementById("btnTinhTong").onclick = tinhTongSoChan; 

/**
 * Demo vòng lặp lồng
 */

 function demoVongLapLong(){
     var content = "";
     //vòng lớn giúp tạo 5 hàng
     for(var i = 0; i < 5; i++){
         //vòng nhỏ giúp tạo 1 hàng (5 dấu *)
        for(var j = 0;j<5;j++){
            console.log("vòng nhỏ "+j);
            content +="* ";
        }
        //thêm dấu xuống dòng sau khi tạo được 1 hàng
        content += "\n";
     }
    
     console.log(content);
 }
 demoVongLapLong();

 /**
  * Lệnh Break
  */
 testBreak();
function testBreak(){
    console.log("dòng code trước vòng lặp");
    for(var i = 0;i<5;i++){
        console.log(i);
        if(i == 3){
            // break; //thoát khỏi vòng lặp
            // return;
            console.log("dòng code sau break");
        }
    }
    console.log("dòng code sau vòng lặp");
    //lệnh return: là thoát khỏi hàm (những code sau return sẽ không được thực thi)
    return;
    console.log("dòng code sau return");
}

/**
 * continue;
 */
testContinue();
 function testContinue(){
     for(var i =0;i <5;i++){
         if(i == 3){
            continue;
         }
         console.log(i);
     }
 } 