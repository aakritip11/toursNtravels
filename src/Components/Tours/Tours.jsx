import React, { useEffect, useState } from 'react';
import './tours.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
import img13 from '../../Assets/img13.jpg'
import img14 from '../../Assets/img14.jpg'
import img15 from '../../Assets/img15.jpg'
import img16 from '../../Assets/img16.jpg'
import img17 from '../../Assets/img17.jpg'
import img18 from '../../Assets/img18.jpg'
import img19 from '../../Assets/img19.jpg'
import img20 from '../../Assets/img20.jpg'
import img21 from '../../Assets/img21.jpg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import {Link, useNavigate} from 'react-router-dom'

import Aos from "aos";
import 'aos/dist/aos.css'

const Data = [
    {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: `Bora Bora is a tropical paradise located in the South Pacific, specifically in French Polynesia. It is known for its breathtaking beauty, crystal-clear turquoise waters, and stunning overwater bungalows. Bora Bora is often considered one of the most beautiful islands in the world and is a popular destination for honeymooners, couples, and luxury travelers.

    The island is famous for its iconic Mount Otemanu, a dormant volcano that rises majestically from the center of the island. It creates a stunning backdrop against the vibrant blue lagoon and white sandy beaches that surround the island.
    
    Bora Bora offers a range of outdoor activities and water sports for visitors to enjoy. Snorkeling and scuba diving are particularly popular, allowing you to explore the colorful coral reefs and encounter a diverse array of marine life, including tropical fish, stingrays, and even sharks. You can also go jet skiing, parasailing, or take a leisurely boat cruise around the island.
    
    One of the highlights of visiting Bora Bora is staying in an overwater bungalow. These luxurious accommodations are built on stilts above the lagoon, offering direct access to the crystal-clear waters. From your private deck, you can enjoy panoramic views, watch vibrant tropical fish swim beneath you, and even spot rays or sharks.
    
    In addition to its natural beauty, Bora Bora also offers a taste of Polynesian culture and cuisine. You can explore the local markets, sample delicious fresh seafood, and experience traditional dance and music performances.
    
    Overall, Bora Bora is a dream destination for those seeking a romantic getaway, relaxation in a stunning natural setting, and unforgettable experiences in the heart of the South Pacific.`
    },

    {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: `Machu Picchu is an ancient Incan citadel located in the high mountains of Peru. It is one of the most iconic archaeological sites in the world and a UNESCO World Heritage site. Machu Picchu is renowned for its stunning mountainous setting, mysterious ruins, and rich historical significance.

    The site is situated on a ridge above the Sacred Valley, surrounded by towering peaks and lush greenery. It was built by the Incas in the 15th century and remained hidden from the outside world until its rediscovery in 1911. Machu Picchu is often referred to as the "Lost City of the Incas" due to its remote location and the fact that it was largely abandoned and forgotten for centuries.
    
    The architectural marvels of Machu Picchu reflect the advanced engineering and stone masonry skills of the Incas. The structures, including temples, terraces, and residential buildings, are intricately designed and harmoniously blend with the natural landscape. The most famous structure within Machu Picchu is the Intihuatana Stone, an astronomical clock used by the Incas to track the movements of the sun.
    
    Visiting Machu Picchu is a unique and awe-inspiring experience. The journey to reach the site involves taking a train through the scenic Sacred Valley and then ascending to the mountainous region. Upon arrival, visitors are greeted by breathtaking panoramic views and the sense of stepping back in time.
    
    Exploring the ruins of Machu Picchu allows you to delve into the fascinating history and culture of the Incas. Knowledgeable guides provide insights into the purpose and significance of each structure, as well as the spiritual beliefs of the Incas. Hiking the Inca Trail, a multi-day trek that culminates at Machu Picchu, is a popular option for adventure enthusiasts and offers spectacular views along the way.
    
    Machu Picchu holds a sense of mystery and intrigue, as many aspects of its purpose and function remain unknown. It is believed to have served as a sacred and ceremonial site, as well as a residence for Inca rulers. The precise reasons for its construction and ultimate abandonment continue to captivate archaeologists and historians.
    
    In addition to its historical and archaeological significance, Machu Picchu is surrounded by natural beauty. The surrounding mountains, including the iconic Huayna Picchu, provide opportunities for breathtaking hikes and panoramic vistas of the citadel and the Sacred Valley below.
    
    Machu Picchu is a testament to the ingenuity and craftsmanship of the Inca civilization. Its beauty, historical importance, and remote location make it a bucket-list destination for travelers from around the world. Visiting Machu Picchu offers a unique opportunity to step back in time and witness the remarkable achievements of an ancient civilization in a truly awe-inspiring setting.`
    },

    {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: `The Great Barrier Reef is a natural wonder located off the northeastern coast of Australia. It is the world's largest coral reef system and is recognized as a UNESCO World Heritage site. Stretching over 2,300 kilometers (1,400 miles), the Great Barrier Reef is a vibrant and diverse ecosystem that supports a wide array of marine life.

    The reef is composed of thousands of individual coral reefs, cays, and islands. It is known for its stunning beauty, crystal-clear turquoise waters, and rich biodiversity. The Great Barrier Reef is home to an incredible variety of marine species, including colorful coral formations, tropical fish, sea turtles, dolphins, sharks, and countless other marine creatures.
    
    Exploring the Great Barrier Reef offers a unique opportunity to witness the wonders of the underwater world. Snorkeling and scuba diving are popular activities that allow visitors to immerse themselves in the reef's vibrant ecosystem. Swimmers can encounter schools of fish, spot brilliantly colored corals, and even have the chance to swim alongside majestic sea turtles.
    
    In addition to underwater exploration, visitors to the Great Barrier Reef can also enjoy boat tours, sailing trips, and helicopter rides to gain a broader perspective of this magnificent natural wonder. Many areas of the reef are easily accessible from coastal cities such as Cairns and Port Douglas, offering convenient access to this breathtaking destination.
    
    While the Great Barrier Reef is a place of extraordinary beauty, it is also facing environmental challenges. Climate change, pollution, and coral bleaching are among the threats that impact the reef's health. Efforts are being made to preserve and protect this fragile ecosystem, and visitors are encouraged to practice responsible tourism to ensure its long-term sustainability.
    
    A visit to the Great Barrier Reef is not only an opportunity for adventure and discovery but also a chance to appreciate the importance of conservation and the need to protect our natural heritage. It is a place where visitors can connect with nature, marvel at its wonders, and gain a deeper understanding of the intricate balance of life in the world's oceans.`
    },

    {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: `Cappadocia is a unique and enchanting region located in central Turkey. Known for its surreal landscapes, fairy-tale-like rock formations, and ancient cave dwellings, Cappadocia is a destination that captures the imagination of visitors from around the world.

    One of the defining features of Cappadocia is its distinctive rock formations, often referred to as "fairy chimneys." These towering rock pillars were formed over millions of years through the erosion of volcanic ash and lava, resulting in a surreal and otherworldly landscape. The fairy chimneys have been shaped by nature and time, creating an extraordinary sight that is both mystical and captivating.
    
    Throughout history, the people of Cappadocia carved intricate dwellings and churches into the soft volcanic rock. These cave dwellings, known as "cave hotels" today, offer a unique and unforgettable accommodation experience. Staying in a cave hotel allows visitors to immerse themselves in the region's rich history and experience the charm of living in a cave-like setting.
    
    Hot air balloon rides are one of the most popular activities in Cappadocia, offering breathtaking panoramic views of the stunning landscape. Floating above the fairy chimneys and valleys at sunrise or sunset is a magical experience that allows visitors to appreciate the vastness and beauty of the region from a unique perspective.
    
    Exploring the underground cities of Cappadocia is another highlight of a visit to the region. These ancient underground complexes were carved out of the soft rock and served as shelter and protection for early inhabitants. Descending into the underground cities provides a glimpse into the region's fascinating past and the ingenuity of its inhabitants.
    
    Cappadocia also boasts a rich cultural heritage. The region is home to numerous historical sites, including rock-cut churches adorned with beautiful frescoes, ancient monasteries, and open-air museums. Visitors can explore the Göreme Open Air Museum, which showcases rock-cut churches and monastic complexes dating back to the Byzantine period.
    
    The local cuisine of Cappadocia is another highlight for food enthusiasts. Traditional dishes include specialties such as pottery kebabs, testi kebabs (meat cooked in a clay pot), and various pastries. Exploring the local markets and dining in traditional restaurants allows visitors to indulge in the flavors and aromas of authentic Cappadocian cuisine.
    
    Cappadocia's charm lies not only in its extraordinary landscapes but also in the warm hospitality of its people. The region offers a perfect blend of natural beauty, cultural heritage, and unique experiences that make it a truly remarkable destination. A visit to Cappadocia is an invitation to step into a world of wonder, where ancient history, breathtaking landscapes, and warm Turkish hospitality combine to create an unforgettable journey.`
    },

    {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: `Guanajuato is a captivating city located in central Mexico and is known for its rich history, vibrant culture, and stunning colonial architecture. Nestled in a picturesque valley surrounded by hills, Guanajuato offers a unique and enchanting experience for visitors.

    The city is famous for its colorful colonial buildings, narrow cobblestone streets, and charming plazas. Walking through the streets of Guanajuato feels like stepping back in time, with its well-preserved colonial architecture that dates back to the 16th century. The city's historic center is a UNESCO World Heritage site and is filled with architectural gems, including the stunning Basilica of Our Lady of Guanajuato and the iconic Juarez Theater.
    
    Guanajuato has a fascinating history that is deeply intertwined with the silver mining industry. In the 18th and 19th centuries, the region was one of the world's largest silver producers, and its wealth is reflected in the grandeur of its buildings and churches. Visitors can delve into the city's mining history by exploring the fascinating underground tunnels, known as the Callejón del Beso (Alley of the Kiss), and visiting the intriguing Museo de las Momias (Mummy Museum).
    
    The city is also known for its vibrant cultural scene. Guanajuato hosts the renowned International Cervantes Festival, which celebrates the literary works of Miguel de Cervantes and attracts artists, performers, and writers from around the world. The city's theaters, galleries, and museums offer a rich cultural experience, showcasing traditional Mexican art, music, and dance.
    
    Guanajuato is a city of legends and folklore. It is said to be the birthplace of the famous Mexican poet and writer, Diego Rivera, and the site of the legendary Callejón del Diablo (Devil's Alley), known for its eerie tales and ghost stories. The city's colorful celebrations, such as the vibrant Day of the Dead festivities and the lively La Callejoneada parade, showcase the region's vibrant cultural traditions.
    
    One of the highlights of visiting Guanajuato is exploring its charming plazas and alleys. The bustling Jardín de la Unión is a central gathering place, lined with outdoor cafes, restaurants, and shops. Visitors can enjoy a cup of traditional Mexican coffee or indulge in delicious local cuisine while soaking in the lively atmosphere.
    
    Guanajuato's gastronomy is a treat for food lovers. The city offers a wide range of culinary delights, from traditional Mexican street food to gourmet cuisine. Local specialties include enchiladas mineras, a dish made with corn tortillas filled with meat and covered in a rich sauce, and the famous Guanajuato-style tamales.
    
    Overall, Guanajuato is a destination that captivates visitors with its rich history, vibrant culture, and stunning architecture. Whether exploring its colonial treasures, immersing in its cultural festivals, or simply strolling through its picturesque streets, Guanajuato offers a truly unforgettable experience that showcases the beauty and charm of Mexico.`
    },

    {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: `Cinque Terre is a picturesque coastal region located in the Liguria region of Italy. Translated as "Five Lands," Cinque Terre comprises five colorful fishing villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore. Together, these villages form a UNESCO World Heritage site and are renowned for their breathtaking beauty and unique charm.

    Each village in Cinque Terre offers its own distinct character and allure. The villages are nestled along the rugged coastline, surrounded by terraced vineyards, steep cliffs, and the sparkling waters of the Ligurian Sea. The brightly colored houses that cling to the cliffs create a vibrant and picturesque backdrop against the turquoise waters, making Cinque Terre a postcard-perfect destination.
    
    One of the best ways to explore Cinque Terre is by hiking along the scenic coastal trails that connect the villages. The most famous trail is the Sentiero Azzurro, also known as the Blue Path, which offers stunning panoramic views of the coastline and allows you to immerse yourself in the natural beauty of the region. Along the way, you can discover hidden coves, olive groves, and vineyards, and experience the unique Mediterranean flora and fauna.
    
    Cinque Terre is also renowned for its delicious cuisine. The region is famous for its fresh seafood, homemade pesto, and locally produced wines, particularly the Cinque Terre DOC white wine. Visitors can indulge in traditional Ligurian dishes such as trofie pasta with pesto, stuffed anchovies, and focaccia bread, all made with locally sourced ingredients bursting with flavor.
    
    In addition to hiking and gastronomy, Cinque Terre offers other enjoyable activities. You can relax on the pebbly beaches, take a boat tour along the coastline to admire the villages from the sea, or visit the charming vineyards and wineries that dot the landscape. Each village has its own unique attractions, whether it's the medieval castle in Vernazza, the panoramic viewpoints in Manarola, or the sandy beach in Monterosso al Mare.
    
    Cinque Terre is a place where time seems to stand still, offering a slower pace of life and an opportunity to immerse yourself in the beauty of nature. It has managed to preserve its authenticity and traditional way of life, making it a beloved destination for both locals and visitors from around the world.
    
    Visiting Cinque Terre is like stepping into a postcard-perfect Italian dream, where colorful villages, breathtaking landscapes, and delicious cuisine come together to create an unforgettable experience. Whether you're a nature enthusiast, a food lover, or simply seeking a serene coastal getaway, Cinque Terre will captivate you with its undeniable charm and natural beauty.`
    },

    {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Combodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: `Angkor Wat is a magnificent temple complex located in Siem Reap, Cambodia. It is the largest religious monument in the world and one of the most important archaeological sites in Southeast Asia. Built during the Khmer Empire in the 12th century, Angkor Wat is a UNESCO World Heritage site and a symbol of Cambodia's rich cultural heritage.

    Angkor Wat is renowned for its stunning architecture, intricate carvings, and grandeur. The temple complex spans over 400 acres and is surrounded by a moat and a vast forested area. Its most distinctive feature is the central temple tower, which rises to a height of over 65 meters (213 feet) and is adorned with intricate bas-reliefs and decorative motifs.
    
    The temple's design represents the mythical Mount Meru, believed to be the home of the Hindu gods. Its five towers symbolize the peaks of Mount Meru, and the surrounding walls and moat represent the cosmic ocean. The entire complex is designed to align with astronomical and symbolic references, showcasing the architectural and engineering genius of the Khmer civilization.
    
    Exploring Angkor Wat allows visitors to immerse themselves in ancient history and marvel at the impressive craftsmanship. The intricate bas-reliefs depict scenes from Hindu mythology, epic battles, and daily life during the Khmer Empire. These carvings offer a glimpse into the rich cultural and religious beliefs of the time.
    
    Sunrise and sunset are particularly enchanting times to visit Angkor Wat. Watching the sun cast its golden rays over the temple complex creates a magical atmosphere and enhances the temple's beauty. The reflection of the temple in the surrounding moat adds to the ethereal experience.
    
    Beyond Angkor Wat itself, the Angkor Archaeological Park encompasses several other temples and ruins, each with its own unique charm and historical significance. Some notable temples include Bayon Temple, known for its towering stone faces, and Ta Prohm, famous for its intertwined tree roots that have become intertwined with the temple's structures.
    
    Visiting Angkor Wat is not only a visual delight but also an opportunity to appreciate the historical and cultural importance of the Khmer Empire. The site attracts millions of visitors each year, offering a chance to witness the architectural wonders of the past and gain insights into Cambodia's rich heritage.
    
    It is important to note that Angkor Wat is not only a tourist destination but also a sacred site for Cambodians. Visitors are expected to dress modestly and show respect for the religious and cultural significance of the temple complex.
    
    Angkor Wat is truly a testament to human ingenuity and artistic excellence. Its grandeur, historical significance, and intricate craftsmanship make it a must-visit destination for history enthusiasts, architecture lovers, and those seeking a glimpse into the ancient world of Southeast Asia.`
    },

    {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: `Angkor Wat is a magnificent temple complex located in Siem Reap, Cambodia. It is the largest religious monument in the world and one of the most important archaeological sites in Southeast Asia. Built during the Khmer Empire in the 12th century, Angkor Wat is a UNESCO World Heritage site and a symbol of Cambodia's rich cultural heritage.

    Angkor Wat is renowned for its stunning architecture, intricate carvings, and grandeur. The temple complex spans over 400 acres and is surrounded by a moat and a vast forested area. Its most distinctive feature is the central temple tower, which rises to a height of over 65 meters (213 feet) and is adorned with intricate bas-reliefs and decorative motifs.
    
    The temple's design represents the mythical Mount Meru, believed to be the home of the Hindu gods. Its five towers symbolize the peaks of Mount Meru, and the surrounding walls and moat represent the cosmic ocean. The entire complex is designed to align with astronomical and symbolic references, showcasing the architectural and engineering genius of the Khmer civilization.
    
    Exploring Angkor Wat allows visitors to immerse themselves in ancient history and marvel at the impressive craftsmanship. The intricate bas-reliefs depict scenes from Hindu mythology, epic battles, and daily life during the Khmer Empire. These carvings offer a glimpse into the rich cultural and religious beliefs of the time.
    
    Sunrise and sunset are particularly enchanting times to visit Angkor Wat. Watching the sun cast its golden rays over the temple complex creates a magical atmosphere and enhances the temple's beauty. The reflection of the temple in the surrounding moat adds to the ethereal experience.
    
    Beyond Angkor Wat itself, the Angkor Archaeological Park encompasses several other temples and ruins, each with its own unique charm and historical significance. Some notable temples include Bayon Temple, known for its towering stone faces, and Ta Prohm, famous for its intertwined tree roots that have become intertwined with the temple's structures.
    
    Visiting Angkor Wat is not only a visual delight but also an opportunity to appreciate the historical and cultural importance of the Khmer Empire. The site attracts millions of visitors each year, offering a chance to witness the architectural wonders of the past and gain insights into Cambodia's rich heritage.
    
    It is important to note that Angkor Wat is not only a tourist destination but also a sacred site for Cambodians. Visitors are expected to dress modestly and show respect for the religious and cultural significance of the temple complex.
    
    Angkor Wat is truly a testament to human ingenuity and artistic excellence. Its grandeur, historical significance, and intricate craftsmanship make it a must-visit destination for history enthusiasts, architecture lovers, and those seeking a glimpse into the ancient world of Southeast Asia.`
    },

    {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: `Bali is an enchanting island located in the Indonesian archipelago and is often referred to as the "Island of the Gods." It is renowned for its picturesque landscapes, stunning beaches, vibrant culture, and warm hospitality. Bali offers a unique blend of natural beauty, spirituality, and a rich artistic heritage, making it a popular destination for travelers from around the world.

    One of the highlights of Bali is its volcanic mountains, which provide a dramatic backdrop to the island's scenic beauty. Mount Agung, the highest peak on the island, and Mount Batur, known for its stunning sunrise trek, are popular attractions for adventure enthusiasts and hikers.
    
    Bali is also famous for its pristine sandy beaches and crystal-clear waters. From the popular beach resorts in Kuta and Seminyak to the more secluded beaches in Nusa Dua and Uluwatu, there is a beach to suit every preference. Visitors can relax on the sun-kissed shores, indulge in water sports like surfing and snorkeling, or simply enjoy the breathtaking sunsets Bali is known for.
    
    The island's culture and spirituality are deeply rooted in Balinese Hinduism. Temples, known as "pura," are scattered across the island and are an integral part of the local way of life. The iconic Tanah Lot Temple, perched on a rocky outcrop overlooking the sea, and the majestic Besakih Temple, also known as the "Mother Temple," are must-visit sites for their architectural beauty and spiritual significance.
    
    Bali is renowned for its vibrant arts and crafts scene. Traditional art forms such as painting, woodcarving, and intricate silver jewelry making are still practiced by local artisans. Ubud, the cultural heart of Bali, is famous for its art galleries, traditional dance performances, and the famous Ubud Monkey Forest.
    
    The island offers a diverse culinary experience, ranging from local street food to fine dining restaurants. Balinese cuisine is known for its rich flavors, aromatic spices, and fresh ingredients. Visitors can sample traditional dishes such as nasi goreng (fried rice), satay, babi guling (roast suckling pig), and the famous Balinese coffee known as kopi luwak.
    
    Bali also provides ample opportunities for wellness and relaxation. The island is dotted with luxurious spas and wellness retreats offering rejuvenating massages, yoga classes, and holistic treatments. Visitors can immerse themselves in the tranquil surroundings and embrace the island's serene and spiritual energy.
    
    Whether you seek adventure, cultural exploration, relaxation, or a spiritual journey, Bali offers a captivating and immersive experience. Its natural beauty, warm hospitality, and vibrant culture make it a destination that truly leaves a lasting impression on all who visit. Bali is a place where one can find a perfect balance between relaxation, exploration, and spiritual discovery.`
    },

    {
      id: 10,
      imgSrc: img10,
      destTitle: 'Santorini',
      location: 'Greece',
      grade: 'CULTURAL RELAX',
      fees: '$790',
      description: `Santorini, also known as Thira, is a mesmerizing Greek island nestled in the Aegean Sea. Renowned for its breathtaking beauty, stunning sunsets, and unique architectural charm, Santorini is a dream destination for travelers seeking a perfect blend of natural wonders, cultural experiences, and romantic ambiance.

      The island is famous for its iconic white-washed buildings perched on the edge of dramatic cliffs, overlooking the deep blue waters of the caldera. The picturesque towns of Fira, Oia, and Imerovigli showcase the quintessential Santorini postcard views, with narrow winding streets, blue-domed churches, and charming boutique shops. Exploring these towns feels like stepping into a fairytale world, where every corner reveals a stunning panorama.
      
      Santorini's volcanic origins have gifted the island with unique geological formations and pristine beaches. Perissa and Kamari are two popular black sand beaches where you can relax, soak up the sun, and enjoy the crystal-clear waters. Red Beach, with its striking red cliffs and pebbly shores, creates a dramatic contrast against the azure sea. Additionally, the volcanic hot springs of Palea Kameni offer a rejuvenating and therapeutic bathing experience.
      
      One of the must-visit attractions in Santorini is the ancient site of Akrotiri. Often referred to as the "Pompeii of the Aegean," this archaeological site showcases the remains of a Minoan Bronze Age settlement preserved remarkably well under layers of volcanic ash. Explore the well-preserved buildings, intricate frescoes, and artifacts that provide insights into the island's ancient history.
      
      Santorini is also renowned for its world-class wineries. The island's volcanic soil, unique microclimate, and indigenous grape varieties contribute to the production of exceptional wines. Take a wine tour and sample the famous Assyrtiko, Nykteri, and Vinsanto wines while enjoying panoramic views of the vineyards and the sea.
      
      To witness the iconic Santorini sunset, head to the village of Oia. As the sun dips below the horizon, the sky transforms into a canvas of vibrant hues, casting a magical glow over the entire island. Find a spot along the caldera's edge or book a sunset cruise to witness this awe-inspiring spectacle.
      
      Santorini is also a culinary paradise, offering a delightful array of traditional Greek dishes and fresh seafood. Indulge in local specialties such as fava, tomatokeftedes (tomato fritters), grilled octopus, and moussaka. Pair your meal with a glass of Santorinian wine for a truly unforgettable gastronomic experience.
      
      For those seeking adventure, embark on a hiking trail from Fira to Oia or explore the island's underwater wonders through snorkeling or scuba diving. Santorini's rugged coastline, volcanic cliffs, and underwater caves provide a captivating underwater playground for exploration.
      
      In addition to its natural and cultural attractions, Santorini is also a paradise for art enthusiasts. Discover contemporary and traditional artwork in the island's galleries and admire the craftsmanship of local artisans in their studios.
      
      Whether you're savoring the romance of a honeymoon, seeking a memorable family vacation, or immersing yourself in the rich history and beauty of the Greek islands, Santorini offers an enchanting escape that will leave you in awe of its unique charm and unforgettable experiences.`,
    },

    {
    id: 11,
    imgSrc: img11,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: `Kyoto, located in the Kansai region of Japan, is a city steeped in history, tradition, and natural beauty. As the former imperial capital of Japan for over a thousand years, Kyoto is a captivating blend of ancient temples, traditional gardens, exquisite craftsmanship, and vibrant cultural experiences.

    One of the most iconic attractions in Kyoto is Kinkaku-ji, also known as the Golden Pavilion. This stunning Zen Buddhist temple is adorned with gold leaf and is surrounded by picturesque gardens, reflecting in a tranquil pond. Its shimmering golden exterior and serene setting make it a symbol of Kyoto's beauty and spirituality.
    
    Another must-visit site in Kyoto is Fushimi Inari Taisha, famous for its thousands of vibrant red torii gates that form a winding pathway up the sacred Mount Inari. As you hike through the gates, you'll be immersed in a mystical atmosphere, passing by smaller shrines, stone fox statues, and enjoying panoramic views of the city below.
    
    Kyoto is also home to numerous historic temples and shrines, each with its own unique charm and significance. Kiyomizu-dera, perched on a hillside, offers panoramic views of Kyoto and features a wooden terrace that seems to jut out from the mountainside. The rock garden at Ryoan-ji temple is a serene masterpiece of Zen minimalism, while the vibrant vermillion gates of Fushimi Momoyama Castle evoke a sense of feudal Japan.
    
    To experience the traditional side of Kyoto, a visit to the Gion district is a must. Known for its preserved wooden machiya houses and geisha culture, Gion offers a glimpse into the elegance and grace of Kyoto's past. Stroll along Hanamikoji Street, where you might catch a glimpse of a geisha or maiko (apprentice geisha) gracefully walking to their appointments.
    
    Kyoto is also famous for its beautiful traditional gardens, meticulously designed to evoke a sense of tranquility and harmony with nature. The gardens of Ginkaku-ji (Silver Pavilion), Tenryu-ji, and Katsura Imperial Villa showcase exquisite landscapes, perfectly manicured moss, serene ponds, and carefully placed rocks and trees. These gardens are ideal for contemplation, meditation, and appreciation of the artistry behind Japanese garden design.
    
    For a taste of Kyoto's rich cultural heritage, visit Nijo Castle, a UNESCO World Heritage Site that served as the residence of the Tokugawa shoguns. The castle features stunning architecture, including "nightingale floors" designed to chirp when walked upon to warn against intruders. The nearby Nishiki Market offers a culinary adventure, where you can sample traditional Kyoto delicacies, fresh seafood, and local specialties.
    
    Kyoto's charm extends beyond its historic sites, as it is surrounded by picturesque natural landscapes. The Arashiyama Bamboo Grove is a serene bamboo forest that transports you to a tranquil world as you walk through the towering bamboo stalks. The nearby Sagano Scenic Railway offers a leisurely train ride through the scenic Hozu River gorge, showcasing the beauty of Kyoto's countryside.
    
    In Kyoto, you can also experience traditional Japanese tea ceremonies, participate in a kimono-wearing experience, try your hand at calligraphy or pottery, and savor the refined flavors of Kyoto cuisine, known for its emphasis on seasonal ingredients and delicate presentation.
    
    Whether you're captivated by the ancient temples, enchanted by the beauty of traditional gardens, or drawn to the tranquility of Zen culture, Kyoto offers a mesmerizing journey into Japan's rich heritage. Its blend of history, nature, artistry, and spirituality make it a captivating destination that will leave a lasting impression on your heart and mind.`,
    },
    
    {
    id: 12,
    imgSrc: img12,
    destTitle: 'Petra',
    location: 'Jordan',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: `Petra, located in southern Jordan, is an ancient city and UNESCO World Heritage Site that holds immense historical and archaeological significance. Often referred to as the "Rose City," Petra is renowned for its remarkable rock-cut architecture, stunning landscapes, and rich cultural heritage.

    The city of Petra was established by the Nabateans, an ancient Arab civilization, around the 6th century BCE. Carved into the red sandstone cliffs, Petra served as a major trading hub and an important crossroads for various ancient civilizations, including the Egyptians, Greeks, Romans, and Byzantines. Its strategic location allowed it to thrive as a center of commerce and cultural exchange.
    
    The most iconic feature of Petra is the Treasury, also known as Al-Khazneh, which serves as the entrance to the city. This magnificent structure is carved into the rock face and showcases intricate Hellenistic and Nabatean architectural details. As you venture further into Petra, you'll encounter an array of impressive tombs, temples, theaters, and dwellings, all carved into the cliffs with exceptional craftsmanship.
    
    The Siq, a narrow gorge with towering cliffs on either side, serves as the main entrance to Petra. As you walk through this natural wonder, you'll be captivated by its beauty and the anticipation of reaching the Treasury. The Siq reveals stunning geological formations, with rocks displaying vibrant colors and unique patterns.
    
    Beyond the Treasury, Petra unfolds into a vast archaeological site with numerous notable attractions. The Monastery (Al-Deir) is another highlight, located high up on a mountain and offering panoramic views of the surrounding valleys. The Royal Tombs, the Roman Theater, and the Great Temple are among the other remarkable structures that showcase the architectural mastery of the Nabateans.
    
    Exploring Petra is a journey through time, immersing you in the history and culture of an ancient civilization. The intricate carvings, the grandeur of the structures, and the sheer scale of the site are awe-inspiring. It's worth noting that Petra is not limited to its famous landmarks; the entire site is a treasure trove of hidden corners, secret trails, and lesser-known structures waiting to be discovered.
    
    In addition to its historical significance, Petra is nestled within a stunning desert landscape, adding to its allure. The rugged mountains, deep canyons, and expansive desert vistas create a surreal and captivating backdrop. As you explore the site, you'll be surrounded by breathtaking natural beauty that further enhances the experience.
    
    To make the most of your visit to Petra, it's recommended to spend ample time exploring the site and taking in its wonders. Guided tours are available to provide insights into the history, architecture, and cultural significance of the various structures. Additionally, you can embark on hiking trails that lead to viewpoints offering spectacular vistas of Petra and its surroundings.
    
    Petra is more than just an archaeological site; it's a testament to human ingenuity, a bridge to the past, and a mesmerizing destination that leaves visitors in awe. Its blend of historical significance, architectural marvels, and natural beauty make it a must-visit destination for travelers seeking a unique and enriching experience.`,
    },

    {
    id: 13,
    imgSrc: img13,
    destTitle: 'Galapagos Islands',
    location: 'Ecuador',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: `The Galapagos Islands, located in the Pacific Ocean off the coast of Ecuador, are a true natural wonder and a paradise for wildlife enthusiasts and nature lovers. This archipelago consists of 18 main islands and numerous smaller islets, each offering a unique and diverse ecosystem that has captivated scientists, explorers, and travelers for centuries.

    One of the most remarkable features of the Galapagos Islands is their biodiversity. These remote volcanic islands are home to an incredible array of plant and animal species, many of which are found nowhere else on Earth. The islands played a crucial role in Charles Darwin's theory of evolution, as he studied the unique species that inhabit the archipelago and developed his groundbreaking ideas.
    
    Exploring the Galapagos Islands is like stepping into a living laboratory. From giant tortoises to marine iguanas, blue-footed boobies to Galapagos penguins, the islands are teeming with fascinating wildlife. You can witness sea lions basking on the beaches, spot colorful tropical fish while snorkeling in the crystal-clear waters, and observe Darwin's finches displaying their distinctive beak adaptations.
    
    One of the best ways to experience the Galapagos Islands is through a guided cruise or island-hopping tour. These excursions allow you to visit multiple islands and encounter their unique inhabitants. Expert naturalist guides accompany you, providing insightful commentary and ensuring minimal impact on the fragile ecosystem.
    
    Each island in the Galapagos has its own distinct characteristics. Santa Cruz Island is the most populated and offers a range of visitor sites, including the Charles Darwin Research Station, where you can learn about conservation efforts and see giant tortoises up close. Isabela Island is the largest and boasts incredible volcanic landscapes, including Sierra Negra, one of the world's largest active calderas. Fernandina Island is known for its pristine and untouched landscapes, while North Seymour Island is famous for its abundant birdlife, including frigatebirds and blue-footed boobies.
    
    The Galapagos Marine Reserve surrounding the islands is a haven for marine life. Snorkeling and diving opportunities abound, allowing you to swim alongside sea turtles, playful sea lions, and even graceful manta rays. You may also have the chance to spot dolphins, sharks, and whales in the open waters.
    
    In addition to its wildlife, the Galapagos Islands boast stunning natural landscapes. From the rugged volcanic terrain and ancient lava flows to pristine white sandy beaches and turquoise bays, the archipelago offers breathtaking vistas at every turn. Hiking trails lead you through diverse ecosystems, from arid deserts to lush highland forests, offering unparalleled opportunities for exploration and adventure.
    
    Preserving the delicate balance of the Galapagos ecosystem is of utmost importance. Strict regulations and conservation efforts are in place to protect the islands' unique biodiversity. Visitors are required to follow guidelines to minimize their impact and help preserve the natural beauty and integrity of the archipelago.
    
    A trip to the Galapagos Islands is a once-in-a-lifetime experience that offers a rare opportunity to witness nature's wonders up close. Whether you're an avid wildlife enthusiast, a nature photographer, or simply someone who appreciates the incredible diversity of our planet, the Galapagos Islands will leave you in awe of their beauty, biodiversity, and the extraordinary connections between species that inspired one of the greatest scientific theories of all time.`,
    },

    {
    id: 14,
    imgSrc: img14,
    destTitle: 'Dubrovnik',
    location: 'Croatia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: `Dubrovnik, often referred to as the "Pearl of the Adriatic," is a stunning coastal city located in southern Croatia. With its rich history, breathtaking architecture, and picturesque setting, Dubrovnik has become a popular destination for travelers seeking a unique blend of culture, natural beauty, and Mediterranean charm.

    The city's most iconic feature is its beautifully preserved medieval walls that encircle the historic Old Town. Walking along these ancient fortifications offers panoramic views of the city's terracotta rooftops, the shimmering Adriatic Sea, and the nearby islands. The walls themselves have withstood the test of time and provide a glimpse into Dubrovnik's storied past.
    
    Within the walls of the Old Town, visitors are transported back in time. The narrow cobblestone streets, elegant palaces, and baroque churches showcase the city's rich architectural heritage. The main street, known as Stradun or Placa, is lined with cafes, restaurants, and shops, inviting visitors to indulge in the local cuisine, sip on Croatian wines, and browse for unique souvenirs.
    
    Dubrovnik is also known for its cultural festivals and events. The Dubrovnik Summer Festival, held annually from July to August, brings the city to life with a vibrant program of music, theater, and dance performances in various historic venues. The atmosphere is electric as locals and visitors come together to celebrate the arts against the backdrop of the city's historic sites.
    
    For history enthusiasts, a visit to Dubrovnik would not be complete without exploring the Rector's Palace, the Franciscan Monastery, and the Dubrovnik Cathedral. These landmarks offer a glimpse into the city's rich history and showcase its architectural splendor. The Maritime Museum and the Dubrovnik City Walls Museum provide further insights into the city's maritime heritage and fortification systems.
    
    Dubrovnik is also renowned for its beautiful beaches and crystal-clear waters. Banje Beach, located just outside the city walls, is a popular spot for sunbathing and swimming. For a more secluded experience, the nearby island of Lokrum offers pristine beaches and lush botanical gardens, making it a perfect day trip destination.
    
    To truly appreciate Dubrovnik's natural beauty, taking a cable car to the top of Mount Srđ is a must. From the summit, visitors are rewarded with panoramic views of the entire city, the Adriatic Sea, and the surrounding islands. The breathtaking sunsets from this vantage point are particularly memorable.
    
    Cuisine plays a significant role in the Dubrovnik experience. The city's coastal location means fresh seafood is a staple of the local cuisine. From grilled fish and octopus salads to black risotto and local oysters, there is no shortage of culinary delights to indulge in. Pair your meal with a glass of local wine or rakija, a traditional Croatian brandy, for a true gastronomic experience.
    
    Beyond the city itself, Dubrovnik serves as a gateway to exploring the stunning Dalmatian Coast and its numerous islands. From day trips to the nearby Elafiti Islands to island hopping adventures to Hvar, Korčula, and Mljet, there are endless opportunities for exploration and relaxation in this coastal paradise.
    
    In conclusion, Dubrovnik is a destination that effortlessly combines history, culture, natural beauty, and Mediterranean charm. Whether you're strolling along the ancient city walls, immersing yourself in the rich architectural heritage, or enjoying the sun-drenched beaches and stunning sunsets, Dubrovnik will leave you with unforgettable memories and a longing to return to its enchanting embrace.`,
    },

    {
      id: 15,
      imgSrc: img15,
      destTitle: 'Queenstown',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$790',
      description: `Queenstown, located in the South Island of New Zealand, is a picturesque and captivating destination that offers a diverse range of attractions and experiences. Nestled on the shores of Lake Wakatipu and surrounded by majestic mountains, Queenstown is renowned for its breathtaking natural beauty, adventure sports, and vibrant atmosphere.

      One of the main highlights of Queenstown is its stunning alpine landscapes. The towering peaks of The Remarkables and the Southern Alps create a dramatic backdrop, providing endless opportunities for outdoor adventures. From hiking and mountain biking to skiing and snowboarding in the winter months, Queenstown is a paradise for adrenaline junkies and nature enthusiasts.
      
      For those seeking a thrill, Queenstown is often referred to as the "Adventure Capital of the World." You can indulge in activities like bungee jumping, skydiving, jet boating, and white-water rafting, which are sure to get your heart racing. The Shotover River and Kawarau River offer exhilarating experiences for adventure seekers, while paragliding and zip-lining provide a unique perspective of the stunning surroundings.
      
      Queenstown is also known for its vibrant nightlife and bustling dining scene. The town center is filled with a wide array of restaurants, cafes, bars, and boutique shops, offering a blend of international cuisines and local delights. After a day of exploring, you can relax by the lakefront and enjoy the scenic views or indulge in a spa treatment to rejuvenate your senses.
      
      For wine lovers, Queenstown is situated in the heart of the Central Otago wine region, known for its award-winning Pinot Noir. You can embark on a wine tour and visit the region's vineyards, tasting the renowned wines while taking in the breathtaking vineyard landscapes.
      
      Nature enthusiasts will be enthralled by the stunning beauty of Queenstown's surrounding areas. Milford Sound, one of New Zealand's most iconic natural wonders, is easily accessible from Queenstown and offers breathtaking fjords, waterfalls, and wildlife. Fiordland National Park and Glenorchy, located nearby, showcase the region's pristine wilderness and offer hiking trails through ancient beech forests and awe-inspiring mountain vistas.
      
      In addition to its natural and adventure offerings, Queenstown hosts a variety of events and festivals throughout the year. From the Queenstown Winter Festival celebrating the start of the ski season to the vibrant Arrowtown Autumn Festival, there's always something happening in this lively town.
      
      Queenstown's charm lies in its ability to cater to a wide range of interests and passions. Whether you seek thrilling adventures, serene natural beauty, culinary delights, or a lively social scene, Queenstown offers a perfect blend of experiences that will leave you enchanted and longing to return.`,
    },

    {
    id: 16,
    imgSrc: img16,
    destTitle: 'The Great Wall of China',
    location: ', China',
    grade: 'CULTURAL RELAX',
    fees: '$1990',
    description: `The Great Wall of China is an awe-inspiring testament to human ingenuity and engineering prowess. Spanning over 13,000 miles (21,196 kilometers) across northern China, it is one of the world's most iconic and monumental structures. Built over several centuries, the Great Wall is a testament to the rich history, culture, and achievements of ancient China.

    The purpose of the Great Wall was multifaceted. It served as a formidable defense system, protecting ancient Chinese dynasties from invading forces. It also served as a symbol of national unity, a physical embodiment of China's rich heritage and enduring civilization. Today, it stands as a testament to the incredible feat of human labor and engineering.
    
    The Great Wall is not a single continuous structure but a series of walls, fortifications, and watchtowers constructed during different dynasties. The most well-known and best-preserved sections are located near Beijing, including Badaling, Mutianyu, and Jinshanling. These sections offer visitors the opportunity to walk along the wall, climb watchtowers, and soak in the panoramic views of the surrounding landscapes.
    
    Walking along the Great Wall is an unforgettable experience. As you traverse its winding paths and stone steps, you can't help but marvel at the immense scale of the structure and the breathtaking landscapes it traverses. From rugged mountains and rolling hills to vast stretches of open countryside, the Great Wall provides a spectacular backdrop for exploration and adventure.
    
    Each section of the Great Wall has its own unique characteristics and charm. For example, the Badaling section is the most visited and easily accessible, offering well-preserved fortifications and stunning views. The Mutianyu section is known for its scenic beauty, surrounded by lush greenery and boasting a cable car for easy access. The Jinshanling section is popular among hikers, with its rugged terrain and picturesque vistas.
    
    Beyond its architectural grandeur, the Great Wall holds significant historical and cultural importance. It is a symbol of China's ancient civilization, representing the country's resilience, innovation, and enduring spirit. Visitors have the opportunity to learn about the history of the wall, its construction techniques, and the stories of the emperors, soldiers, and laborers who contributed to its creation.
    
    Whether you are fascinated by history, captivated by the monumental scale of human achievement, or simply seeking awe-inspiring landscapes, a visit to the Great Wall of China is an experience that will leave an indelible impression. It is a journey back in time, an encounter with an iconic masterpiece, and a chance to appreciate the remarkable legacy of ancient China.`,
    },

    {
    id: 17,
    imgSrc: img17,
    destTitle: 'The Maldives',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$1890',
    description: `The Maldives, a tropical paradise located in the Indian Ocean, is renowned for its stunning natural beauty, pristine white-sand beaches, crystal-clear turquoise waters, and vibrant coral reefs. Comprising of 26 coral atolls and over 1,000 islands, the Maldives offers a dreamlike setting that captivates visitors from around the world.

    One of the main attractions of the Maldives is its breathtaking beaches. The powdery soft sand, lined with swaying palm trees, invites you to relax, soak up the sun, and take leisurely walks along the shore. The pristine turquoise waters are perfect for swimming, snorkeling, and diving, offering a glimpse into a vibrant underwater world teeming with colorful coral reefs and diverse marine life.
    
    The Maldives is renowned for its luxury resorts, many of which are located on private islands. These resorts offer exquisite accommodations in the form of overwater villas and beachfront bungalows. Imagine waking up to the sound of gentle waves and stepping out onto your private deck to admire panoramic views of the ocean. The Maldives truly epitomizes luxury and indulgence, providing an idyllic escape for honeymooners, couples, and those seeking a romantic getaway.
    
    The underwater world of the Maldives is a paradise for diving and snorkeling enthusiasts. The coral reefs are teeming with an abundance of marine species, including colorful fish, turtles, manta rays, and even whale sharks. Snorkeling and diving excursions offer the opportunity to explore vibrant coral gardens, swim alongside majestic sea creatures, and witness the wonders of the ocean firsthand.
    
    For those seeking relaxation and rejuvenation, the Maldives offers world-class spa experiences. Many resorts boast luxurious spa facilities nestled amidst lush tropical gardens or overlooking the turquoise lagoon. Indulge in soothing massages, rejuvenating treatments, and wellness therapies inspired by traditional Maldivian practices, ensuring a holistic and revitalizing experience.
    
    Beyond its natural beauty, the Maldives also offers a glimpse into its unique culture and traditions. Visit local islands to immerse yourself in the Maldivian way of life, interact with friendly locals, explore colorful markets, and discover traditional handicrafts. Sample authentic Maldivian cuisine, known for its fresh seafood, aromatic spices, and tropical flavors, and experience cultural performances that showcase traditional music, dance, and storytelling.
    
    Whether you're seeking a romantic retreat, an adventurous escapade, or simply a tranquil getaway surrounded by natural splendor, the Maldives offers an unrivaled experience. It is a destination that invites you to unwind, reconnect with nature, and create unforgettable memories amidst a tropical paradise. From its pristine beaches to its vibrant marine life, the Maldives is a true haven for those seeking a slice of paradise on earth.`,
    },
    
    {
    id: 18,
    imgSrc: img18,
    destTitle: 'The Canadian Rockies',
    location: 'Canada',
    grade: 'CULTURAL RELAX',
    fees: '$990',
    description: `The Canadian Rockies, located in western Canada, are a majestic mountain range that stretches across the provinces of Alberta and British Columbia. This natural wonderland is renowned for its stunning landscapes, rugged peaks, pristine glacial lakes, and abundant wildlife, making it a dream destination for nature lovers and outdoor enthusiasts.

    One of the highlights of the Canadian Rockies is the collection of national parks that encompass this region, including Banff National Park, Jasper National Park, Yoho National Park, and Kootenay National Park. These parks offer unparalleled beauty and serve as protected areas for diverse ecosystems and wildlife. Towering snow-capped mountains, such as Mount Robson and Mount Columbia, dominate the skyline, creating a dramatic backdrop for the surrounding wilderness.
    
    Glacial lakes, such as Lake Louise, Moraine Lake, and Peyto Lake, are among the most iconic attractions in the Canadian Rockies. These turquoise-colored lakes are fed by melting glaciers and offer breathtaking views of the surrounding mountains. Visitors can hike along the lake shores, go canoeing or kayaking, or simply relax and take in the awe-inspiring beauty of these natural wonders.
    
    The Canadian Rockies are also home to numerous picturesque waterfalls, including Athabasca Falls, Takakkaw Falls, and Helmcken Falls. These cascading falls create a symphony of rushing water, providing a mesmerizing sight and a perfect backdrop for photography.
    
    For adventure seekers, the Canadian Rockies offer endless opportunities for outdoor activities. Hiking is a popular pursuit, with an extensive network of trails ranging from easy strolls to challenging multi-day treks. The region also offers world-class rock climbing, mountaineering, and backcountry skiing for those seeking a more adrenaline-fueled experience.
    
    Wildlife is abundant in the Canadian Rockies, and it's not uncommon to spot animals such as black bears, grizzly bears, elk, moose, mountain goats, and bighorn sheep. Wildlife enthusiasts can embark on wildlife safaris or take guided tours to observe and learn about the unique fauna that calls this region home.
    
    In addition to its natural wonders, the Canadian Rockies are dotted with charming mountain towns and resort communities. Banff and Jasper are two of the most popular destinations, offering a blend of outdoor adventure, cultural experiences, and cozy mountain charm. These towns feature a range of accommodations, from luxury resorts to rustic cabins, as well as restaurants, art galleries, and boutiques.
    
    The Canadian Rockies truly offer a wilderness experience like no other. With its awe-inspiring landscapes, pristine nature, and a wealth of outdoor activities, this region invites visitors to immerse themselves in its beauty and find solace in the grandeur of the mountains. Whether exploring hiking trails, gazing at glacial lakes, or encountering wildlife, the Canadian Rockies promise an unforgettable adventure in one of the world's most breathtaking natural wonders.`,
    },

    {
    id: 19,
    imgSrc: img19,
    destTitle: 'The Serengeti',
    location: 'Tanzania/Kenya',
    grade: 'CULTURAL RELAX',
    fees: '$1790',
    description: `The Serengeti, located in northern Tanzania, is one of Africa's most iconic and awe-inspiring natural wonders. It is a vast and diverse ecosystem that encompasses the Serengeti National Park, as well as several adjacent reserves and conservation areas. Known for its stunning landscapes, abundant wildlife, and annual migration of millions of animals, the Serengeti is a dream destination for wildlife enthusiasts and nature lovers.

    The Serengeti National Park is home to a remarkable array of wildlife, including the famous African Big Five: lions, elephants, buffalos, leopards, and rhinoceros. These majestic animals roam freely across the vast plains, along with numerous other species such as cheetahs, giraffes, zebras, wildebeests, hippos, and crocodiles. It is a wildlife haven where visitors can witness thrilling predator-prey interactions, marvel at the beauty of the animal kingdom, and gain a deeper understanding of the delicate balance of nature.
    
    One of the most incredible natural events that occur in the Serengeti is the Great Migration. This annual phenomenon involves the movement of over two million wildebeests, zebras, and gazelles as they follow a circular route in search of fresh grazing lands and water sources. It is a spectacle of epic proportions, as the thundering herds traverse the plains, cross rivers teeming with crocodiles, and face the constant threat of predators. Witnessing this incredible migration is a once-in-a-lifetime experience that leaves visitors in awe of the resilience and harmony of nature.
    
    The Serengeti's landscape is incredibly diverse, ranging from vast grassy plains to acacia woodlands, rocky outcrops, and seasonal marshes. The golden savannah stretches as far as the eye can see, providing a dramatic backdrop for wildlife encounters. The famous Serengeti sunset casts a golden glow over the plains, creating a surreal and enchanting atmosphere.
    
    In addition to game drives, the Serengeti offers various activities to immerse visitors in its natural beauty. Hot air balloon safaris provide a unique perspective, allowing guests to soar above the plains and witness the wildlife from a different angle. Guided walking safaris offer an intimate and up-close experience, where knowledgeable guides share insights into the flora, fauna, and smaller wildlife that often go unnoticed during game drives. Cultural visits to local Maasai villages provide a glimpse into the traditional way of life of the Maasai people, who have coexisted with the wildlife in the region for centuries.
    
    Accommodation options in the Serengeti range from luxury lodges and tented camps to more rustic and authentic safari camps. These accommodations blend seamlessly into the natural surroundings, offering comfort and convenience while allowing guests to fully connect with the wilderness. Many lodges and camps are strategically located to provide prime wildlife viewing opportunities, with some offering exclusive access to private game reserves.
    
    The Serengeti is not just a destination for a safari adventure; it is a place of profound beauty, raw wilderness, and a testament to the extraordinary diversity of life on Earth. It is a sanctuary where the circle of life unfolds daily, and where nature's wonders are showcased in all their splendor. A visit to the Serengeti is an opportunity to witness the untamed beauty of Africa and create lasting memories of encounters with some of the world's most remarkable creatures in their natural habitat.`,
    },

    {
    id: 20,
    imgSrc: img20,
    destTitle: 'Seoul',
    location: 'South Korea',
    grade: 'CULTURAL RELAX',
    fees: '$1970',
    description: `Seoul, the capital city of South Korea, is a vibrant and dynamic metropolis that seamlessly blends traditional culture with modern advancements. With its rich history, cutting-edge technology, and captivating attractions, Seoul offers a unique and immersive experience for visitors.

    One of the highlights of Seoul is its traditional palaces, such as Gyeongbokgung Palace and Changdeokgung Palace. These grand structures showcase the architectural beauty and cultural heritage of the Joseon Dynasty. Visitors can explore the intricate palace buildings, stroll through beautiful gardens, and witness the Changing of the Guard ceremony, a traditional ritual that takes place daily.
    
    Seoul is also renowned for its bustling street markets, including Namdaemun Market and Dongdaemun Market. These vibrant markets offer a wide array of goods, from traditional crafts and souvenirs to the latest fashion trends. Exploring the markets allows visitors to immerse themselves in the local culture, taste delicious street food, and engage in lively bargaining.
    
    For those interested in modern technology and innovation, Seoul is a hub of technological advancements. It is home to numerous futuristic attractions, including the iconic Dongdaemun Design Plaza, a landmark known for its avant-garde architecture. The city is also famous for its high-tech shopping districts, such as Myeongdong, where visitors can find the latest gadgets, trendy fashion, and beauty products.
    
    Seoul is a city that never sleeps, offering a vibrant nightlife scene with countless entertainment options. Areas like Hongdae and Gangnam are known for their trendy clubs, bars, and live music venues. Visitors can enjoy a variety of performances, from K-pop concerts to traditional Korean music and dance shows.
    
    Food lovers will delight in Seoul's diverse culinary scene. The city is famous for its street food, where you can indulge in delicious treats like tteokbokki (spicy rice cakes), samgyeopsal (grilled pork belly), and bibimbap (mixed rice bowl). Additionally, Seoul offers a wide range of dining options, from traditional Korean cuisine to international dishes prepared by world-renowned chefs.
    
    Seoul's modern infrastructure is complemented by its beautiful natural spaces. The city is surrounded by mountains, providing opportunities for hiking and enjoying scenic views. Namsan Park, located in the heart of the city, offers a peaceful retreat with walking trails, pagodas, and panoramic views of Seoul's skyline.
    
    Overall, Seoul is a captivating city that seamlessly combines ancient traditions with modernity. Its vibrant culture, technological advancements, delicious cuisine, and warm hospitality make it an exciting and memorable destination for travelers seeking a blend of history, culture, and urban experiences.`,
    },

    {
      id: 21,
      imgSrc: img21,
      destTitle: 'Gardens by the Bay',
      location: 'Singapore',
      grade: 'CULTURAL RELAX',
      fees: '$1870',
      description: `One of the best places to visit in Singapore is Gardens by the Bay. This iconic nature park is a must-see attraction that showcases the city's commitment to sustainability and horticulture. Spanning 101 hectares, Gardens by the Bay is home to a diverse range of flora and fauna, including towering Supertrees, themed gardens, and the breathtaking Cloud Forest and Flower Dome conservatories.

      The Supertrees, standing between 25 and 50 meters tall, are vertical gardens that are illuminated with dazzling lights at night. Visitors can walk along the OCBC Skyway, a suspended walkway between the Supertrees, and enjoy panoramic views of the surrounding gardens and city skyline.
      
      The Cloud Forest is a climate-controlled dome that houses a stunning indoor waterfall, lush vegetation, and a mist-filled mountain, creating a cool and misty environment reminiscent of tropical highlands. Visitors can explore the diverse plant life and learn about the importance of conserving tropical biodiversity.
      
      The Flower Dome, on the other hand, is the world's largest glass greenhouse and showcases a wide variety of exotic plants and flowers from different regions and climates. From Mediterranean blooms to succulents and baobabs from Africa, the Flower Dome offers a captivating experience for nature lovers.
      
      Apart from the conservatories, Gardens by the Bay also features themed gardens such as the Heritage Gardens, Sun Pavilion, and Supertree Grove, where visitors can enjoy leisurely strolls, picnics, and outdoor performances.
      
      Gardens by the Bay offers a unique and immersive experience, combining nature, art, and sustainable practices. It's a truly mesmerizing destination that showcases Singapore's commitment to creating a green and livable city.`,
    },
]

const Tours = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      Aos.init({ duration: 2000 });
      
    }, []);
  
    const LongText = ({ text, maxLength }) => {
      const [showFullText, setShowFullText] = useState(false);
  
      const toggleTextVisibility = () => {
        setShowFullText(!showFullText);
      };
  
      return (
        <>
          {showFullText ? (
            <p>{text}</p>
          ) : (
            <p>
              {text.slice(0, maxLength)}...{' '}
              <span onClick={toggleTextVisibility}>Read More</span>
            </p>
          )}
        </>
      );
    };
  
    return (
      <section className="main container section">
        <div className="secTitle">
          <h2>"Unforgettable Landscapes: Discover Nature's Masterpieces"</h2>
          <h3 data-aos="fade-right" className="title">
            Exciting Tours
          </h3>
        </div>
  
        <div className="secContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
            <div key={id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      {/* <small>+1</small> */}
                    </span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <LongText text={description} maxLength={100} />
                </div>
                <Link to={`/TourDetails/${id}`} className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
export {Data, Tours};
