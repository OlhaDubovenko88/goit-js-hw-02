function formatMessage(message, maxLenght) {
  if (message.lenght <= maxLenght) {
    return message;
  } else {
    return message.slice(0, maxLenght) + "...";
  }
}
console.log(formatMessage("Curab itur ligula sapien", 16));
console.log(formatMessage("Curab itur ligula sapien", 23));
console.log(formatMessage("Vesti bulum facilisis purus nec", 20));
console.log(formatMessage("Vesti bulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
