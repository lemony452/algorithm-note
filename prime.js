// 소수인지 판단하는 함수
function isPrime(num) {
  // 1. 예외 처리
  // 1은 소수도 합성수도 아님
  if (num === 1) return false;
  if (num === 2) return true;

  // 2. 소수인지 검증
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
