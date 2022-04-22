const count = (string) => {
  const parsedString = string.toUpperCase();
  const total = {};
  parsedString.split("").forEach((letter) => {
    if (letter === " ") return;
    total[letter] ? total[letter]++ : (total[letter] = 1);
  });

  Object.keys(total).forEach((key) => {
    console.log(`${key}-${total[key]}`);
  });
};

// Enter the string here
count("Chinmay Kulkarni");
