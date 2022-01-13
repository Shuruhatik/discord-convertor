const replaceAll = function(replaceThis, withThis, inThis) {
  withThis = withThis.replace(/\$/g, "$$$$");
  return inThis.replace(new RegExp(replaceThis.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/g, "\\$&"), "g"), withThis);
};

const convertor = (fromVersion, toVersion, code) => {
  if (fromVersion.code) code = fromVersion.code;
  if (fromVersion.toVersion) toVersion = fromVersion.toVersion;
  if (fromVersion.fromVersion) fromVersion = fromVersion.fromVersion;
  let totalChanges = 0;
  require("./cache.json").forEach(u => {
    if (code.includes(u[fromVersion])) {
      totalChanges++
      code = replaceAll(u[fromVersion], u[toVersion], code)
    }
  })
  return { code, totalChanges }
}

module.exports = convertor;