// 숫자 회문 검증하는 함수
function isPalindrome(num) {
  const numToStr = String(num);
  const length = numToStr.length;

  for (let i = 0; i < length / 2; i++) {
    if (numToStr[i] !== numToStr[length - 1 - i]) return false;
  }
  return true;
}
