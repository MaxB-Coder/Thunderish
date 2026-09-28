export const ICON_MAP = new Map();

addMapping([0, 1], 'sun');
addMapping([2], 'cloud-sun');
addMapping([3], 'cloud');
addMapping([45, 48], 'smog');
addMapping(
  [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  'cloud-shower-heavy'
);
addMapping([71, 73, 75, 77, 85, 86], 'snowflake');
addMapping([95, 96, 99], 'cloud-bolt');

function addMapping(values, icon) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });
}

/** Each icon's weather in words: the label under the temperature, and the icons' alt text. */
const CONDITION_NAMES = {
  sun: 'Clear',
  'cloud-sun': 'Partly cloudy',
  cloud: 'Cloudy',
  smog: 'Fog',
  'cloud-shower-heavy': 'Rain',
  snowflake: 'Snow',
  'cloud-bolt': 'Thunderstorm',
};

export const conditionName = (iconCode) => CONDITION_NAMES[ICON_MAP.get(iconCode)] ?? 'Unknown';
