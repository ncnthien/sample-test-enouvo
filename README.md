# WeatherFinder

Copy and paste content to `https://dillinger.io/` to have a better visualization

_JSON API URL :_
`https://jsonmock.hackerrank.com/api/weather?name=<name>`

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/I8LW4foLtjrt6jvB0RIv4w/weather-finder.gif)

( Icon displayed may vary )

## Functionality Requirements

The component must have the following functionalities:

- The input should initially be empty. The user can type a city name into this input box to search for weather details for this city.

- Clicking on the `Search` button should make an API GET call to the URL `https://jsonmock.hackerrank.com/api/weather?name=<name>`. Here, `<name>` is the city name entered into the text box. For example, for the value `Dallas`, the API hit has to be `https://jsonmock.hackerrank.com/api/weather?name=Dallas`. You will always get data for cities `Dallas` and `Oakland`.

- The response contains a data field, where data is an array of objects, and each object is a weather record. We only need to use the first record from the array for rendering in this challenge. The sample format of the data field is given below:

```
  "data": [
    {
      "name": "Dallas",
      "weather": "12 degree", // Format is always "<value> degree"
      "status": [
        "Wind: 2Kmph", // String
        "Humidity: 5%" // String
      ]
    }
  ]
```

- The weather details should be rendered inside `<div className="weather-details"></div>`. This div should not be rendered initially since no API has been hit yet.

- Each weather record contains a weather field. Retrieve the value and display in the following element - `<span className="result-temperature"></span>`.

- If value in weather field is less than 20, render cold weather icon by rendering `<i className="icon-cold"></i>`. If the value is greater than or equal to 20, render sunny weather icon by rendering `<i className="icon-sunny"></i>`.

- Each weather record contains a status field which is an array of strings.

- The first string denotes the wind value and the second string denotes the humidity value.

  1. Render wind value in <div className="result-wind"></div>
  2. Render humidity value in <div className="result-humidity"></div>

- If no records are returned for any city by the API, you must render `<div className="no-result">No Results Found</div>` instead, and this element must be visible only when the data field is an empty array. This div should not be rendered initially since no API has been hit yet.

- Please note that the input field accepts only text. Test cases take care of calling the API with valid input, so writing input validation is not required.

- For testing purposes, please use the following cities and their corresponding weather conditions:

```
  Dallas - Cold
  Oakland - Sunny
```

