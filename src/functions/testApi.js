exports.handler = function (event, context, callback) {
  const data = {
    name: 'bob',
    age: 35,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
