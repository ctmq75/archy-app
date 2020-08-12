const store = {
  buildings: [
    {
      id: 1,
      building: "Chicago Cultural Center",
      name: "Chicago Cultural Center",
      imgUrl:
        "https://cdn.choosechicago.com/uploads/2019/06/994c8dc1_1264_4e65_b1ba_5c2d40a356d6_fdf826d0-d33a-41a9-9ef1-cd08fbb34e9a.jpg",
      coordinates: {
        lat: 41.889707,
        lng: -87.624861
      },
      placeId: 'ChIJHzRIuaUsDogRP_AJdMSgzjI',
      location:'78 E Washington St, Chicago, IL 60602, USA',
      description: 'The Chicago Cultural Center, opened in 1897, is a Chicago Landmark building operated by Chicago\'s Department of Cultural Affairs and Special Events that houses the city\'s official reception venue where the Mayor of Chicago has welcomed Presidents and royalty, diplomats and community leaders.'
    },
    {
      id: 2,
      building: "The Wrigley Building",
      name: "The Wrigley Building",
      imgUrl:
        "https://www.chicago.gov/content/dam/city/sites/retrofitchicago/participants/the-wrigley-building.jpg",
      coordinates: {
        lat: 41.889547,
        lng: -87.624668,
      },
      placeId: 'ChIJn2gRpa4sDogR1WNoXyHTkn0',
      location:'400-410 Michigan Ave, Chicago, IL 60611, USA',
      description: 'The Wrigley Building is a skyscraper located at 400–410 North Michigan Avenue on Chicago\'s Near North Side. It is located on the Magnificent Mile directly across Michigan Avenue from the Tribune Tower. It was built to house the corporate headquarters of the Wrigley Company.'
    },
    {
      id: 3,
      building: "Merchandise Mart",
      name: "Merchandise Mart",
      imgUrl:
        "http://s3.amazonaws.com/architecture-org/files/buildings/merchandise-mart-01-2.jpg",
      coordinates: {
        lat: 41.888977,
        lng: -87.633984,
      },
      placeId: 'ChIJS4j8yLYsDogRgs0g4rGWyoc',
      location:'Chicago, IL 60654, USA',
      description: 'The Merchandise Mart is a commercial building located in downtown Chicago, Illinois. When it was opened in 1930, it was the largest building in the world, with 4 million square feet of floor space. The art deco structure is located at the junction of the Chicago River\'s branches.'
    },
    {
      id: 4,
      building: "Marina City Towers",
      name: "Marina City Towers",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Marina_City--Chicago_Illinois_Aug_2006.jpg",
      coordinates: {
        lat: 41.888303,
        lng: -87.628467,
      },
      placeId: 'ChIJrU2YKa4sDogRp6u4zwbIxhY',
      location:'Marina City, 300 N State St, Chicago, IL 60654, USA',
      description: 'Marina City is a mixed-use residential-commercial building complex in Chicago, Illinois, United States, North America, designed by architect Bertrand Goldberg.'
    },
    {
      id: 5,
      building: "The Rookery Building",
      name: "The Rookery Building",
      imgUrl:
        "https://i.pinimg.com/474x/b6/69/dc/b669dc9e332b46b8d745512d370fcd12--daniel-burnham-chicago-usa.jpg",
      coordinates: {
        lat: 41.879044,
        lng: -87.631864,
      },
      placeId: 'ChIJc402QLwsDogRVvYEUI4EOF4',
      location:'209 S LaSalle St, Chicago, IL 60604, USA',
      description: 'The Rookery Building is a historic office building located at 209 South LaSalle Street in the Chicago Loop. Completed by architects Daniel Burnham and John Wellborn Root of Burnham and Root in 1888, it is considered one of their masterpiece buildings, and was once the location of their offices.'
    },
    {
        id: 6,
        building: "John Hancock Center",
        name: "John Hancock Center",
        imgUrl:
          "https://cdn.britannica.com/s:700x500/01/191401-050-69B2E00A/John-Hancock-Center-Chicago-North-Michigan-Avenue.jpg",
      coordinates: {
        lat: 41.89877,
        lng: -87.622917,
      },
      placeId: 'ChIJNbKQElTTD4gR0JKC0nXHXWg',
      location:'875 N Michigan Ave, Chicago, IL 60611, USA',
      description: '875 North Michigan Avenue, formerly the John Hancock Center, is a 100-story, 1,128-foot supertall skyscraper located in Chicago, Illinois. Located in the Magnificent Mile district, its name was changed to 875 North Michigan Avenue on February 12, 2018.'
      },
      {
        id: 7,
        building: "Robie House",
        name: "Robie House",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Frederick_C._Robie_House.JPG/1920px-Frederick_C._Robie_House.JPG",
        coordinates: {
          lat: 41.789818,
          lng: -87.595945,
        },
        placeId: 'ChIJUauIhBYpDogRO5eZR9KA1pM',
        location:'5757 S Woodlawn Ave, Chicago, IL 60637, USA',
        description: 'The Frederick C. Robie House is a U.S. National Historic Landmark now on the campus of the University of Chicago in the South Side neighborhood of Hyde Park in Chicago, Illinois.'
      },
      {
        id: 8,
        building: "Elks National Memorial",
        name: "Elks National Memorial",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d1/Elks_National_Veterans_Memorial_and_Headquarters.jpg",
        coordinates: {
          lat: 41.932317,
          lng: -87.640013,
        },
        placeId: 'ChIJuZwvIgvTD4gR134hShC7suI',
        location:'2750 N Lakeview Ave, Chicago, IL 60614, USA',
        description: 'The Elks National Veterans Memorial is a Beaux Arts-style domed building at 2750 North Lakeview Avenue in Chicago, Illinois. The structure was planned by the Benevolent and Protective Order of Elks, who wished to honor members of their order who had served in World War I.'
      },
      {
        id: 9,
        building: "Chinatown Gate",
        name: "Chinatown Gate",
        imgUrl:
          "https://media2.trover.com/T/5a283c831aafe4041204e115/fixedw_large_4x.jpg",
        coordinates: {
          lat: 41.852602,
          lng: -87.632028,
        },
        placeId: 'ChIJibQNt2MsDogR031grm8gh4U',
        location:'2206 S Wentworth Ave, Chicago, IL 60616, USA',
        description: 'Spectacular monument marking the "entrance" to Chicago\'s Chinatown Neighborhood'
      },
      {
        id: 10,
        building: "The Robey Hotel",
        name: "The Robey Hotel",
        imgUrl:
          "https://www.parrettwindows.com/wp-content/uploads/the-robey-hotel-6.jpg",
        coordinates: {
          lat: 41.910622,
          lng: -87.678182,
        },
        placeId: 'ChIJIyYOr7jSD4gRVRsWTNoD1VU',
        location:'2018 W North Ave, Chicago, IL 60647, USA',
        description: 'Also known as the "Coyote Building"- a 12-story art deco building at the corner of North Avenue and Milwaukee Avenue in Chicago. It was designed by Perkins, Chatten & Hammond and built between 1928 and 1929.'
      },
      {
        id: 11,
        building: "Wrigley Field",
        name: "Wrigley Field",
        imgUrl:
          "https://cdn.britannica.com/19/125719-050-73B9684E/Wrigley-Field-Chicago.jpg",
        coordinates: {
          lat: 41.9474536,
          lng: -87.65613410000003,
        },
        placeId: 'ChIJId-a5bLTD4gRRtbdduE-6hw',
        location:'1060 W Addison St, Chicago, IL 60613, USA',
        description: 'Wrigley Field is a baseball park located on the North Side of Chicago, Illinois. It is the home of the Chicago Cubs, one of the city\'s two Major League Baseball franchises. It first opened in 1914 as Weeghman Park for Charles Weeghman\'s Chicago Whales of the Federal League, which folded after the 1915 baseball season.'
      },
      {
        id: 12,
        building: "Frank Lloyd Wright Home and Studio",
        name: "Frank Lloyd Wright Home and Studio",
        imgUrl:
          "https://flwright.org/sites/default/files/detail/homeandstudio.jpg",
        coordinates: {
          lat: 41.894064,
          lng: -87.799692,
        },
        placeId: 'ChIJ3-7n58s0DogRje0JbyVFEYA',
        location:'951 Chicago Ave, Oak Park, IL 60302, USA',
        description: 'The Frank Lloyd Wright Home and Studio is a historic house and studio designed and owned by architect Frank Lloyd Wright. It has been restored by the Frank Lloyd Wright Preservation Trust to its appearance in 1909, the last year Wright lived there with his family.'
      },
      {
        id: 13,
        building: "Chicago Water Tower",
        name: "Chicago Water Tower",
        imgUrl:
          "https://www.enjoyillinois.com/assets/Tourism-Operators/images/itims/25278_41cdfc3c831c4078ca9a868cae390f99.jpg",
        coordinates: {
          lat: 41.897968,
          lng: -87.623559,
        },
        placeId: 'ChIJV_DlyzjTD4gRZTIQNFZk5Uw',
        location:'835 N Michigan Ave, Chicago, IL 60611, USA',
        description: 'The Chicago Water Tower is a contributing property and landmark in the Old Chicago Water Tower District in Chicago, Illinois, United States, that is listed on the National Register of Historic Places.'
      },
      {
        id: 14,
        building: "Civic Opera House",
        name: "Civic Opera House",
        imgUrl:
          "https://cdn.vox-cdn.com/thumbor/B9pPT4bOTbX0Rvpb9VSBAgvANPE=/0x0:4272x2848/1200x900/filters:focal(1795x1083:2477x1765):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62578777/shutterstock_340873610.1543525197.jpg",
        coordinates: {
          lat: 41.882045,
          lng: -87.637484,
        },
        placeId: 'ChIJ5Y9ekrgsDogRk5Rxw96xQT0',
        location:'20 N Upper Wacker Dr STE 400, Chicago, IL 60606, USA',
        description: 'The Civic Opera House, also called Lyric Opera House is an opera house located at 20 North Wacker Drive in Chicago. The Civic\'s main performance space, named for Ardis Krainik, seats 3,563, making it the second-largest opera auditorium in North America, after the Metropolitan Opera House.'
      },
      {
        id: 15,
        building: "Humboldt Park Field House",
        name: "Humboldt Park Field House",
        imgUrl:
          "https://s3.amazonaws.com/architecture-org/files/buildings/humboldt-park-erik-wolf-06.jpg",
        coordinates: {
          lat: 41.906638,
          lng: -87.701431,
        },
        placeId: 'ChIJb_-4A1rND4gR2KWpbgn6zXo',
        location: '1400 N Humboldt Dr, Chicago, IL 60622, USA',
        description: 'Community Field house built in 1906-07 by Architects- Schmidt, Garden & Martin , Jens J. Jensen'
      },

  ],
};
export default store;
