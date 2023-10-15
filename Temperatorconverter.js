const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;

  const tempselect = document.getElementById("temp_diff");
  //   console.log(tempselect);
  const valueoftemp = tempselect.options[tempselect.selectedIndex].value;

  //   console.log(valueoftemp);
  const celtofah = (cel) => {
    let fahernit = Math.round((cel * 9) / 5 + 32);
    return fahernit;
  };
  //
  const fahtocel = (fah) => {
    let celsius = Math.round(((fah - 32) * 5) / 9);
    return celsius;
  };

  //
  let result;

  if (valueoftemp == "cel") {
    result = celtofah(numberTemp);
    document.getElementById(
      "resultcontainer"
    ).innerHTML = `=${result} Faherenit`;
  } else {
    result = fahtocel(numberTemp);
    document.getElementById("resultcontainer").innerHTML = `=${result}Celsius`;
  }
};
