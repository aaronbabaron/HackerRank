function sort(csvString) {
  var doctors = csvString.split('\n');

  for (let i = 0; i < doctors.length; ++i) {
    doctors[i] = doctors[i].split(',');
  }

  doctors.sort((a, b) => a[3] !== b[3] ? a[3] - b[3] : b[4] - a[4]);

  for (let i = 0; i < doctors.length; ++i) {
    doctors[i] = doctors[i].join(',');
  }

  return doctors.join('\n');
}
