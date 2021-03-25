# Thumbpress 😁

![Demo picture](https://pbs.twimg.com/media/ExVLIhUXEAId9Uh?format=jpg&name=medium)
A simple lib javascript to generate a thumbnail from a list of URLs.

## Usage

Pass to the method an array of pictures + the size of the final thumbnail + a call back and you will get a data url in return.

```javascript
const urls = [
  "https://pbs.twimg.com/media/EZ-hSD6WoAMEk9V?format=jpg&name=large",
  "https://pbs.twimg.com/media/EZm28BnX0AIJPDd?format=jpg&name=medium",
  "https://pbs.twimg.com/media/EZw5H_AWAAA-gMJ?format=png&name=small",
  "https://pbs.twimg.com/media/EZxM_nkXYAMx8YF?format=jpg&name=medium",
  "https://pbs.twimg.com/media/EZm7Q8-WoAAvnH-?format=jpg&name=small",
  "https://pbs.twimg.com/media/EYpJXGyUwAAkvGN?format=jpg&name=large",
  "https://pbs.twimg.com/media/ExCymAMWQAAfaqa?format=jpg&name=medium",
  "https://pbs.twimg.com/media/Ew8dkzPWQAAx0_G?format=jpg&name=small",
  "https://pbs.twimg.com/media/EwxX_1tXMAQz4vi?format=jpg&name=small",
  "https://pbs.twimg.com/media/EwnPu2fWEAEHHqA?format=jpg&name=medium",
];
Thumpress(urls, 512, (dataUrl_) => {
  document.getElementById("thunmb").src = dataUrl_;
});
```

## Author

By Alexandre Salvatore.
[blog](https://salvatore.paris/blog/)
[twitter](https://twitter.com/salvator_io)
