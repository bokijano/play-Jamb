const add = (a, b) => a + b;

let sumAll = 0;
let sumAll2 = 0;

// FIRST PART results PLAYER ONE
let down1, down2, down3, down4, down5, down6;
let free1, free2, free3, free4, free5, free6;
let up1, up2, up3, up4, up5, up6;
let hand1, hand2, hand3, hand4, hand5, hand6;

let sumFirstPart = 0;

// FIRST PART results PLAYER TWO
let down12, down22, down32, down42, down52, down62;
let free12, free22, free32, free42, free52, free62;
let up12, up22, up32, up42, up52, up62;
let hand12, hand22, hand32, hand42, hand52, hand62;

let sumFirstPart2 = 0;

// collumn down FIRST PLAYER
let play1 = true;
let play2 = false;
let play3 = false;
let play4 = false;
let play5 = false;
let play6 = false;

let playMaxDown = false;

let sumDown = 0;
let columnDown = [];

// collumn down SECOND PLAYER
let play1Sec = true;
let play2Sec = false;
let play3Sec = false;
let play4Sec = false;
let play5Sec = false;
let play6Sec = false;

let playMaxDownSec = false;

let sumDown2 = 0;
let columnDown2 = [];

// column free FIRST PLAYER
let sumFree = 0;
let columnFree = [];

// column free SECOND PLAYER
let sumFree2 = 0;
let columnFree2 = [];

// column up FIRST PLAYER
let play11 = false;
let play22 = false;
let play33 = false;
let play44 = false;
let play55 = false;

let sumUp = 0;
let columnUp = [];

// column up SECOND PLAYER
let play11Sec = false;
let play22Sec = false;
let play33Sec = false;
let play44Sec = false;
let play55Sec = false;

let sumUp2 = 0;
let columnUp2 = [];

// column hand FIRST PLAYER
let sumHand = 0;
let columnHand = [];

// column hand SECOND PLAYER
let sumHand2 = 0;
let columnHand2 = [];



// RESULTS for number ONE
// column DOWN FIRST PLAYER
document.getElementById("downOneValue").title = "Values from 0 to 5!";
function downOne() {
  if (play1) {
    down1 = document.getElementById("downOneValue");
    down1.classList = "result1Down";
    play2 = true;
  }
  play1 = false;
}
let resultOne;
function resultOneDown() {
  resultOne = parseInt(document.getElementById("down1").value);
  document.querySelector(".result1Down").innerHTML = resultOne;
  columnDown.push(resultOne);
  sumDownColumn();
  return resultOne;
}

// column DOWN SECOND PLAYER
document.getElementById("downOneValue2").title = "Values from 0 to 5!";
function downOne2() {
  if (play1Sec) {
    down12 = document.getElementById("downOneValue2");
    down12.classList = "result1Down2";
    play2Sec = true;
  }
  play1Sec = false;
}
let resultOne2;
function resultOneDown2() {
  resultOne2 = parseInt(document.getElementById("down12").value);
  document.querySelector(".result1Down2").innerHTML = resultOne2;
  columnDown2.push(resultOne2);
  sumDownColumn2();
  return resultOne2;
}


// column FREE FIRST PLAYER
document.getElementById("freeOneValue").title = "Values from 0 to 5!";
function freeOne() {
  free1 = document.getElementById("freeOneValue");
  free1.classList = "result1Free";
}
let resultFreeOne = 0;
function resultOneFree() {
  resultFreeOne = parseInt(document.getElementById("free1").value);
  document.querySelector(".result1Free").innerHTML = resultFreeOne;
  columnFree.push(resultFreeOne);
  sumFreeColumn();
  if (minResFree !== 0 && maxResFree !== 0) {
    multiplyResFree();
    sumPartTwo();
  } 
  return resultFreeOne;
}

// column FREE SECOND PLAYER
document.getElementById("freeOneValue2").title = "Values from 0 to 5!";
function freeOne2() {
  free12 = document.getElementById("freeOneValue2");
  free12.classList = "result1Free2";
}
let resultFreeOne2 = 0;
function resultOneFree2() {
  resultFreeOne2 = parseInt(document.getElementById("free12").value);
  document.querySelector(".result1Free2").innerHTML = resultFreeOne2;
  columnFree2.push(resultFreeOne2);
  sumFreeColumn2();
  if (minResFree2 !== 0 && maxResFree2 !== 0) {
    multiplyResFree2();
    sumPartTwo2();
  } 
  return resultFreeOne2;
}


// column UP FIRST PLAYER
document.getElementById("upOneValue").title = "Values from 0 to 5!";
function upOne() {
  if (play11) {
  up1 = document.getElementById("upOneValue");
  up1.classList = "result1Up";
  }
  play11 = false;
}
let resultUpOne;
function resultOneUp() {
  resultUpOne = parseInt(document.getElementById("up1").value);
  document.querySelector(".result1Up").innerHTML = resultUpOne;
  columnUp.push(resultUpOne);
  sumUpColumn();
  document.querySelector(".mulUp1").textContent = multiplyResUp();
  sumPartTwo();
  return resultUpOne;
}

// column UP SECOND PLAYER
document.getElementById("upOneValue2").title = "Values from 0 to 5!";
function upOne2() {
  if (play11Sec) {
  up12 = document.getElementById("upOneValue2");
  up12.classList = "result1Up2";
  }
  play11Sec = false;
}
let resultUpOne2;
function resultOneUp2() {
  resultUpOne2 = parseInt(document.getElementById("up12").value);
  document.querySelector(".result1Up2").innerHTML = resultUpOne2;
  columnUp2.push(resultUpOne2);
  sumUpColumn2();
  document.querySelector(".mulUp12").textContent = multiplyResUp2();
  sumPartTwo2();
  return resultUpOne2;
}


// column HAND FIRST PLAYER
document.getElementById("handOneValue").title = "Values from 0 to 5!";
function handOne() {
  hand1 = document.getElementById("handOneValue");
  hand1.classList = "result1Hand";
}
let resultHandOne = 0;
function resultOneHand() {
  resultHandOne = parseInt(document.getElementById("hand1").value);
  document.querySelector(".result1Hand").innerHTML = resultHandOne;
  columnHand.push(resultHandOne);
  sumHandColumn();
  if (minResHand !== 0 && maxResHand !== 0) {
    multiplyResHand();
    sumPartTwo();
  } 
  return resultHandOne;
}

// column HAND SECOND PLAYER
document.getElementById("handOneValue2").title = "Values from 0 to 5!";
function handOne2() {
  hand12 = document.getElementById("handOneValue2");
  hand12.classList = "result1Hand2";
}
let resultHandOne2 = 0;
function resultOneHand2() {
  resultHandOne2 = parseInt(document.getElementById("hand12").value);
  document.querySelector(".result1Hand2").innerHTML = resultHandOne2;
  columnHand2.push(resultHandOne2);
  sumHandColumn2();
  if (minResHand2 !== 0 && maxResHand2 !== 0) {
    multiplyResHand2();
    sumPartTwo2();
  } 
  return resultHandOne2;
}
// END of the result for number ONE


// RESULT for number two
// column down FIRST PLAYER
document.getElementById("downTwoValue").title = "Values: 0, 2, 4, 6, 8, 10!";
function downTwo() {
  if (play2) {
    down2 = document.getElementById("downTwoValue");
    down2.classList = "result2Down";
    play3 = true;
  }
  play2 = false;
}

function resultTwoDown() {
  let resultTwo = parseInt(document.getElementById("down2").value);
  document.querySelector(".result2Down").innerHTML = resultTwo;
  columnDown.push(resultTwo);
  sumDownColumn();
}

// column down SECOND PLAYER
document.getElementById("downTwoValue2").title = "Values: 0, 2, 4, 6, 8, 10!";
function downTwo2() {
  if (play2Sec) {
    down22 = document.getElementById("downTwoValue2");
    down22.classList = "result2Down2";
    play3Sec = true;
  }
  play2Sec = false;
}

function resultTwoDown2() {
  let resultTwo = parseInt(document.getElementById("down22").value);
  document.querySelector(".result2Down2").innerHTML = resultTwo;
  columnDown2.push(resultTwo);
  sumDownColumn2();
}


// column free FIRST PLAYER
document.getElementById("freeTwoValue").title = "Values: 0, 2, 4, 6, 8, 10!";
function freeTwo() {
  free2 = document.getElementById("freeTwoValue");
  free2.classList = "result2Free";
}

function resultTwoFree() {
  let resultTwo = parseInt(document.getElementById("free2").value);
  document.querySelector(".result2Free").innerHTML = resultTwo;
  columnFree.push(resultTwo);
  sumFreeColumn();
}

// column free SECOND PLAYER
document.getElementById("freeTwoValue2").title = "Values: 0, 2, 4, 6, 8, 10!";
function freeTwo2() {
  free22 = document.getElementById("freeTwoValue2");
  free22.classList = "result2Free2";
}

function resultTwoFree2() {
  let resultTwo = parseInt(document.getElementById("free22").value);
  document.querySelector(".result2Free2").innerHTML = resultTwo;
  columnFree2.push(resultTwo);
  sumFreeColumn2();
}


// column up FIRST PLAYER
document.getElementById("upTwoValue").title = "Values: 0, 2, 4, 6, 8, 10!";
function upTwo() {
  if (play22) {
    up2 = document.getElementById("upTwoValue");
    up2.classList = "result2Up";
    play11 = true;
  }
  play22 = false;
}

function resultTwoUp() {
  let resultTwo = parseInt(document.getElementById("up2").value);
  document.querySelector(".result2Up").innerHTML = resultTwo;
  columnUp.push(resultTwo);
  sumUpColumn();
}

// column up SECOND PLAYER
document.getElementById("upTwoValue2").title = "Values: 0, 2, 4, 6, 8, 10!";
function upTwo2() {
  if (play22Sec) {
    up22 = document.getElementById("upTwoValue2");
    up22.classList = "result2Up2";
    play11Sec = true;
  }
  play22Sec = false;
}

function resultTwoUp2() {
  let resultTwo = parseInt(document.getElementById("up22").value);
  document.querySelector(".result2Up2").innerHTML = resultTwo;
  columnUp2.push(resultTwo);
  sumUpColumn2();
}


// column hand FIRST PLAYER
document.getElementById("handTwoValue").title = "Values: 0, 2, 4, 6, 8, 10!";
function handTwo() {
  hand2 = document.getElementById("handTwoValue");
  hand2.classList = "result2Hand";
}

function resultTwoHand() {
  let resultTwo = parseInt(document.getElementById("hand2").value);
  document.querySelector(".result2Hand").innerHTML = resultTwo;
  columnHand.push(resultTwo);
  sumHandColumn();
}

// column hand SECOND PLAYER
document.getElementById("handTwoValue2").title = "Values: 0, 2, 4, 6, 8, 10!";
function handTwo2() {
  hand22 = document.getElementById("handTwoValue2");
  hand22.classList = "result2Hand2";
}

function resultTwoHand2() {
  let resultTwo2 = parseInt(document.getElementById("hand22").value);
  document.querySelector(".result2Hand2").innerHTML = resultTwo2;
  columnHand2.push(resultTwo2);
  sumHandColumn2();
}
// END of the result for number TWO


// RESULT for number three
//column DOWN FIRST PLAYER
document.getElementById("downThreeValue").title = "Values: 0, 3, 6, 9, 12, 15!";
function downThree() {
  if (play3) {
    down3 = document.getElementById("downThreeValue");
    down3.classList = "result3Down";
    play4 = true;
  }
  play3 = false;
}

function resultThreeDown() {
  let resultThree = parseInt(document.getElementById("down3").value);
  document.querySelector(".result3Down").innerHTML = resultThree;
  columnDown.push(resultThree);
  sumDownColumn();
}

//column DOWN SECOND PLAYER
document.getElementById("downThreeValue2").title = "Values: 0, 3, 6, 9, 12, 15!";
function downThree2() {
  if (play3Sec) {
    down32 = document.getElementById("downThreeValue2");
    down32.classList = "result3Down2";
    play4Sec = true;
  }
  play3Sec = false;
}

function resultThreeDown2() {
  let resultThree = parseInt(document.getElementById("down32").value);
  document.querySelector(".result3Down2").innerHTML = resultThree;
  columnDown2.push(resultThree);
  sumDownColumn2();
}


//column FREE FIRST PLAYER
document.getElementById("freeThreeValue").title = "Values: 0, 3, 6, 9, 12, 15!";
function freeThree() {
  free3 = document.getElementById("freeThreeValue");
  free3.classList = "result3Free";
}

function resultThreeFree() {
  let resultThree = parseInt(document.getElementById("free3").value);
  document.querySelector(".result3Free").innerHTML = resultThree;
  columnFree.push(resultThree);
  sumFreeColumn();
}

//column FREE SECOND PLAYER
document.getElementById("freeThreeValue2").title = "Values: 0, 3, 6, 9, 12, 15!";
function freeThree2() {
  free32 = document.getElementById("freeThreeValue2");
  free32.classList = "result3Free2";
}

function resultThreeFree2() {
  let resultThree = parseInt(document.getElementById("free32").value);
  document.querySelector(".result3Free2").innerHTML = resultThree;
  columnFree2.push(resultThree);
  sumFreeColumn2();
}

//column UP FIRST PLAYER
document.getElementById("upThreeValue").title = "Values: 0, 3, 6, 9, 12, 15!";
function upThree() {
  if (play33) {
     up3 = document.getElementById("upThreeValue");
     up3.classList = "result3Up";
     play22 = true;
  }
  play33 = false;
}

function resultThreeUp() {
  let resultThree = parseInt(document.getElementById("up3").value);
  document.querySelector(".result3Up").innerHTML = resultThree;
  columnUp.push(resultThree);
  sumUpColumn();
}

//column UP SECOND PLAYER
document.getElementById("upThreeValue2").title = "Values: 0, 3, 6, 9, 12, 15!";
function upThree2() {
  if (play33Sec) {
     up32 = document.getElementById("upThreeValue2");
     up32.classList = "result3Up2";
     play22Sec = true;
  }
  play33Sec = false;
}

function resultThreeUp2() {
  let resultThree = parseInt(document.getElementById("up32").value);
  document.querySelector(".result3Up2").innerHTML = resultThree;
  columnUp2.push(resultThree);
  sumUpColumn2();
}


//column HAND FIRST PLAYER
document.getElementById("handThreeValue").title = "Values: 0, 3, 6, 9, 12, 15!";
function handThree() {
  hand3 = document.getElementById("handThreeValue");
  hand3.classList = "result3Hand";
}

function resultThreeHand() {
  let resultThree = parseInt(document.getElementById("hand3").value);
  document.querySelector(".result3Hand").innerHTML = resultThree;
  columnHand.push(resultThree);
  sumHandColumn();
}

//column HAND SECOND PLAYER
document.getElementById("handThreeValue2").title = "Values: 0, 3, 6, 9, 12, 15!";
function handThree2() {
  hand32 = document.getElementById("handThreeValue2");
  hand32.classList = "result3Hand2";
}

function resultThreeHand2() {
  let resultThree2 = parseInt(document.getElementById("hand32").value);
  document.querySelector(".result3Hand2").innerHTML = resultThree2;
  columnHand2.push(resultThree2);
  sumHandColumn2();
}
// END of the result for number THREE

// RESULTS for number four
// column down FIRST PLAYER
document.getElementById("downFourValue").title = "Values: 0, 4, 8, 12, 16, 20!";
function downFour() {
  if (play4) {
    down4 = document.getElementById("downFourValue");
    down4.classList = "result4Down";
    play5 = true;
  }
  play4 = false;
}

function resultFourDown() {
  let resultFour = parseInt(document.getElementById("down4").value);
  document.querySelector(".result4Down").innerHTML = resultFour;
  columnDown.push(resultFour);
  sumDownColumn();
}

// column down SECOND PLAYER
document.getElementById("downFourValue2").title = "Values: 0, 4, 8, 12, 16, 20!";
function downFour2() {
  if (play4Sec) {
    down42 = document.getElementById("downFourValue2");
    down42.classList = "result4Down2";
    play5Sec = true;
  }
  play4Sec = false;
}

function resultFourDown2() {
  let resultFour2 = parseInt(document.getElementById("down42").value);
  document.querySelector(".result4Down2").innerHTML = resultFour2;
  columnDown2.push(resultFour2);
  sumDownColumn2();
}


//column free FIRST PLAYER
document.getElementById("freeFourValue").title = "Values: 0, 4, 8, 12, 16, 20!";
function freeFour() {
    free4 = document.getElementById("freeFourValue");
    free4.classList = "result4Free";
}

function resultFourFree() {
  let resultFour = parseInt(document.getElementById("free4").value);
  document.querySelector(".result4Free").innerHTML = resultFour;
  columnFree.push(resultFour);
  sumFreeColumn();
}

//column free SECOND PLAYER
document.getElementById("freeFourValue2").title = "Values: 0, 4, 8, 12, 16, 20!";
function freeFour2() {
    free42 = document.getElementById("freeFourValue2");
    free42.classList = "result4Free2";
}

function resultFourFree2() {
  let resultFour2 = parseInt(document.getElementById("free42").value);
  document.querySelector(".result4Free2").innerHTML = resultFour2;
  columnFree2.push(resultFour2);
  sumFreeColumn2();
}


//column up FIRST PLAYER
document.getElementById("upFourValue").title = "Values: 0, 4, 8, 12, 16, 20!";
function upFour() {
  if (play44) {
    up4 = document.getElementById("upFourValue");
    up4.classList = "result4Up";
    play33 = true;
  }
  play44 = false;
}

function resultFourUp() {
  let resultFour = parseInt(document.getElementById("up4").value);
  document.querySelector(".result4Up").innerHTML = resultFour;
  columnUp.push(resultFour);
  sumUpColumn();
}

//column up SECOND PLAYER
document.getElementById("upFourValue2").title = "Values: 0, 4, 8, 12, 16, 20!";
function upFour2() {
  if (play44Sec) {
    up42 = document.getElementById("upFourValue2");
    up42.classList = "result4Up2";
    play33Sec = true;
  }
  play44Sec = false;
}

function resultFourUp2() {
  let resultFour2 = parseInt(document.getElementById("up42").value);
  document.querySelector(".result4Up2").innerHTML = resultFour2;
  columnUp2.push(resultFour2);
  sumUpColumn2();
}


//column hand FIRST PLAYER
document.getElementById("handFourValue").title = "Values: 0, 4, 8, 12, 16, 20!";
function handFour() {
    hand4 = document.getElementById("handFourValue");
    hand4.classList = "result4Hand";
}

function resultFourHand() {
  let resultFour = parseInt(document.getElementById("hand4").value);
  document.querySelector(".result4Hand").innerHTML = resultFour;
  columnHand.push(resultFour);
  sumHandColumn();
}

//column hand SECOND PLAYER
document.getElementById("handFourValue2").title = "Values: 0, 4, 8, 12, 16, 20!";
function handFour2() {
    hand42 = document.getElementById("handFourValue2");
    hand42.classList = "result4Hand2";
}

function resultFourHand2() {
  let resultFour2 = parseInt(document.getElementById("hand42").value);
  document.querySelector(".result4Hand2").innerHTML = resultFour2;
  columnHand2.push(resultFour2);
  sumHandColumn2();
}
// END of the result for number FOUR

// RESULTS for number five
// column down FIRST PLAYER
document.getElementById("downFiveValue").title =
  "Values: 0, 5, 10, 15, 20, 25!";
function downFive() {
  if (play5) {
    down5 = document.getElementById("downFiveValue");
    down5.classList = "result5Down";
    play6 = true;
  }
  play5 = false;
}

function resultFiveDown() {
  let resultFive = parseInt(document.getElementById("down5").value);
  document.querySelector(".result5Down").innerHTML = resultFive;
  columnDown.push(resultFive);
  sumDownColumn();
}

// column down SECOND PLAYER
document.getElementById("downFiveValue2").title =
  "Values: 0, 5, 10, 15, 20, 25!";
function downFive2() {
  if (play5Sec) {
    down52 = document.getElementById("downFiveValue2");
    down52.classList = "result5Down2";
    play6Sec = true;
  }
  play5Sec = false;
}

function resultFiveDown2() {
  let resultFive = parseInt(document.getElementById("down52").value);
  document.querySelector(".result5Down2").innerHTML = resultFive;
  columnDown2.push(resultFive);
  sumDownColumn2();
}


// column free FIRST PLAYER 
document.getElementById("freeFiveValue").title =
  "Values: 0, 5, 10, 15, 20, 25!";
function freeFive() {
    free5 = document.getElementById("freeFiveValue");
    free5.classList = "result5Free";
}

function resultFiveFree() {
  let resultFive = parseInt(document.getElementById("free5").value);
  document.querySelector(".result5Free").innerHTML = resultFive;
  columnFree.push(resultFive);
  sumFreeColumn();
}

// column free SECOND PLAYER 
document.getElementById("freeFiveValue2").title =
  "Values: 0, 5, 10, 15, 20, 25!";
function freeFive2() {
    free52 = document.getElementById("freeFiveValue2");
    free52.classList = "result5Free2";
}

function resultFiveFree2() {
  let resultFive = parseInt(document.getElementById("free52").value);
  document.querySelector(".result5Free2").innerHTML = resultFive;
  columnFree2.push(resultFive);
  sumFreeColumn2();
}


// column up FIRST PLAYER
document.getElementById("upFiveValue").title =
  "Values: 0, 5, 10, 15, 20, 25!";
function upFive() {
  if (play55) {
    up5 = document.getElementById("upFiveValue");
    up5.classList = "result5Up";
    play44 = true;
  }
  play55 = false;
}

function resultFiveUp() {
  let resultFive = parseInt(document.getElementById("up5").value);
  document.querySelector(".result5Up").innerHTML = resultFive;
  columnUp.push(resultFive);
  sumUpColumn();
}

// column up SECOND PLAYER
document.getElementById("upFiveValue2").title =
  "Values: 0, 5, 10, 15, 20, 25!";
function upFive2() {
  if (play55Sec) {
    up52 = document.getElementById("upFiveValue2");
    up52.classList = "result5Up2";
    play44Sec = true;
  }
  play55Sec = false;
}

function resultFiveUp2() {
  let resultFive = parseInt(document.getElementById("up52").value);
  document.querySelector(".result5Up2").innerHTML = resultFive;
  columnUp2.push(resultFive);
  sumUpColumn2();
}


// column hand FIRST PLAYER
document.getElementById("handFiveValue").title =
  "Values: 0, 5, 10, 15, 20, 25!";
function handFive() {
    hand5 = document.getElementById("handFiveValue");
    hand5.classList = "result5Hand";
}

function resultFiveHand() {
  let resultFive = parseInt(document.getElementById("hand5").value);
  document.querySelector(".result5Hand").innerHTML = resultFive;
  columnHand.push(resultFive);
  sumHandColumn();
}

// column hand FIRST PLAYER
document.getElementById("handFiveValue2").title =
  "Values: 0, 5, 10, 15, 20, 25!";
function handFive2() {
    hand52 = document.getElementById("handFiveValue2");
    hand52.classList = "result5Hand2";
}

function resultFiveHand2() {
  let resultFive = parseInt(document.getElementById("hand52").value);
  document.querySelector(".result5Hand2").innerHTML = resultFive;
  columnHand2.push(resultFive);
  sumHandColumn2();
}
// END of the result for number FIVE

// RESULTS for number six
// column down FIRST PLAYER
document.getElementById("downSixValue").title = "Values: 0, 6, 12, 18, 24, 30!";
function downSix() {
  if (play6) {
    down6 = document.getElementById("downSixValue");
    down6.classList = "result6Down";
    playMaxDown = true;
  }
  play6 = false;
}

function resultSixDown() {
  let resultSix = parseInt(document.getElementById("down6").value);
  document.querySelector(".result6Down").innerHTML = resultSix;
  columnDown.push(resultSix);
  sumDownColumn();
}

// column down SECOND PLAYER
document.getElementById("downSixValue2").title = "Values: 0, 6, 12, 18, 24, 30!";
function downSix2() {
  if (play6Sec) {
    down62 = document.getElementById("downSixValue2");
    down62.classList = "result6Down2";
    playMaxDownSec = true;
  }
  play6Sec = false;
}

function resultSixDown2() {
  let resultSix = parseInt(document.getElementById("down62").value);
  document.querySelector(".result6Down2").innerHTML = resultSix;
  columnDown2.push(resultSix);
  sumDownColumn2();
}

// column free FIRST PLAYER
document.getElementById("freeSixValue").title = "Values: 0, 6, 12, 18, 24, 30!";
function freeSix() {
    free6 = document.getElementById("freeSixValue");
    free6.classList = "result6Free";
}

function resultSixFree() {
  let resultSix = parseInt(document.getElementById("free6").value);
  document.querySelector(".result6Free").innerHTML = resultSix;
  columnFree.push(resultSix);
  sumFreeColumn();
}

// column free SECOND PLAYER
document.getElementById("freeSixValue2").title = "Values: 0, 6, 12, 18, 24, 30!";
function freeSix2() {
    free62 = document.getElementById("freeSixValue2");
    free62.classList = "result6Free2";
}

function resultSixFree2() {
  let resultSix = parseInt(document.getElementById("free62").value);
  document.querySelector(".result6Free2").innerHTML = resultSix;
  columnFree2.push(resultSix);
  sumFreeColumn2();
}

// column up FIRST PLAYER
document.getElementById("upSixValue").title = "Values: 0, 6, 12, 18, 24, 30!";
function upSix() {
  if (play66) {
    up6 = document.getElementById("upSixValue");
    up6.classList = "result6Up";
    play55 = true;
  }
  play66 = false;
}

function resultSixUp() {
  let resultSix = parseInt(document.getElementById("up6").value);
  document.querySelector(".result6Up").innerHTML = resultSix;
  columnUp.push(resultSix);
  sumUpColumn();
}

// column up SECOND PLAYER
document.getElementById("upSixValue2").title = "Values: 0, 6, 12, 18, 24, 30!";
function upSix2() {
  if (play66Sec) {
    up62 = document.getElementById("upSixValue2");
    up62.classList = "result6Up2";
    play55Sec = true;
  }
  play66Sec = false;
}

function resultSixUp2() {
  let resultSix = parseInt(document.getElementById("up62").value);
  document.querySelector(".result6Up2").innerHTML = resultSix;
  columnUp2.push(resultSix);
  sumUpColumn2();
}


// column hand FIRST PLAYER
document.getElementById("handSixValue").title = "Values: 0, 6, 12, 18, 24, 30!";
function handSix() {
    hand6 = document.getElementById("handSixValue");
    hand6.classList = "result6Hand";
}

function resultSixHand() {
  let resultSix = parseInt(document.getElementById("hand6").value);
  document.querySelector(".result6Hand").innerHTML = resultSix;
  columnHand.push(resultSix);
  sumHandColumn();
}

// column hand SECOND PLAYER
document.getElementById("handSixValue2").title = "Values: 0, 6, 12, 18, 24, 30!";
function handSix2() {
    hand62 = document.getElementById("handSixValue2");
    hand62.classList = "result6Hand2";
}

function resultSixHand2() {
  let resultSix = parseInt(document.getElementById("hand62").value);
  document.querySelector(".result6Hand2").innerHTML = resultSix;
  columnHand2.push(resultSix);
  sumHandColumn2();
}
// END of the result for number SIX

// SUM OF FIRST PART
// sum of column down FIRST PLAYER
function sumDownColumn() {
  sumDown = columnDown.reduce(add);
  sumDown >= 60 ? (sumDown = sumDown + 30) : (sumDown = sumDown);
  document.querySelector(".sumDownFirst").innerHTML = sumDown;
  sumPartOne();
  sumAllResult();
}

function sumDownColumn2() {
  sumDown2 = columnDown2.reduce(add);
  sumDown2 >= 60 ? (sumDown2 = sumDown2 + 30) : (sumDown2 = sumDown2);
  document.querySelector(".sumDownFirst2").innerHTML = sumDown2;
  sumPartOne2();
  sumAllResult2();
}


// sum of column free FISRT PLAYER
function sumFreeColumn() {
  sumFree = columnFree.reduce(add);
  sumFree >= 60 ? (sumFree = sumFree + 30) : (sumFree = sumFree);
  document.querySelector(".sumFreeFirst").innerHTML = sumFree;
  sumPartOne();
  sumAllResult();
}

// sum of column free SECOND PLAYER
function sumFreeColumn2() {
  sumFree2 = columnFree2.reduce(add);
  sumFree2 >= 60 ? (sumFree2 = sumFree2 + 30) : (sumFree2 = sumFree2);
  document.querySelector(".sumFreeFirst2").innerHTML = sumFree2;
  sumPartOne2();
  sumAllResult2();
}


// sum of column up FIRST PLAYER
function sumUpColumn() {
  sumUp = columnUp.reduce(add);
  sumUp >= 60 ? (sumUp = sumUp + 30) : (sumUp = sumUp);
  document.querySelector(".sumUpFirst").innerHTML = sumUp;
  sumPartOne();
  sumAllResult();
}

// sum of column up SECOND PLAYER
function sumUpColumn2() {
  sumUp2 = columnUp2.reduce(add);
  sumUp2 >= 60 ? (sumUp2 = sumUp2 + 30) : (sumUp2 = sumUp2);
  document.querySelector(".sumUpFirst2").innerHTML = sumUp2;
  sumPartOne2();
  sumAllResult2();
}


// sum of column hand FIRST PLAYER
function sumHandColumn() {
  sumHand = columnHand.reduce(add);
  sumHand >= 60 ? (sumHand = sumHand + 30) : (sumHand = sumHand);
  document.querySelector(".sumHandFirst").innerHTML = sumHand;
  sumPartOne();
  sumAllResult();
}

// sum of column hand SECOND PLAYER
function sumHandColumn2() {
  sumHand2 = columnHand2.reduce(add);
  sumHand2 >= 60 ? (sumHand22 = sumHand + 30) : (sumHand2 = sumHand2);
  document.querySelector(".sumHandFirst2").innerHTML = sumHand2;
  sumPartOne2();
  sumAllResult2();
}


// sum of the first part FIRST PLAYER
function sumPartOne() {
  sumFirstPart =
    parseInt(sumDown) + parseInt(sumFree) + parseInt(sumUp) + parseInt(sumHand);
  document.querySelector(".sumAllFirst").innerHTML = sumFirstPart;
}

// sum of the first part SECOND PLAYER
function sumPartOne2() {
  sumFirstPart2 =
    parseInt(sumDown2) + parseInt(sumFree2) + parseInt(sumUp2) + parseInt(sumHand2);
  document.querySelector(".sumAllFirst2").innerHTML = sumFirstPart2;
}
// END of the FIRST PART



// SECOND PART

// second part player ONE
let sumSecondPart = 0;
let secondPartResult = [];

// maximum and minimum down part
let maxDown, minDown;
let maxRes, minRes;
let mulRes = 0;

let playMinDown = false;

let playKenta = false;

// second part player TWO
let sumSecondPart2 = 0;
let secondPartResult2 = [];

// maximum and minimum down part
let maxDown2, minDown2;
let maxRes2, minRes2;
let mulRes2 = 0;

let playMinDownSec = false;

let playKentaSec = false;


// maximum result down FIRST PLAYER
document.getElementById("downMaximum").title =
  "Minimum value: 5, Maximum value: 30";
function downMax() {
  if (playMaxDown) {
    x1 = document.getElementById("downMaximum");
    x1.classList = "res1";
    playMinDown = true;
  }
  playMaxDown = false;
}
function maxResult() {
  maxRes = document.getElementById("maximumDown").value;
  document.querySelector(".res1").textContent = maxRes;
}

// maximum result down SECOND PLAYER
document.getElementById("downMaximum2").title =
  "Minimum value: 5, Maximum value: 30";
function downMax2() {
  if (playMaxDownSec) {
    x12 = document.getElementById("downMaximum2");
    x12.classList = "res12";
    playMinDownSec = true;
  }
  playMaxDownSec = false;
}
function maxResult2() {
  maxRes2 = document.getElementById("maximumDown2").value;
  document.querySelector(".res12").textContent = maxRes2;
}


// minimum and multiply result down FIRST PLAYER
document.getElementById("downMinimum").title =
  "Minimum value: 5, Maximum value: 30";
function downMin() {
  if (playMinDown) {
    x2 = document.getElementById("downMinimum");
    x2.classList = "res2";
  }
  playMinDown = false;
}

function minResultDown() {
  minRes = document.getElementById("minimumDown").value;
  document.querySelector(".res2").textContent = minRes;
  document.querySelector(".mulDown1").textContent = multiplyRes();

  sumPartTwo();
  playKenta = true;
}

function multiplyRes() {
  mulRes = (maxRes - minRes) * parseInt(document.getElementById("down1").value);
  return mulRes;
}

// minimum and multiply result down SECOND PLAYER
document.getElementById("downMinimum2").title =
  "Minimum value: 5, Maximum value: 30";
function downMin2() {
  if (playMinDownSec) {
    x22 = document.getElementById("downMinimum2");
    x22.classList = "res22";
  }
  playMinDownSec = false;
}

function minResultDown2() {
  minRes2 = document.getElementById("minimumDown2").value;
  document.querySelector(".res22").textContent = minRes2;
  document.querySelector(".mulDown12").textContent = multiplyRes2();

  sumPartTwo2();
  playKentaSec = true;
}

function multiplyRes2() {
  mulRes2 = (maxRes2 - minRes2) * parseInt(document.getElementById("down12").value);
  return mulRes2;
}
// end of down part

// free part FIRST PLAYER 
let maxResFree = 0;
let minResFree = 0;
let mulResFree = 0;

// free part FIRST PLAYER 
let maxResFree2 = 0;
let minResFree2 = 0;
let mulResFree2 = 0;


// maximum result free FIRST PLAYER
document.getElementById("freeMaximum").title =
  "Minimum value: 5, Maximum value: 30";
function freeMax() {
    x1 = document.getElementById("freeMaximum");
    x1.classList = "res1Free";
}
function maxResultFree() {
  maxResFree = document.getElementById("maximumFree").value;
  document.querySelector(".res1Free").textContent = maxResFree;

  if (minResFree !== 0 && resultFreeOne !== 0) {
    multiplyResFree();
    sumPartTwo();
  } 
  return maxResFree;
}

// maximum result free SECOND PLAYER
document.getElementById("freeMaximum2").title =
  "Minimum value: 5, Maximum value: 30";
function freeMax2() {
    x12 = document.getElementById("freeMaximum2");
    x12.classList = "res1Free2";
}
function maxResultFree2() {
  maxResFree2 = document.getElementById("maximumFree2").value;
  document.querySelector(".res1Free2").textContent = maxResFree2;

  if (minResFree2 !== 0 && resultFreeOne2 !== 0) {
    multiplyResFree2();
    sumPartTwo2();
  } 
  return maxResFree2;
}


// minimum and multiply result free FIRST PLAYER
document.getElementById("freeMinimum").title =
  "Minimum value: 5, Maximum value: 30";
function freeMin() {
    x2 = document.getElementById("freeMinimum");
    x2.classList = "res2Free";
}

function minResultFree() {
  minResFree = document.getElementById("minimumFree").value;
  document.querySelector(".res2Free").textContent = minResFree;
    
  if (maxResFree !== 0 && resultFreeOne !== 0) {
    multiplyResFree();
    sumPartTwo();
  }
  return minResFree;    
}
function multiplyResFree() {
  mulResFree = (maxResFree - minResFree) * parseInt(document.getElementById("free1").value);
  document.querySelector(".mulFree1").textContent = mulResFree;
  return mulResFree;
}

// minimum and multiply result free SECOND PLAYER
document.getElementById("freeMinimum2").title =
  "Minimum value: 5, Maximum value: 30";
function freeMin2() {
    x2 = document.getElementById("freeMinimum2");
    x2.classList = "res2Free2";
}

function minResultFree2() {
  minResFree2 = document.getElementById("minimumFree2").value;
  document.querySelector(".res2Free2").textContent = minResFree2;
    
  if (maxResFree2 !== 0 && resultFreeOne2 !== 0) {
    multiplyResFree2();
    sumPartTwo2();
  }
  return minResFree2;    
}
function multiplyResFree2() {
  mulResFree2 = (maxResFree2 - minResFree2) * parseInt(document.getElementById("free12").value);
  document.querySelector(".mulFree12").textContent = mulResFree2;
  return mulResFree2;
}
// END of free maximum and minimum results


// up part FIRST PLAYER 
let maxUp, minUp;
let maxResUp, minResUp;
let mulResUp = 0;

let play66 = false;
let playMaxUp = false;

// up part SECOND PLAYER 
let maxUp2, minUp2;
let maxResUp2, minResUp2;
let mulResUp2 = 0;

let play66Sec = false;
let playMaxUpSec = false;


// maximum result up FIRST PLAYER
document.getElementById("upMaximum").title =
  "Minimum value: 5, Maximum value: 30";
function upMax() {
  if (playMaxUp) {
    x1 = document.getElementById("upMaximum");
    x1.classList = "res1Up";
    play66= true;
  }
   playMaxUp = false;
}
function maxResultUp() {
  maxResUp = document.getElementById("maximumUp").value;
  document.querySelector(".res1Up").textContent = maxResUp;
}

// maximum result up SECOND PLAYER
document.getElementById("upMaximum2").title =
  "Minimum value: 5, Maximum value: 30";
function upMax2() {
  if (playMaxUpSec) {
    x1 = document.getElementById("upMaximum2");
    x1.classList = "res1Up2";
    play66Sec= true;
  }
   playMaxUpSec = false;
}
function maxResultUp2() {
  maxResUp2 = document.getElementById("maximumUp2").value;
  document.querySelector(".res1Up2").textContent = maxResUp2;
}


// minimum and multiply results up FIRST PLAYER
document.getElementById("upMinimum").title =
  "Minimum value: 5, Maximum value: 30";
function upMin() {
  if (playMinUp) {
    x2 = document.getElementById("upMinimum");
    x2.classList = "res2Up";
    playMaxUp = true;  
  }
  playMinUp = false;
}

function minResultUp() {
  minResUp = document.getElementById("minimumUp").value;
  document.querySelector(".res2Up").textContent = minResUp;
}

function multiplyResUp() {
  mulResUp = (maxResUp - minResUp) * parseInt(document.getElementById("up1").value);
  return mulResUp;
}

// minimum and multiply results up SECOND PLAYER
document.getElementById("upMinimum2").title =
  "Minimum value: 5, Maximum value: 30";
function upMin2() {
  if (playMinUpSec) {
    x2 = document.getElementById("upMinimum2");
    x2.classList = "res2Up2";
    playMaxUpSec = true;  
  }
  playMinUpSec = false;
}

function minResultUp2() {
  minResUp2 = document.getElementById("minimumUp2").value;
  document.querySelector(".res2Up2").textContent = minResUp2;
}

function multiplyResUp2() {
  mulResUp2 = (maxResUp2 - minResUp2) * parseInt(document.getElementById("up12").value);
  return mulResUp2;
}


// hand part PLAYER ONE
let maxResHand = 0;
let minResHand = 0;
let mulResHand = 0;

// hand part SECOND ONE
let maxResHand2 = 0;
let minResHand2 = 0;
let mulResHand2 = 0;

// maximum result hand FIRST PLAYER
document.getElementById("handMaximum").title =
  "Minimum value: 5, Maximum value: 30";
function handMax() {
    x1 = document.getElementById("handMaximum");
    x1.classList = "res1Hand";
}
function maxResultHand() {
  maxResHand = document.getElementById("maximumHand").value;
  document.querySelector(".res1Hand").textContent = maxResHand;

  if (minResHand !== 0 && resultHandOne !== 0) {
    multiplyResHand();
    sumPartTwo();
  } 
  return maxResHand;
}

// maximum result hand SECOND PLAYER
document.getElementById("handMaximum2").title =
  "Minimum value: 5, Maximum value: 30";
function handMax2() {
    x1 = document.getElementById("handMaximum2");
    x1.classList = "res1Hand2";
}
function maxResultHand2() {
  maxResHand2 = document.getElementById("maximumHand2").value;
  document.querySelector(".res1Hand2").textContent = maxResHand2;

  if (minResHand2 !== 0 && resultHandOne2 !== 0) {
    multiplyResHand2();
    sumPartTwo2();
  } 
  return maxResHand2;
}


// minimum and multiply results hand FIRST PLAYER
document.getElementById("freeMinimum").title =
  "Minimum value: 5, Maximum value: 30";
function handMin() {
    x2 = document.getElementById("handMinimum");
    x2.classList = "res2Hand";
}

function minResultHand() {
  minResHand = document.getElementById("minimumHand").value;
  document.querySelector(".res2Hand").textContent = minResHand;
    
  if (maxResHand !== 0 && resultHandOne !== 0) {
    multiplyResHand();
    sumPartTwo();
  }
  return minResHand;    
}
function multiplyResHand() {
  mulResHand = (maxResHand - minResHand) * parseInt(document.getElementById("hand1").value);
  document.querySelector(".mulHand1").textContent = mulResHand;
  return mulResHand;
}

// minimum and multiply results hand SECOND PLAYER
document.getElementById("freeMinimum2").title =
  "Minimum value: 5, Maximum value: 30";
function handMin2() {
    x2 = document.getElementById("handMinimum2");
    x2.classList = "res2Hand2";
}

function minResultHand2() {
  minResHand2 = document.getElementById("minimumHand2").value;
  document.querySelector(".res2Hand2").textContent = minResHand2;
    
  if (maxResHand2 !== 0 && resultHandOne2 !== 0) {
    multiplyResHand2();
    sumPartTwo2();
  }
  return minResHand2;    
}
function multiplyResHand2() {
  mulResHand2 = (maxResHand2 - minResHand2) * parseInt(document.getElementById("hand12").value);
  document.querySelector(".mulHand12").textContent = mulResHand2;
  return mulResHand2;
}


// sum part two FIRST PLAYER
function sumPartTwo() {
  sumSecondPart = parseInt(mulRes) + parseInt(mulResFree)
                + parseInt(mulResHand) + parseInt(mulResUp);
  document.querySelector(".mulAll1").innerHTML = sumSecondPart;
  sumAllResult();
}

// sum part two SECOND PLAYER
function sumPartTwo2() {
  sumSecondPart2 = parseInt(mulRes2) + parseInt(mulResFree2)
                + parseInt(mulResHand2) + parseInt(mulResUp2);
  document.querySelector(".mulAll12").innerHTML = sumSecondPart2;
  sumAllResult2();
}
//END of the second part


// third part FIRST PLAYER 
let kenta, trilling, full, poker, jamb;

let sumThirdPart = 0;
let thirdPartResult = [];

// third part SECOND PLAYER 
let kenta2, trilling2, full2, poker2, jamb2;

let sumThirdPart2 = 0;
let thirdPartResult2 = [];


// column down FIRST PLAYER
let playTriling = false;
let playFull = false;
let playPoker = false;
let playJamb = false;

let columnDownThirdPart = [];
let sumColumnDownThird = 0;

// column down SECOND PLAYER
let playTrilingSec = false;
let playFullSec = false;
let playPokerSec = false;
let playJambSec = false;

let columnDownThirdPart2 = [];
let sumColumnDownThird2 = 0;

// column up FIRST PLAYER
let playMinUp = false;
let playKentaUp = false;
let playTrilingUp = false;
let playFullUp = false;
let playPokerUp = false;
let playJambUp = true;

let columnUpThirdPart = [];
let sumColumnUpThird = 0;

// column up SECOND PLAYER
let playMinUpSec = false;
let playKentaUpSec = false;
let playTrilingUpSec = false;
let playFullUpSec = false;
let playPokerUpSec = false;
let playJambUpSec = true;

let columnUpThirdPart2 = [];
let sumColumnUpThird2 = 0;


// column free FIRST PLAYER
let columnFreeThirdPart = [];
let sumColumnFreeThird = 0;

// column free SECOND PLAYER
let columnFreeThirdPart2 = [];
let sumColumnFreeThird2 = 0;


// column hand FIRST PLAYER
let columnHandThirdPart = [];
let sumColumnHandThird = 0;

// column hand SECOND PLAYER
let columnHandThirdPart2 = [];
let sumColumnHandThird2 = 0;


// KENTA
// column DOWN FIRST PLAYER
document.getElementById("downKentaValue").title =
  "Minimum value: 0, values: 46, 56, 66";

function downKenta() {
  if (playKenta) {
    kenta = document.getElementById("downKentaValue");
    kenta.classList = "resultKentaDown";
    playTrilling = true;
  }
  playKenta = false;
}

function resultKentaDown() {
  let resultKenta = parseInt(document.getElementById("downKenta").value);
  document.querySelector(".resultKentaDown").innerHTML = resultKenta;
  columnDownThirdPart.push(resultKenta);
  sumDownColumnThirdPart();
}

// column DOWN SECOND PLAYER
document.getElementById("downKentaValue2").title =
  "Minimum value: 0, values: 46, 56, 66";

function downKenta2() {
  if (playKentaSec) {
    kenta2 = document.getElementById("downKentaValue2");
    kenta2.classList = "resultKentaDown2";
    playTrillingSec = true;
  }
  playKentaSec = false;
}

function resultKentaDown2() {
  let resultKenta = parseInt(document.getElementById("downKenta2").value);
  document.querySelector(".resultKentaDown2").innerHTML = resultKenta;
  columnDownThirdPart2.push(resultKenta);
  sumDownColumnThirdPart2();
}


// column free FIRST PLAYER
document.getElementById("freeKentaValue").title =
  "Minimum value: 0, values: 46, 56, 66";

function freeKenta() {
    kenta = document.getElementById("freeKentaValue");
    kenta.classList = "resultKentaFree";
}

function resultKentaFree() {
  let resultKentaFree = parseInt(document.getElementById("freeKenta").value);
  document.querySelector(".resultKentaFree").innerHTML = resultKentaFree;
  columnFreeThirdPart.push(resultKentaFree);
  sumFreeColumnThirdPart();
}

// column free SECOND PLAYER
document.getElementById("freeKentaValue2").title =
  "Minimum value: 0, values: 46, 56, 66";

function freeKenta2() {
    kenta = document.getElementById("freeKentaValue2");
    kenta.classList = "resultKentaFree2";
}

function resultKentaFree2() {
  let resultKentaFree = parseInt(document.getElementById("freeKenta2").value);
  document.querySelector(".resultKentaFree2").innerHTML = resultKentaFree;
  columnFreeThirdPart2.push(resultKentaFree);
  sumFreeColumnThirdPart2();
}


// column up FIRST PLAYER
document.getElementById("upKentaValue").title =
  "Minimum value: 0, values: 46, 56, 66";

function upKenta() {
  if (playKentaUp) {
    kenta = document.getElementById("upKentaValue");
    kenta.classList = "resultKentaUp";
    playMinUp = true;
  }
  playKentaUp= false;
}

function resultKentaUp() {
  let resultKentaUp = parseInt(document.getElementById("upKenta").value);
  document.querySelector(".resultKentaUp").innerHTML = resultKentaUp;
  columnUpThirdPart.push(resultKentaUp);
  sumUpColumnThirdPart();
}

// column up SECOND PLAYER
document.getElementById("upKentaValue2").title =
  "Minimum value: 0, values: 46, 56, 66";

function upKenta2() {
  if (playKentaUpSec) {
    kenta = document.getElementById("upKentaValue2");
    kenta.classList = "resultKentaUp2";
    playMinUpSec = true;
  }
  playKentaUpSec = false;
}

function resultKentaUp2() {
  let resultKentaUp = parseInt(document.getElementById("upKenta2").value);
  document.querySelector(".resultKentaUp2").innerHTML = resultKentaUp;
  columnUpThirdPart2.push(resultKentaUp);
  sumUpColumnThirdPart2();
}


// column hand FIRST PLAYER
document.getElementById("handKentaValue").title =
  "Minimum value: 0, values: 46, 56, 66";

function handKenta() {
    kenta = document.getElementById("handKentaValue");
    kenta.classList = "resultKentaHand";
}

function resultKentaHand() {
  let resultKentaHand = parseInt(document.getElementById("handKenta").value);
  document.querySelector(".resultKentaHand").innerHTML = resultKentaHand;
  columnHandThirdPart.push(resultKentaHand);
  sumHandColumnThirdPart();
}

// column hand SECOND PLAYER
document.getElementById("handKentaValue2").title =
  "Minimum value: 0, values: 46, 56, 66";

function handKenta2() {
    kenta = document.getElementById("handKentaValue2");
    kenta.classList = "resultKentaHand2";
}

function resultKentaHand2() {
  let resultKentaHand = parseInt(document.getElementById("handKenta2").value);
  document.querySelector(".resultKentaHand2").innerHTML = resultKentaHand;
  columnHandThirdPart2.push(resultKentaHand);
  sumHandColumnThirdPart2();
}


// Trilling

// column down FIRST PLAYER
document.getElementById("downTrillingValue").title =
  "Minimum value: 0, values: 23, 26, 29, 32, 35, 38";

function downTrilling() {
  if (playTrilling) {
    trilling = document.getElementById("downTrillingValue");
    trilling.classList = "resultTrillingDown";
    playFull = true;
  }
  playTrilling = false;
}

function resultTrillingDown() {
  let resultTrilling = parseInt(document.getElementById("downTrilling").value);
  document.querySelector(".resultTrillingDown").innerHTML = resultTrilling;
  columnDownThirdPart.push(resultTrilling);
  sumDownColumnThirdPart();
}

// column down SECOND PLAYER
document.getElementById("downTrillingValue2").title =
  "Minimum value: 0, values: 23, 26, 29, 32, 35, 38";

function downTrilling2() {
  if (playTrillingSec) {
    trilling = document.getElementById("downTrillingValue2");
    trilling.classList = "resultTrillingDown2";
    playFullSec = true;
  }
  playTrillingSec = false;
}

function resultTrillingDown2() {
  let resultTrilling = parseInt(document.getElementById("downTrilling2").value);
  document.querySelector(".resultTrillingDown2").innerHTML = resultTrilling;
  columnDownThirdPart2.push(resultTrilling);
  sumDownColumnThirdPart2();
}


// column free FIRST PLAYER
document.getElementById("freeTrillingValue").title =
  "Minimum value: 0, values: 23, 26, 29, 32, 35, 38";

function freeTrilling() {
    trilling = document.getElementById("freeTrillingValue");
    trilling.classList = "resultTrillingFree";
}

function resultTrillingFree() {
  let resultTrillingFree = parseInt(document.getElementById("freeTrilling").value);
  document.querySelector(".resultTrillingFree").innerHTML = resultTrillingFree;
  columnFreeThirdPart.push(resultTrillingFree);
  sumFreeColumnThirdPart();
}

// column free SECOND PLAYER
document.getElementById("freeTrillingValue2").title =
  "Minimum value: 0, values: 23, 26, 29, 32, 35, 38";

function freeTrilling2() {
    trilling = document.getElementById("freeTrillingValue2");
    trilling.classList = "resultTrillingFree2";
}

function resultTrillingFree2() {
  let resultTrillingFree = parseInt(document.getElementById("freeTrilling2").value);
  document.querySelector(".resultTrillingFree2").innerHTML = resultTrillingFree;
  columnFreeThirdPart2.push(resultTrillingFree);
  sumFreeColumnThirdPart2();
}


// column up FIRST PLAYER
document.getElementById("upTrillingValue").title =
  "Minimum value: 0, values: 23, 26, 29, 32, 35, 38";
function upTrilling() {
  if (playTrillingUp) {
    trilling = document.getElementById("upTrillingValue");
    trilling.classList = "resultTrillingUp";
    playKentaUp = true;
  }
  playTrilling = false;
}

function resultTrillingUp() {
  let resultTrillingUp = parseInt(document.getElementById("upTrilling").value);
  document.querySelector(".resultTrillingUp").innerHTML = resultTrillingUp;
  columnUpThirdPart.push(resultTrillingUp);
  sumUpColumnThirdPart();
}

// column up SECOND PLAYER
document.getElementById("upTrillingValue2").title =
  "Minimum value: 0, values: 23, 26, 29, 32, 35, 38";
function upTrilling2() {
  if (playTrillingUpSec) {
    trilling = document.getElementById("upTrillingValue2");
    trilling.classList = "resultTrillingUp2";
    playKentaUpSec = true;
  }
  playTrillingSec = false;
}

function resultTrillingUp2() {
  let resultTrillingUp = parseInt(document.getElementById("upTrilling2").value);
  document.querySelector(".resultTrillingUp2").innerHTML = resultTrillingUp;
  columnUpThirdPart2.push(resultTrillingUp);
  sumUpColumnThirdPart2();
}


// column hand FIRST PLAYER
document.getElementById("handTrillingValue").title =
  "Minimum value: 0, values: 23, 26, 29, 32, 35, 38";
function handTrilling() {
    trilling = document.getElementById("handTrillingValue");
    trilling.classList = "resultTrillingHand";
}
function resultTrillingHand() {
  let resultTrillingHand = parseInt(document.getElementById("handTrilling").value);
  document.querySelector(".resultTrillingHand").innerHTML = resultTrillingHand;
  columnHandThirdPart.push(resultTrillingHand);
  sumHandColumnThirdPart();
}

// column hand SECOND PLAYER
document.getElementById("handTrillingValue2").title =
  "Minimum value: 0, values: 23, 26, 29, 32, 35, 38";
function handTrilling2() {
    trilling = document.getElementById("handTrillingValue2");
    trilling.classList = "resultTrillingHand2";
}
function resultTrillingHand2() {
  let resultTrillingHand = parseInt(document.getElementById("handTrilling2").value);
  document.querySelector(".resultTrillingHand2").innerHTML = resultTrillingHand;
  columnHandThirdPart2.push(resultTrillingHand);
  sumHandColumnThirdPart2();
}


// Full house

// column down FIRST PLAYER
document.getElementById("downFullValue").title =
  "Minimum value: 0, values between 37 and 58";
function downFull() {
  if (playFull) {
    full = document.getElementById("downFullValue");
    full.classList = "resultFullDown";
    playPoker = true;
  }
  playFull = false;
}
function resultFullDown() {
  let resultFull = parseInt(document.getElementById("downFull").value);
  document.querySelector(".resultFullDown").innerHTML = resultFull;
  columnDownThirdPart.push(resultFull);
  sumDownColumnThirdPart();
}

// column down SECOND PLAYER
document.getElementById("downFullValue2").title =
  "Minimum value: 0, values between 37 and 58";
function downFull2() {
  if (playFullSec) {
    full = document.getElementById("downFullValue2");
    full.classList = "resultFullDown2";
    playPokerSec = true;
  }
  playFullSec = false;
}
function resultFullDown2() {
  let resultFull = parseInt(document.getElementById("downFull2").value);
  document.querySelector(".resultFullDown2").innerHTML = resultFull;
  columnDownThirdPart2.push(resultFull);
  sumDownColumnThirdPart2();
}


// column free FIRST PLAYER
document.getElementById("upFullValue").title =
  "Minimum value: 0, values between 37 and 58";
function freeFull() {
    full = document.getElementById("freeFullValue");
    full.classList = "resultFullFree";
}
function resultFullFree() {
  let resultFullFree = parseInt(document.getElementById("freeFull").value);
  document.querySelector(".resultFullFree").innerHTML = resultFullFree;
  columnFreeThirdPart.push(resultFullFree);
  sumFreeColumnThirdPart();
}

// column free SECOND PLAYER
document.getElementById("upFullValue2").title =
  "Minimum value: 0, values between 37 and 58";
function freeFull2() {
    full = document.getElementById("freeFullValue2");
    full.classList = "resultFullFree2";
}
function resultFullFree2() {
  let resultFullFree = parseInt(document.getElementById("freeFull2").value);
  document.querySelector(".resultFullFree2").innerHTML = resultFullFree;
  columnFreeThirdPart2.push(resultFullFree);
  sumFreeColumnThirdPart2();
}


// column up FIRST PLAYER
document.getElementById("upFullValue").title =
  "Minimum value: 0, values between 37 and 58";
function upFull() {
  if (playFullUp) {
    full = document.getElementById("upFullValue");
    full.classList = "resultFullUp";
    playTrillingUp = true;
  }
  playFullUp = false;
}

function resultFullUp() {
  let resultFullUp = parseInt(document.getElementById("upFull").value);
  document.querySelector(".resultFullUp").innerHTML = resultFullUp;
  columnUpThirdPart.push(resultFullUp);
  sumUpColumnThirdPart();
}

// column up SECOND PLAYER
document.getElementById("upFullValue2").title =
  "Minimum value: 0, values between 37 and 58";
function upFull2() {
  if (playFullUpSec) {
    full = document.getElementById("upFullValue2");
    full.classList = "resultFullUp2";
    playTrillingUpSec = true;
  }
  playFullUpSec = false;
}
function resultFullUp2() {
  let resultFullUp = parseInt(document.getElementById("upFull2").value);
  document.querySelector(".resultFullUp2").innerHTML = resultFullUp;
  columnUpThirdPart2.push(resultFullUp);
  sumUpColumnThirdPart2();
}


// column hand FIRST PLAYER
document.getElementById("handFullValue").title =
  "Minimum value: 0, values between 37 and 58";
function handFull() {
    full = document.getElementById("handFullValue");
    full.classList = "resultFullHand";
}
function resultFullHand() {
  let resultFullHand = parseInt(document.getElementById("handFull").value);
  document.querySelector(".resultFullHand").innerHTML = resultFullHand;
  columnHandThirdPart.push(resultFullHand);
  sumHandColumnThirdPart();
}

// column hand SECOND PLAYER
document.getElementById("handFullValue2").title =
  "Minimum value: 0, values between 37 and 58";
function handFull2() {
    full = document.getElementById("handFullValue2");
    full.classList = "resultFullHand2";
}
function resultFullHand2() {
  let resultFullHand = parseInt(document.getElementById("handFull2").value);
  document.querySelector(".resultFullHand2").innerHTML = resultFullHand;
  columnHandThirdPart2.push(resultFullHand);
  sumHandColumnThirdPart2();
}


// Poker

// column down FIRST PLAYER
document.getElementById("downPokerValue").title =
  "Minimum value: 0, values: 44, 48, 52, 56, 60, 64";
function downPoker() {
  if (playPoker) {
    poker = document.getElementById("downPokerValue");
    poker.classList = "resultPokerDown";
    playJamb = true;
  }
  playFull = false;
}
function resultPokerDown() {
  let resultPoker = parseInt(document.getElementById("downPoker").value);
  document.querySelector(".resultPokerDown").innerHTML = resultPoker;
  columnDownThirdPart.push(resultPoker);
  sumDownColumnThirdPart();
}

// column down SECOND PLAYER
document.getElementById("downPokerValue2").title =
  "Minimum value: 0, values: 44, 48, 52, 56, 60, 64";
function downPoker2() {
  if (playPokerSec) {
    poker = document.getElementById("downPokerValue2");
    poker.classList = "resultPokerDown2";
    playJambSec = true;
  }
  playFullSec = false;
}
function resultPokerDown2() {
  let resultPoker = parseInt(document.getElementById("downPoker2").value);
  document.querySelector(".resultPokerDown2").innerHTML = resultPoker;
  columnDownThirdPart2.push(resultPoker);
  sumDownColumnThirdPart2();
}


// column free FIRST PLAYER
document.getElementById("freePokerValue").title =
  "Minimum value: 0, values: 44, 48, 52, 56, 60, 64";
function freePoker() {
    poker = document.getElementById("freePokerValue");
    poker.classList = "resultPokerFree";
}
function resultPokerFree() {
  let resultPokerFree = parseInt(document.getElementById("freePoker").value);
  document.querySelector(".resultPokerFree").innerHTML = resultPokerFree;
  columnFreeThirdPart.push(resultPokerFree);
  sumFreeColumnThirdPart();
}

// column free SECOND PLAYER
document.getElementById("freePokerValue2").title =
  "Minimum value: 0, values: 44, 48, 52, 56, 60, 64";
function freePoker2() {
    poker = document.getElementById("freePokerValue2");
    poker.classList = "resultPokerFree2";
}
function resultPokerFree2() {
  let resultPokerFree = parseInt(document.getElementById("freePoker2").value);
  document.querySelector(".resultPokerFree2").innerHTML = resultPokerFree;
  columnFreeThirdPart2.push(resultPokerFree);
  sumFreeColumnThirdPart2();
}

// column up FIRST PLAYER
document.getElementById("upPokerValue").title =
  "Minimum value: 0, values: 44, 48, 52, 56, 60, 64";
function upPoker() {
  if (playPokerUp) {
    poker = document.getElementById("upPokerValue");
    poker.classList = "resultPokerUp";
    playFullUp = true;
  }
  playPokerUp = false;
}
function resultPokerUp() {
  let resultPoker = parseInt(document.getElementById("upPoker").value);
  document.querySelector(".resultPokerUp").innerHTML = resultPoker;
  columnUpThirdPart.push(resultPoker);
  sumUpColumnThirdPart();
}

// column up SECOND PLAYER
document.getElementById("upPokerValue2").title =
  "Minimum value: 0, values: 44, 48, 52, 56, 60, 64";
function upPoker2() {
  if (playPokerUpSec) {
    poker = document.getElementById("upPokerValue2");
    poker.classList = "resultPokerUp2";
    playFullUpSec = true;
  }
  playPokerUpSec = false;
}
function resultPokerUp2() {
  let resultPoker = parseInt(document.getElementById("upPoker2").value);
  document.querySelector(".resultPokerUp2").innerHTML = resultPoker;
  columnUpThirdPart2.push(resultPoker);
  sumUpColumnThirdPart2();
}


// column hand FIRST PLAYER
document.getElementById("handPokerValue").title =
  "Minimum value: 0, values: 44, 48, 52, 56, 60, 64";
function handPoker() {
    poker = document.getElementById("handPokerValue");
    poker.classList = "resultPokerHand";
}
function resultPokerHand() {
  let resultPoker = parseInt(document.getElementById("handPoker").value);
  document.querySelector(".resultPokerHand").innerHTML = resultPoker;
  columnHandThirdPart.push(resultPoker);
  sumHandColumnThirdPart();
}

// column hand SECOND PLAYER
document.getElementById("handPokerValue2").title =
  "Minimum value: 0, values: 44, 48, 52, 56, 60, 64";
function handPoker2() {
    poker = document.getElementById("handPokerValue2");
    poker.classList = "resultPokerHand2";
}
function resultPokerHand2() {
  let resultPoker = parseInt(document.getElementById("handPoker2").value);
  document.querySelector(".resultPokerHand2").innerHTML = resultPoker;
  columnHandThirdPart2.push(resultPoker);
  sumHandColumnThirdPart2();
}


// Jamb

// column down FIRST PLAYER
document.getElementById("downJambValue").title =
  "Minimum value: 0, values: 55, 60, 65, 70, 75, 80";
function downJamb() {
  if (playJamb) {
    jamb = document.getElementById("downJambValue");
    jamb.classList = "resultJambDown";
  }
  playJamb = false;
}
function resultJambDown() {
  let resultJamb = parseInt(document.getElementById("downJamb").value);
  document.querySelector(".resultJambDown").innerHTML = resultJamb;
  columnDownThirdPart.push(resultJamb);
  sumDownColumnThirdPart();
}

// column down SECOND PLAYER
document.getElementById("downJambValue2").title =
  "Minimum value: 0, values: 55, 60, 65, 70, 75, 80";
function downJamb2() {
  if (playJambSec) {
    jamb = document.getElementById("downJambValue2");
    jamb.classList = "resultJambDown2";
  }
  playJambSec = false;
}
function resultJambDown2() {
  let resultJamb = parseInt(document.getElementById("downJamb2").value);
  document.querySelector(".resultJambDown2").innerHTML = resultJamb;
  columnDownThirdPart2.push(resultJamb);
  sumDownColumnThirdPart2();
}


// column free FIRST PLAYER
document.getElementById("freeJambValue").title =
  "Minimum value: 0, values: 55, 60, 65, 70, 75, 80";
function freeJamb() {
    jamb = document.getElementById("freeJambValue");
    jamb.classList = "resultJambFree";
}
function resultJambFree() {
  let resultJamb = parseInt(document.getElementById("freeJamb").value);
  document.querySelector(".resultJambFree").innerHTML = resultJamb;
  columnFreeThirdPart.push(resultJamb);
  sumFreeColumnThirdPart();
}

// column free SECOND PLAYER
document.getElementById("freeJambValue2").title =
  "Minimum value: 0, values: 55, 60, 65, 70, 75, 80";
function freeJamb2() {
    jamb = document.getElementById("freeJambValue2");
    jamb.classList = "resultJambFree2";
}
function resultJambFree2() {
  let resultJamb = parseInt(document.getElementById("freeJamb2").value);
  document.querySelector(".resultJambFree2").innerHTML = resultJamb;
  columnFreeThirdPart2.push(resultJamb);
  sumFreeColumnThirdPart2();
}


// column up FIRST PLAYER
document.getElementById("upJambValue").title =
  "Minimum value: 0, values: 55, 60, 65, 70, 75, 80";
function upJamb() {
  if (playJambUp) {
    jamb = document.getElementById("upJambValue");
    jamb.classList = "resultJambUp";
    playPokerUp = true;
  }
  playJambUp = false;
}
function resultJambUp() {
  let resultJamb = parseInt(document.getElementById("upJamb").value);
  document.querySelector(".resultJambUp").innerHTML = resultJamb;
  columnUpThirdPart.push(resultJamb);
  sumUpColumnThirdPart();
}

// column up SECOND PLAYER
document.getElementById("upJambValue2").title =
  "Minimum value: 0, values: 55, 60, 65, 70, 75, 80";
function upJamb2() {
  if (playJambUpSec) {
    jamb = document.getElementById("upJambValue2");
    jamb.classList = "resultJambUp2";
    playPokerUpSec = true;
  }
  playJambUpSec = false;
}
function resultJambUp2() {
  let resultJamb = parseInt(document.getElementById("upJamb2").value);
  document.querySelector(".resultJambUp2").innerHTML = resultJamb;
  columnUpThirdPart2.push(resultJamb);
  sumUpColumnThirdPart2();
}


// column hand FIRST PLAYER
document.getElementById("handJambValue").title =
  "Minimum value: 0, values: 55, 60, 65, 70, 75, 80";
function handJamb() {
    jamb = document.getElementById("handJambValue");
    jamb.classList = "resultJambHand";
}
function resultJambHand() {
  let resultJamb = parseInt(document.getElementById("handJamb").value);
  document.querySelector(".resultJambHand").innerHTML = resultJamb;
  columnHandThirdPart.push(resultJamb);
  sumHandColumnThirdPart();
}

// column hand SECOND PLAYER
document.getElementById("handJambValue2").title =
  "Minimum value: 0, values: 55, 60, 65, 70, 75, 80";
function handJamb2() {
    jamb = document.getElementById("handJambValue2");
    jamb.classList = "resultJambHand2";
}
function resultJambHand2() {
  let resultJamb = parseInt(document.getElementById("handJamb2").value);
  document.querySelector(".resultJambHand2").innerHTML = resultJamb;
  columnHandThirdPart2.push(resultJamb);
  sumHandColumnThirdPart2();
}

// sum of third part down FIRST PLAYER
function sumDownColumnThirdPart() {
  sumColumnDownThird = columnDownThirdPart.reduce(add);
  document.querySelector(".sumDown2").innerHTML = sumColumnDownThird;
  sumPartThree();
  sumAllResult();
}

// sum of third part down SECOND PLAYER
function sumDownColumnThirdPart2() {
  sumColumnDownThird2 = columnDownThirdPart2.reduce(add);
  document.querySelector(".sumDown22").innerHTML = sumColumnDownThird2;
  sumPartThree2();
  sumAllResult2();
}


// sum of third part free FIRST PLAYER
function sumFreeColumnThirdPart() {
  sumColumnFreeThird = columnFreeThirdPart.reduce(add);
  document.querySelector(".sumFree2").innerHTML = sumColumnFreeThird;
  sumPartThree();
  sumAllResult();
}

// sum of third part free SECOND PLAYER
function sumFreeColumnThirdPart2() {
  sumColumnFreeThird2 = columnFreeThirdPart2.reduce(add);
  document.querySelector(".sumFree22").innerHTML = sumColumnFreeThird2;
  sumPartThree2();
  sumAllResult2();
}


// sum of third part up FIRST PLAYER
function sumUpColumnThirdPart() {
  sumColumnUpThird = columnUpThirdPart.reduce(add);
  document.querySelector(".sumUp2").innerHTML = sumColumnUpThird;
  sumPartThree();
  sumAllResult();
}

// sum of third part up SECOND PLAYER
function sumUpColumnThirdPart2() {
  sumColumnUpThird2 = columnUpThirdPart2.reduce(add);
  document.querySelector(".sumUp22").innerHTML = sumColumnUpThird2;
  sumPartThree2();
  sumAllResult2();
}


// sum of third part hand FIRST PLAYER
function sumHandColumnThirdPart() {
  sumColumnHandThird = columnHandThirdPart.reduce(add);
  document.querySelector(".sumHand2").innerHTML = sumColumnHandThird;
  sumPartThree();
  sumAllResult();
}

// sum of third part hand SECOND PLAYER
function sumHandColumnThirdPart2() {
  sumColumnHandThird2 = columnHandThirdPart2.reduce(add);
  document.querySelector(".sumHand22").innerHTML = sumColumnHandThird2;
  sumPartThree2();
  sumAllResult2();
}


// sum part three FIRST PLAYER
function sumPartThree() {
  sumThirdPart = parseInt(sumColumnDownThird) +parseInt(sumColumnFreeThird) +
                 parseInt(sumColumnUpThird) +parseInt(sumColumnHandThird);
  document.querySelector(".sumAll3").innerHTML = sumThirdPart;
}

// sum part three SECOND PLAYER
function sumPartThree2() {
  sumThirdPart2 = parseInt(sumColumnDownThird2) + parseInt(sumColumnFreeThird2) +
                 parseInt(sumColumnUpThird2) +parseInt(sumColumnHandThird2);
  document.querySelector(".sumAll32").innerHTML = sumThirdPart2;
}



// sum of all columns FIRST PLAYER
function sumAllResult() {
  sumAll =
    parseInt(sumFirstPart) + parseInt(sumSecondPart) + parseInt(sumThirdPart);
  document.querySelector(".totalSum").innerHTML = sumAll;
}

// sum of all columns SECOND PLAYER
function sumAllResult2() {
  sumAll2 =
    parseInt(sumFirstPart2)+ parseInt(sumSecondPart2) + parseInt(sumThirdPart2);
  document.querySelector(".totalSum2").innerHTML = sumAll2;
}
