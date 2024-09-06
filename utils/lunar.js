//计算生辰八字
//获取年份的天干地支
function getHeavenlyStem(year) {
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  return stems[(year - 4) % 10];
}

function getEarthlyBranch(year) {
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  return branches[(year - 4) % 12];
}
//月份的天干地支
function getMonthStem(yearStemIndex, month) {
  // 每年正月（寅月）的天干从对应年干开始往后数
  const monthStemBase = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0]; // 月干基准表
  const monthStemIndex = (yearStemIndex + monthStemBase[month - 1]) % 10;
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  return stems[monthStemIndex];
}

function getMonthBranch(month) {
  const branches = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];
  return branches[month - 1];
}

// 日的天干地支
function getDayStemBranch(date) {
  // 这里的算法是简化版本，建议使用精确的日历库进行计算
  // 假设 date 是一个 Date 对象
  const baseDate = new Date(1900, 0, 31); // 基准日期（甲子日）
  const diffDays = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  const dayStem = stems[diffDays % 10];
  const dayBranch = branches[diffDays % 12];
  return dayStem + dayBranch;
}

//时辰的天干地支
function getHourStem(dayStemIndex, hour) {
  const hourStemBase = [0, 2, 4, 6, 8]; // 时干基准表
  const hourStemIndex = (dayStemIndex % 5) * 2 + Math.floor(hour / 2) % 10;
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  return stems[hourStemIndex];
}

function getHourBranch(hour) {
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  return branches[Math.floor(hour / 2) % 12];
}

export function getLunar(year, month, day, hour) {
  // 计算年干支
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  
  let yearStemIndex = (year - 4) % 10;
  let yearBranchIndex = (year - 4) % 12;
  
  let yearStem = stems[yearStemIndex];
  let yearBranch = branches[yearBranchIndex];

  // 计算月干支
  let monthStem = getMonthStem(yearStemIndex, month);
  let monthBranch = getMonthBranch(month);

  // 计算日干支
  let date = new Date(year, month - 1, day);
  let dayStemBranch = getDayStemBranch(date);

  // 计算时辰干支
  let dayStemIndex = stems.indexOf(dayStemBranch[0]);
  let hourStem = getHourStem(dayStemIndex, hour);
  let hourBranch = getHourBranch(hour);

  return `${yearStem}${yearBranch} ${monthStem}${monthBranch} ${dayStemBranch} ${hourStem}${hourBranch}`;
}
