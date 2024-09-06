"use strict";
function getMonthStem(yearStemIndex, month) {
  const monthStemBase = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
  const monthStemIndex = (yearStemIndex + monthStemBase[month - 1]) % 10;
  const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  return stems[monthStemIndex];
}
function getMonthBranch(month) {
  const branches = ["寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"];
  return branches[month - 1];
}
function getDayStemBranch(date) {
  const baseDate = new Date(1900, 0, 31);
  const diffDays = Math.floor((date - baseDate) / (1e3 * 60 * 60 * 24));
  const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  const dayStem = stems[diffDays % 10];
  const dayBranch = branches[diffDays % 12];
  return dayStem + dayBranch;
}
function getHourStem(dayStemIndex, hour) {
  const hourStemIndex = dayStemIndex % 5 * 2 + Math.floor(hour / 2) % 10;
  const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  return stems[hourStemIndex];
}
function getHourBranch(hour) {
  const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  return branches[Math.floor(hour / 2) % 12];
}
function getLunar(year, month, day, hour) {
  const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  let yearStemIndex = (year - 4) % 10;
  let yearBranchIndex = (year - 4) % 12;
  let yearStem = stems[yearStemIndex];
  let yearBranch = branches[yearBranchIndex];
  let monthStem = getMonthStem(yearStemIndex, month);
  let monthBranch = getMonthBranch(month);
  let date = new Date(year, month - 1, day);
  let dayStemBranch = getDayStemBranch(date);
  let dayStemIndex = stems.indexOf(dayStemBranch[0]);
  let hourStem = getHourStem(dayStemIndex, hour);
  let hourBranch = getHourBranch(hour);
  return `${yearStem}${yearBranch} ${monthStem}${monthBranch} ${dayStemBranch} ${hourStem}${hourBranch}`;
}
exports.getLunar = getLunar;
