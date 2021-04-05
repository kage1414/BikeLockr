module.exports.atRisk = (incidents) => {
  let thirtyDaysAgo = Date.now() - 2592000000;

  for (let i = 0; i < incidents.length; i++) {
    if (incidents[i].occurred_at * 1000 > thirtyDaysAgo) {
      return true;
    }
  }

  return false;
};

module.exports.filter = (incidents) => {
  let filtered = [];
  let thirtyDaysAgo = Date.now() - 2592000000;

  for (let i = 0; i < incidents.length; i++) {
    if (incidents[i].occurred_at * 1000 > thirtyDaysAgo && incidents[i].type === 'Theft') {
      filtered.push(incidents[i]);
    }
  }

  return filtered;
};