require ('datejs');

function combineUsers (...args) {
  const combinedObject = {
  users: []
};

for (const arrays of args) {
  combinedObject.users = [...combinedObject.users, ...arrays];
}

combinedObject.merge_date = Date.today().toString('M/d/yyyy');

return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};