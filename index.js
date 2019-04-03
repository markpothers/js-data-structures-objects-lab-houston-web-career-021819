// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = Object.assign({}, driver, { [key]: value })
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const obj = driver
  const newobj = Object.assign({}, obj)
  delete newobj[key]
  return newobj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}