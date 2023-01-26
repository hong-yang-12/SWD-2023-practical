//မနက် ၈နာရီ ကျော်တာတောင် မထသေးရင် ကြိမ်လုံးနဲ့ နှိုးမည်။
// let wake = prompt("မနက် ဘယ်အချိန်ထလဲ?");

// function wakePunish(wake){
//     return wake<=8 ? "ကြိမ်လုံးစာ မမိသွားဘူး" : "ကြိမ်လုံးစာ မိပါပြီ";
    
// }
// console.log(wakePunish(wake));

//ကျောင်းသွားရင် bus ကား စီးဖို့ ငွေ၂၀၀ သို့ ၂၀၀ အထက် ရှိရမည်။ မဟုတ်ရင် လမ်းလျှောက်ရမည်။
// let pocketMoney = prompt("ပိုက်ဆံ ဘယ်လောက်ပါသလဲ?");

// function goSchool(pocketMoney){
//     return pocketMoney >= 200 ? "Bus ကား စီးလို့ရပြီ။" : "လမ်းလျှောက်ရပါပြီ";
    
// }
// console.log(goSchool(pocketMoney));

//မုန့်ဖိုးတောင်းရင် အသွားစရိတ်ထပ် ပိုတောင်းရမယ် မဟုတ်ရင် စိတ်ကောက်ရပါမယ်။
//အသွားအပြန် စရိတ် = ၄၀၀
// let requestMoney = prompt("မုန့်ဖိုး တောင်းတာ ဘယ်လောက်ပေးလဲ?");

// function getAnnoy(requestMoney){
//     return requestMoney < 400 ? "စိတ်ကောက်ပါပြီ" : "ကျောင်းသွားပြီ";
    
// }
// console.log(getAnnoy(requestMoney));

//၁၀ နာရီအထိ ကျောင်းသားစောင့်မည်။ ကျော်သွားရင် စာစသင်မည်။
// let currentTime = 10;

// function teach(currentTime){
//     return currentTime = 10 ? "စာစသင်ပြီ" : "ကျောင်းသား စောင့်ဆဲ";
    
// }
// console.log(teach(currentTime));

//၁၀တန်းမှာ အမှတ် ၄၀ အောက်ဆိုကျတယ်။ ၄၀ အထက်မှ အောင်တယ်။ ၈၀ ကျော်ရင် ဂုဏ်ထူးထွက်မယ်။
let mark = 100;

function checkPass(mark){
    if(mark < 40){
        console.log("ကျ");
    }
    else if(mark >=40 && mark <= 80){
        console.log("အောင်");
    }
    else{
        console.log("ဂုဏ်ထူး");
    }
}
checkPass(mark);
