/**
 * [(lv.3)나이-통계-구하기.js]
 *
 * 1) users 배열은 [{ age: 10 }, { age: 30 }, ...] 형태를 가집니다.
 * 2) calculateStatistics(users)는 평균 나이(averageAge)와 최대 나이(maxAge)를 구해서
 *    { averageAge, maxAge } 객체 형태로 반환해야 합니다.
 * 3) reduce 메서드를 사용하세요.
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

function calculateStatistics(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return { averageAge: 0, maxAge: 0 };
  }

  const { totalAge, maxAge, count } = users.reduce(
    (acc, user) => {
      if (user && typeof user.age === "number" && !isNaN(user.age)) {
        acc.totalAge += user.age;
        acc.maxAge = Math.max(acc.maxAge, user.age);
        acc.count += 1;
      }
      return acc;
    },
    { totalAge: 0, maxAge: -Infinity, count: 0 } // maxAge 초기값을 -Infinity로 설정
  );

  if (count === 0) {
    return { averageAge: 0, maxAge: 0 };
  }

  return {
    averageAge: Math.round((totalAge / count) * 100) / 100, // 소수 둘째 자리 반올림
    maxAge,
  };
}
// export 를 수정하지 마세요.
export { calculateStatistics };
