exports.handler = function (event, context, callback) {
  const data = {
    name: 'bob',
    age: 35,
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data),
  });
};
