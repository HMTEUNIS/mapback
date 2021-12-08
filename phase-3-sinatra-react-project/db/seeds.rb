User.destroy_all
puts "🌱 Seeding users..."

user1 = User.create(name: Faker::Name.name, local: true, age: 30)
user2 = User.create(name: Faker::Name.name, local: true, age: 25)
user3 = User.create(name: Faker::Name.name, local: false, age: 43)
user4 = User.create(name: Faker::Name.name, local: true, age: 44)
user5 = User.create(name: Faker::Name.name, local: false, age: 23)
user6 = User.create(name: Faker::Name.name, local: true, age: 34)
puts "users seeded"
puts "🌱 Seeding Neighborhoods..."

neighorhood1 = Neighorhood.create(name: "Presido")
neighorhood2 = Neighorhood.create(name: "Marina")
neighorhood3 = Neighorhood.create(name: "Russian Hill")
neighorhood4 = Neighorhood.create(name: "Cow Hollow")
neighorhood5 = Neighorhood.create(name: "Pacific Heights")
neighorhood6 = Neighorhood.create(name: "Nob Hill")
neighorhood7 = Neighorhood.create(name: "Downtown")
neighorhood8 = Neighorhood.create(name: "Financial District")
neighorhood9 = Neighorhood.create(name: "North Beach")
neighorhood10 = Neighorhood.create(name: "Lincoln Park")
neighorhood11 = Neighorhood.create(name: "Sea Cliff")
neighorhood12 = Neighorhood.create(name: "Lake Street")
neighorhood13 = Neighorhood.create(name: "Presido Terrace")
neighorhood14 = Neighorhood.create(name: "Outer Richmond")
neighorhood15 = Neighorhood.create(name: "Central Richmond")
neighorhood16 = Neighorhood.create(name: "Inner Richmond")
neighorhood17 = Neighorhood.create(name: "Laurel Heights")
neighorhood18 = Neighorhood.create(name: "Lower Pacific Heights")
neighorhood19 = Neighorhood.create(name: "Polk Gulch")
neighorhood20 = Neighorhood.create(name: "Tenderloin")
neighorhood21 = Neighorhood.create(name: "Yerba Buena")
neighorhood22 = Neighorhood.create(name: "South Beach")
neighorhood23 = Neighorhood.create(name: "Lone Mountain")
neighorhood24 = Neighorhood.create(name: "Anza Vista")
neighorhood25 = Neighorhood.create(name: "Western Addition")
neighorhood26 = Neighorhood.create(name: "Golden Gate Park")
neighorhood27 = Neighorhood.create(name: "North Panhandle")
neighorhood28 = Neighorhood.create(name: "Fillmore")
neighorhood29 = Neighorhood.create(name: "Hayes Valley")
neighorhood30 = Neighorhood.create(name: "South of Market")
neighorhood31 = Neighorhood.create(name: "Mission Bay")


puts "Neighborhoods Seeded"
puts "seeding suggestions"
suggestion1 = Suggestion.create(eat: "Sessions at the Presidio ", learn: "The Walt Disney Family Museum", watch: "Presidio Theatre", do: "The Palace Of Fine Arts",  rating: 5, comment: "I JUST LOVE IT", neighorhood_id: neighorhood1.id, user_id: user3.id)
suggestion2 = Suggestion.create(eat: "Delarosa", learn: "Sailing SanFrancisco", watch: "BATS Improv Theatre", do: "The Wave Organ",  rating: 5, comment: "The wave organ is so trippy", neighorhood_id: neighorhood2.id, user_id: user1.id)
suggestion3 = Suggestion.create(eat: "Aux Delices Vietnamese Restaurant", learn: "The  SFCityGuides Walking Tour", watch: "Cobb's Comedy Club ", do: "Cable Car rides",  rating: 4, comment: "its fun!", neighorhood_id: neighorhood3.id, user_id: user3.id)
suggestion4 = Suggestion.create(eat: "Tacko", learn: "Mcelroy Octogon House", watch: "", do: "Shopping on Lombard street",  rating: 5, comment: "I JUST LOVE IT", neighorhood_id: neighorhood4.id, user_id: user2.id)
suggestion5 = Suggestion.create(eat: "Tatki", learn: "Haas-Lilienthal House", watch: "Fillmore Jazz Festival", do: "TV houses", rating: 5, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood5.id, user_id: user2.id)
suggestion6 = Suggestion.create(eat: "Son's and Daughters", learn: "Cable Car Museum", watch: "The Masonic", do: "Huntington Park", rating: 5, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood6.id, user_id: user2.id)
suggestion7 = Suggestion.create(eat: "", learn: "", watch: "San Francisco War Memorial and Performing Arts Center", do: "", rating: 5, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood7.id, user_id: user5.id)
suggestion8 = Suggestion.create(eat: "Manhatten Club", learn: "Autodesk Gallery", watch: "TransAmerica Pyramid", do: "Japan Center Mall", rating: 5, comment: "The Japan Center Mall is so fun!",  neighorhood_id: neighorhood8.id, user_id: user6.id)
suggestion9 = Suggestion.create(eat: "Fisherman's Warf", learn: "Exploratorium", watch: "Boats", do: "", rating: 3, comment: "Very chill an low key",  neighorhood_id: neighorhood9.id, user_id: user1.id)
suggestion10 = Suggestion.create(eat: "", learn: "Sutro Baths", watch: "", do: "Seal Rocks Beach",  rating: 5, comment: "I JUST LOVE IT", neighorhood_id: neighorhood10.id, user_id: user4.id)
suggestion11 = Suggestion.create(eat: "Ocean Beach Cafe", learn: "", watch: "", do: "",  rating: 5, comment: "I JUST LOVE IT", neighorhood_id: neighorhood11.id, user_id: user2.id)
suggestion12 = Suggestion.create(eat: "", learn: "", watch: "", do: "", rating: 1, comment: "boring",   neighorhood_id: neighorhood12.id, user_id: user2.id)
suggestion13 = Suggestion.create(eat: "the rich", learn: "how fucking poor you are", watch: "rich ppl", do: "steal", rating: 5, comment: "I JUST LOVE TO STEAL",  neighorhood_id: neighorhood13.id, user_id: user2.id)
suggestion14 = Suggestion.create(eat: "Bazaar Café", learn: "Giant Camera", watch: "Balboa Theatre", do: "China Beach",  rating: 5, comment: "What a wonderful day out!", neighorhood_id: neighorhood14.id, user_id: user3.id)
suggestion15 = Suggestion.create(eat: "Angkor Wat:", learn: "", watch: "", do: "",  neighorhood_id: neighorhood15.id, user_id: user5.id)
suggestion16 = Suggestion.create(eat: "Bistro Clement", learn: "", watch: "The Plough & the Stars", do: "Green Apple Books", rating: 5, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood16.id, user_id: user2.id)
suggestion17 = Suggestion.create(eat: "Rigolo Cafe", learn: "SFFD Museum", watch: "", do: "", rating: 4, comment: "my kids love the fire trucks",  neighorhood_id: neighorhood17.id, user_id: user3.id)
suggestion18 = Suggestion.create(eat: "Glaze Teriyaki Grill", learn: "The Oracle Psychic Readings", watch: "", do: "Kabuki Springs & Spa",  rating: 5, comment: "I JUST LOVE IT", neighorhood_id: neighorhood18.id, user_id: user1.id)
suggestion19 = Suggestion.create(eat: "Bell Tower", learn: "Antique Vibrator Museum", watch: "Art primo", do: "Anjalee", rating: 5, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood19.id, user_id: user5.id)
suggestion20 = Suggestion.create(eat: "Shalimar", learn: "Tenderloin Museum", watch: "Black Cat", do: "Nightlife", rating: 5, comment: "what happens in the tenderloin gets cleared up at the clinic",  neighorhood_id: neighorhood20.id, user_id: user2.id)
suggestion21 = Suggestion.create(eat: "The Grove", learn: "San Francisco Museum of Modern Art", watch: "Yerba Buena Gardens FestivalEsplanade", do: "", rating: 5, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood21.id, user_id: user2.id)
suggestion22 = Suggestion.create(eat: "The Brixton", learn: "Museum of Craft and Folk Art", watch: "", do: "The selfie market", rating: 5, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood22.id, user_id: user5.id)
suggestion23 = Suggestion.create(eat: "", learn: "", watch: "", do: "Tours", rating: 1, comment: "BORING",  neighorhood_id: neighorhood23.id, user_id: user2.id)
suggestion24 = Suggestion.create(eat: "", learn: "", watch: "", do: "",  rating: 5, comment: "BORING", neighorhood_id: neighorhood24.id, user_id: user2.id)
suggestion25 = Suggestion.create(eat: "Pork Store Cafe", learn: "", watch: "", do: "Japan Town", rating: 5, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood25.id, user_id: user3.id)
suggestion26 = Suggestion.create(eat: "", learn: "San Francisco Botanical Garden", watch: "", do: "", rating: 5, comment: "Such nice flowerssss",  neighorhood_id: neighorhood26.id, user_id: user5.id)
suggestion27 = Suggestion.create(eat: "Bob's on Baker Street", learn: "", watch: "", do: "",  neighorhood_id: neighorhood27.id, user_id: user3.id)
suggestion28 = Suggestion.create(eat: "Suzo", learn: "", watch: "The Fillmore", do: "",  rating: 5, comment: "I JUST LOVE IT", neighorhood_id: neighorhood28.id, user_id: user3.id)
suggestion29 = Suggestion.create(eat: "Domo", learn: "", watch: "", do: "", rating: 5, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood29.id, user_id: user4.id)
suggestion30 = Suggestion.create(eat: "Sightglass Cafe", learn: "", watch: "", do: "", rating: 4, comment: "I JUST LOVE IT",  neighorhood_id: neighorhood30.id, user_id: user3.id)
suggestion31 = Suggestion.create(eat: "Casey's Pizza", learn: "", watch: "", do: "Oracle Park", rating: 3, comment: "good day out!",  neighorhood_id: neighorhood31.id, user_id: user3.id)


    
    
    
    puts "✅ Done seeding!"
