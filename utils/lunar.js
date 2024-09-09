// 年天干地支
function getHeavenlyStem(year) {
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  return stems[(year - 4) % 10];
}

function getEarthlyBranch(year) {
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  return branches[(year - 4) % 12];
}

// 月天干地支
function getMonthStem(yearStemIndex, month) {
  const monthStemBase = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
  const monthStemIndex = (yearStemIndex + monthStemBase[month - 1]) % 10;
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  return stems[monthStemIndex];
}

function getMonthBranch(month) {
  const branches = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];
  return branches[month - 1];
}

// 日天干地支
function getDayStemBranch(date) {
  const baseDate = new Date(1900, 0, 31);
  const diffDays = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  const dayStem = stems[diffDays % 10];
  const dayBranch = branches[diffDays % 12];
  return dayStem + dayBranch;
}

// 时辰天干地支
function getHourStem(dayStemIndex, hour) {
  // 根据日干，找到对应的时辰天干起点
  const hourStemBase = [
    ['甲', '丙', '戊', '庚', '壬'], // 甲、己日
    ['乙', '丁', '己', '辛', '癸'], // 乙、庚日
    ['丙', '戊', '庚', '壬', '甲'], // 丙、辛日
    ['丁', '己', '辛', '癸', '乙'], // 丁、壬日
    ['戊', '庚', '壬', '甲', '丙'], // 戊、癸日
  ];

  const cycleIndex = Math.floor(dayStemIndex % 5); // 每5天一个循环
  const hourIndex = Math.floor(hour / 2) % 12; // 时辰的天干
  return hourStemBase[cycleIndex][Math.floor(hourIndex / 2)];
}

function getHourBranch(hour) {
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  return branches[Math.floor(hour / 2) % 12];
}

// 完整的八字计算
export function getLunar(year, month, day, hour) {
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

  // 年干支
  const yearStemIndex = (year - 4) % 10;
  const yearBranchIndex = (year - 4) % 12;
  const yearStem = stems[yearStemIndex];
  const yearBranch = getEarthlyBranch(year);

  // 月干支
  const monthStem = getMonthStem(yearStemIndex, month);
  const monthBranch = getMonthBranch(month);

  // 日干支
  const date = new Date(year, month - 1, day);
  const dayStemBranch = getDayStemBranch(date);
  const dayStemIndex = stems.indexOf(dayStemBranch[0]);

  // 时辰干支
  const hourStem = getHourStem(dayStemIndex, hour);
  const hourBranch = getHourBranch(hour);

  return `${yearStem}${yearBranch} ${monthStem}${monthBranch} ${dayStemBranch} ${hourStem}${hourBranch}`;
}


