//ရေးဖြေနှုတ်ဖြေ ၂ ခုလုံး ၆၀ ကျော်မှ ကျောင်းဝင်ခွင့်ရမည်။

// function passEntrance(examMark, viperMark){
//     if(examMark >= 60 && viperMark >= 60){
//         return "You passed.";
//     }
//     return "You failed.";
// }
// console.log(passEntrance(60,60));
// console.log(passEntrance(40,60));
// console.log(passEntrance(60,40));
// console.log(passEntrance(40,20));

//Vote ပေးနိုင်ဖို့ အသက် ၁၈ နှင့်အထက်လည်းဖြစ်ရမည်။ နိုင်ငံသားလည်းဖြစ်ရမည်။

// function canVote(age,legal){
//     return age >=18 && legal == "true" ? "မဲပေးနိုင်သည်။" : "မဲမပေးနိုင်သေးပါ။";
// }
// console.log(canVote(18,"true"));
// console.log(canVote(17,"false"));
// console.log(canVote(18,"false"));
// console.log(canVote(12,"true"));

//MMSIT ကျောက်မြောင်း campus ကို မြေနီကုန်းမှလာဖို့ ybs 65 စီးလည်းရောက်တယ်။ ybs 20 စီးလည်းရောက်တယ်။ အခြားကားများ မရောက်ပါ။
// function canIcome(busNo){
//     if(busNo == 65 || busNo == 20){
//         return "U will reach Kyauk Myaung";
//     }
//     return "You can't reach";
// }
// console.log(canIcome(40));
// console.log(canIcome(65));
// console.log(canIcome(21));
// console.log(canIcome(20));

//hotpot စားလည်း ဗိုက်ဝတယ်၊ မာလာရှမ်းကော စားလည်း ဗိုက်ဝတယ်။ ice cream ဗိုက်မဝပါ။
function feelFull(food){
    return food == "hotpot" || food == "မာလာရှမ်းကော" ? "ဗိုက်ဝ" : "ဗိုက်မဝ";
}
console.log(feelFull("မာလာရှမ်းကော"));
console.log(feelFull("hotpot"));
console.log(feelFull("ice cream"));
console.log(feelFull("cake"));
