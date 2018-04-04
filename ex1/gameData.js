const gameArea = 
 {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            12.567672729492188,
            55.79003886562438
          ],
          [
            12.561922073364258,
            55.78666077505376
          ],
          [
            12.561578750610352,
            55.78511640751059
          ],
          [
            12.564239501953123,
            55.78400635552426
          ],
          [
            12.566471099853516,
            55.78231708529588
          ],
          [
            12.57162094116211,
            55.7824136169962
          ],
          [
            12.57333755493164,
            55.78357197874641
          ],
          [
            12.574710845947266,
            55.785743814208516
          ],
          [
            12.567672729492188,
            55.79003886562438
          ]
        ]
      ]
    }
}
    const playersInArea = [
        {
          "type": "Feature",
          "properties": {"name":"Peter"},
          "geometry": {
            "type": "Point",
            "coordinates": [
              12.576169967651367,
              55.784488990708795
            ]
          }
        },
        {
            "type": "Feature",
            "properties": {"name":"Jane"},
            "geometry": {
              "type": "Point",
              "coordinates": [
                12.572565078735352,
                55.78540598108821
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {"name":"Jill"},
            "geometry": {
              "type": "Point",
              "coordinates": [
                12.568187713623045,
                55.78728815688104
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {"name":"Yolanda"},
            "geometry": {
              "type": "Point",
              "coordinates": [
                12.56535530090332,
                55.78501988250641
              ]
            }
          }
    ]
module.exports = {gameArea,playerInArea}