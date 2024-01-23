var APP_DATA = {
  "scenes": [
    {
      "id": "0-equi",
      "name": "equi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.06865540404688986,
        "pitch": -0.004458965970819406,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.0389026986910288,
          "pitch": -0.28973223750868016,
          "rotation": 0,
          "target": "1-equi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-equi",
      "name": "equi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.033692010751542156,
          "pitch": -0.004041965804351122,
          "rotation": 0,
          "target": "0-equi"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
