export const center = {
  lat: 34.0561684,
  lng: -117.8167195,
};

export const checkLocationPermission = () => {
  if ("geolocation" in navigator) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        if (permissionStatus.state === "denied") {
          alert("Please allow location access.");
          window.location.href = "app-settings:location";
        } else {
          return true;
        }
      });
  } else {
    alert("Geolocation is not supported in your browser.");
    return false;
  }
};


