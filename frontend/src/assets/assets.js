import logo from './logo.svg';
import victoria from "./victoria.jpg";
import ScienceCity from "./science-city.jpg";
import eco from "./ecoPark.jpg";
import nicco from "./NiccoPark.jpg";
import birla from "./birla.jpg";
import hwh from "./hwhBridge.jpg";
import indMuseum from "./indMuseum.jpg";
import library from "./national-library.jpg";
import stPaul from "./stPaul.jpg";
import alipore from "./alipore.jpg";
import bitm from "./bitm.jpg";
import nehru from "./nehruMuseum.jpg";
import rabindraBharti from "./rabindraMuseum.jpg";
import shibpur from "./shibpur.jpg";
import marble from "./marblePalace.jpg";
import townHall from "./townHall.jpg";
import metcalfe from "./metcalfe.jpg";
import thakurBari from "./thakurBari.jpg";
import shaheed from "./shaheedMinar.jpg";
import netaji from "./netajiBhavan.jpg";
import motherWax from "./motherWax.jpg";
import rabindraSarovar from "./rabindraSarovar.jpg";
import millennium from "./millenniumPark.jpg";
import aquatica from "./aquatica.jpg";
import tram from "./tram.jpg";

import mohor from "./mohor.jpg";



export const assets = {
    logo,
};

// NOTE: In a real application, you would save packages to the DB first,
// get their real MongoDB `_id`s, and then use them in the museumsData array.
// These placeholder _id's are for demonstration.

export const packagesData = [
  // Victoria Memorial (1)
  { _id: "pkg_vic_1", name: "Indian Entry", price: 20, duration: "Full Day" },
  { _id: "pkg_vic_2", name: "Foreigner Entry", price: 200, duration: "Full Day" },
  { _id: "pkg_vic_3", name: "inside museum entry", price: 100, duration: "1 Hour" },
  // Science City (2)
  { _id: "pkg_sci_1", name: "General Entry", price: 60, duration: "Full Day" },
  // Eco Park (3)
  { _id: "pkg_eco_1", name: "Park Entry", price: 30, duration: "Full Day" },
  // Nicco Park (4)
  { _id: "pkg_nic_1", name: "Entry + All Rides", price: 500, duration: "Full Day" },
  { _id: "pkg_nic_2", name: "Entry + Rides + Water Park", price: 1200, duration: "Full Day" },
  // Birla Planetarium (5)
  { _id: "pkg_bir_1", name: "Adult Entry", price: 120, duration: "Per Show" },
  // Free Entry Package (for 6, 8, 9, 15, 16, 17, 19, 22, 23, 25)
  { _id: "pkg_free_1", name: "Free Entry", price: 0, duration: "N/A" },
  // Indian Museum (7)
  { _id: "pkg_ind_1", name: "Indian Entry", price: 50, duration: "Full Day" },
  { _id: "pkg_ind_2", name: "Foreigner Entry", price: 500, duration: "Full Day" },
  // st. paul cathedral
  {_id:"pkg_stp_1", name:"General entry",price:20,duration:"Full Day"},
  // Alipore Zoo (10)
  { _id: "pkg_zoo_1", name: "Adult Entry", price: 30, duration: "Full Day" },
  { _id: "pkg_zoo_2", name: "Child Entry", price: 10, duration: "Full Day" },
  // BITM (11)
  { _id: "pkg_bitm_1", name: "Adult Entry", price: 50, duration: "Full Day" },
  { _id: "pkg_bitm_2", name: "Student Entry", price: 20, duration: "Full Day" },
  // Nehru Children's Museum (12)
  { _id: "pkg_neh_1", name: "Adult Entry", price: 50, duration: "Full Day" },
  { _id: "pkg_neh_2", name: "Child Entry", price: 20, duration: "Full Day" },
  // Jorasanko Thakur Bari / Rabindra Bharati Museum (13, 18)
  { _id: "pkg_jor_1", name: "Indian Entry", price: 30, duration: "Full Day" },
  { _id: "pkg_jor_2", name: "Foreigner Entry", price: 150, duration: "Full Day" },
  // Shibpur Botanical Garden (14)
  { _id: "pkg_shi_1", name: "Garden Entry", price: 20, duration: "Full Day" },
  // Netaji Bhawan (20)
  { _id: "pkg_net_1", name: "Indian Entry", price: 20, duration: "Full Day" },
  { _id: "pkg_net_2", name: "Foreigner Entry", price: 100, duration: "Full Day" },
  // Mother's Wax Museum (21)
  { _id: "pkg_wax_1", name: "General Entry", price: 250, duration: "Full Day" },
  // Millennium Park (23)
  { _id: "pkg_mil_1", name: "Park Entry", price: 20, duration: "Full Day" },
  // Aquatica (24)
  { _id: "pkg_aqu_1", name: "Full Day Ticket", price: 1000, duration: "Full Day" },
  // Smaranika Tram Museum (26)
  { _id: "pkg_tram_1", name: "Museum Entry", price: 10, duration: "1 Hour" },
];

export const museumsData = [
  {
    _id: "mus_01",
    name: "Victoria Memorial",
    description: "The Victoria Memorial is a majestic and iconic landmark of Kolkata, often regarded as the city's most splendid architectural marvel...",
    location: {
      address: "Maidan, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3426, 22.5448] }
    },
    packages: ["pkg_vic_1", "pkg_vic_2", "pkg_vic_3"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "10:00 AM", close: "5:00 PM" }, wednesday: { open: "10:00 AM", close: "5:00 PM" },
      thursday: { open: "10:00 AM", close: "5:00 PM" }, friday: { open: "10:00 AM", close: "5:00 PM" }, saturday: { open: "10:00 AM", close: "5:00 PM" }, sunday: { open: "10:00 AM", close: "5:00 PM" }
    },
    images: victoria, isActive: true
  },
  {
    _id: "mus_02",
    name: "Science City",
    description: "Science City, Kolkata, is the largest science centre in the Indian subcontinent and a pioneering institution in the realm of science popularization...",
    location: {
      address: "EM Bypass, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.4080, 22.5400] }
    },
    packages: ["pkg_sci_1"],
    openingHours: {
      monday: { open: "9:00 AM", close: "8:00 PM" }, tuesday: { open: "9:00 AM", close: "8:00 PM" }, wednesday: { open: "9:00 AM", close: "8:00 PM" },
      thursday: { open: "9:00 AM", close: "8:00 PM" }, friday: { open: "9:00 AM", close: "8:00 PM" }, saturday: { open: "9:00 AM", close: "8:00 PM" }, sunday: { open: "9:00 AM", close: "8:00 PM" }
    },
    images: ScienceCity, isActive: true
  },
  {
    _id: "mus_03",
    name: "Eco Park",
    description: "Eco Park, located in the planned satellite city of New Town, is a sprawling urban oasis that stands as a testament to modern landscape architecture...",
    location: {
      address: "New Town, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.4760, 22.6100] }
    },
    packages: ["pkg_eco_1"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "2:30 PM", close: "8:30 PM" }, wednesday: { open: "2:30 PM", close: "8:30 PM" },
      thursday: { open: "2:30 PM", close: "8:30 PM" }, friday: { open: "2:30 PM", close: "8:30 PM" }, saturday: { open: "2:30 PM", close: "8:30 PM" }, sunday: { open: "2:30 PM", close: "8:30 PM" }
    },
    images: eco, isActive: true
  },
  {
    _id: "mus_04",
    name: "Nicco Park",
    description: "Nicco Park, affectionately known as the 'Disneyland of Bengal,' has been a cornerstone of entertainment and amusement in Kolkata for decades...",
    location: {
      address: "Salt Lake, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.4200, 22.5700] }
    },
    packages: ["pkg_nic_1", "pkg_nic_2"],
    openingHours: {
      monday: { open: "10:30 AM", close: "7:30 PM" }, tuesday: { open: "10:30 AM", close: "7:30 PM" }, wednesday: { open: "10:30 AM", close: "7:30 PM" },
      thursday: { open: "10:30 AM", close: "7:30 PM" }, friday: { open: "10:30 AM", close: "7:30 PM" }, saturday: { open: "10:30 AM", close: "7:30 PM" }, sunday: { open: "10:30 AM", close: "7:30 PM" }
    },
    images: nicco, isActive: true
  },
  {
    _id: "mus_05",
    name: "Birla Planetarium",
    description: "The M. P. Birla Planetarium, located near the iconic Victoria Memorial in Kolkata, is a distinguished landmark for both astronomy enthusiasts and curious tourists...",
    location: {
      address: "Maidan, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3470, 22.5440] }
    },
    packages: ["pkg_bir_1"],
    openingHours: {
      monday: { open: "12:00 PM", close: "7:00 PM" }, tuesday: { open: "12:00 PM", close: "7:00 PM" }, wednesday: { open: "12:00 PM", close: "7:00 PM" },
      thursday: { open: "12:00 PM", close: "7:00 PM" }, friday: { open: "12:00 PM", close: "7:00 PM" }, saturday: { open: "12:00 PM", close: "7:00 PM" }, sunday: { open: "12:00 PM", close: "7:00 PM" }
    },
    images: birla, isActive: true
  },
  {
    _id: "mus_06",
    name: "Howrah Bridge",
    description: "The Howrah Bridge, officially named Rabindra Setu in 1965 in honor of the great poet Rabindranath Tagore, is arguably the most iconic symbol of Kolkata...",
    location: {
      address: "Howrah, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3510, 22.5850] }
    },
    packages: ["pkg_free_1"],
    openingHours: {
      monday: { open: "Open 24 Hours", close: "Open 24 Hours" }, tuesday: { open: "Open 24 Hours", close: "Open 24 Hours" }, wednesday: { open: "Open 24 Hours", close: "Open 24 Hours" },
      thursday: { open: "Open 24 Hours", close: "Open 24 Hours" }, friday: { open: "Open 24 Hours", close: "Open 24 Hours" }, saturday: { open: "Open 24 Hours", close: "Open 24 Hours" }, sunday: { open: "Open 24 Hours", close: "Open 24 Hours" }
    },
    images: hwh, isActive: true
  },
  {
    _id: "mus_07",
    name: "Indian Museum",
    description: "The Indian Museum in Kolkata, fondly known as 'Jadughar' (House of Magic), is a titan among cultural institutions in the Asia-Pacific region...",
    location: {
      address: "Chowringhee, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3510, 22.5580] }
    },
    packages: ["pkg_ind_1", "pkg_ind_2"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "10:00 AM", close: "5:00 PM" }, wednesday: { open: "10:00 AM", close: "5:00 PM" },
      thursday: { open: "10:00 AM", close: "5:00 PM" }, friday: { open: "10:00 AM", close: "5:00 PM" }, saturday: { open: "10:00 AM", close: "5:00 PM" }, sunday: { open: "10:00 AM", close: "5:00 PM" }
    },
    images: indMuseum, isActive: true
  },
  {
    _id: "mus_08",
    name: "Kolkata Library (National Library)",
    description: "The National Library of India, located on the beautiful Belvedere Estate in Alipore, Kolkata, is the largest library in the country by volume...",
    location: {
      address: "Belvedere Estate, Alipore, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3320, 22.5180] }
    },
    packages: ["pkg_free_1"],
    openingHours: {
      monday: { open: "9:00 AM", close: "8:00 PM" }, tuesday: { open: "9:00 AM", close: "8:00 PM" }, wednesday: { open: "9:00 AM", close: "8:00 PM" },
      thursday: { open: "9:00 AM", close: "8:00 PM" }, friday: { open: "9:00 AM", close: "8:00 PM" }, saturday: { open: "9:00 AM", close: "8:00 PM" }, sunday: { open: "Closed", close: "Closed" }
    },
    images: library, isActive: true
  },
  {
    _id: "mus_09",
    name: "St. Paul’s Cathedral",
    description: "St. Paul's Cathedral, situated at the southern end of the Maidan, is one of Kolkata's most significant and visually stunning architectural landmarks...",
    location: {
      address: "Maidan, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3480, 22.5440] }
    },
    packages: ["pkg_stp_1"],
    openingHours: {
      monday: { open: "9:00 AM", close: "6:00 PM" }, tuesday: { open: "9:00 AM", close: "6:00 PM" }, wednesday: { open: "9:00 AM", close: "6:00 PM" },
      thursday: { open: "9:00 AM", close: "6:00 PM" }, friday: { open: "9:00 AM", close: "6:00 PM" }, saturday: { open: "9:00 AM", close: "6:00 PM" }, sunday: { open: "9:00 AM", close: "6:00 PM" }
    },
    images: stPaul, isActive: true
  },
  {
    _id: "mus_10",
    name: "Alipore Zoo",
    description: "The Alipore Zoological Gardens, commonly known as Alipore Zoo, holds the distinction of being India's oldest formally stated zoological park...",
    location: {
      address: "Alipore, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3300, 22.5200] }
    },
    packages: ["pkg_zoo_1", "pkg_zoo_2"],
    openingHours: {
      monday: { open: "9:00 AM", close: "5:00 PM" }, tuesday: { open: "9:00 AM", close: "5:00 PM" }, wednesday: { open: "9:00 AM", close: "5:00 PM" },
      thursday: { open: "Closed", close: "Closed" }, friday: { open: "9:00 AM", close: "5:00 PM" }, saturday: { open: "9:00 AM", close: "5:00 PM" }, sunday: { open: "9:00 AM", close: "5:00 PM" }
    },
    images: alipore, isActive: true
  },
  {
    _id: "mus_11",
    name: "Birla Industrial and Technological Museum",
    description: "The Birla Industrial and Technological Museum (BITM), located on Gurusaday Road, is a pioneering institution that set the trend for interactive science museums in India...",
    location: {
      address: "Gurusahai Dutta Rd, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3610, 22.5250] }
    },
    packages: ["pkg_bitm_1", "pkg_bitm_2"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "10:00 AM", close: "6:00 PM" }, wednesday: { open: "10:00 AM", close: "6:00 PM" },
      thursday: { open: "10:00 AM", close: "6:00 PM" }, friday: { open: "10:00 AM", close: "6:00 PM" }, saturday: { open: "10:00 AM", close: "6:00 PM" }, sunday: { open: "10:00 AM", close: "6:00 PM" }
    },
    images: bitm, isActive: true
  },
  {
    _id: "mus_12",
    name: "Nehru Children Museum",
    description: "The Nehru Children's Museum, located on Chowringhee Road, is a magical place designed to delight and educate young minds...",
    location: {
      address: "Maidan, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3510, 22.5490] }
    },
    packages: ["pkg_neh_1", "pkg_neh_2"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "11:00 AM", close: "7:00 PM" }, wednesday: { open: "11:00 AM", close: "7:00 PM" },
      thursday: { open: "11:00 AM", close: "7:00 PM" }, friday: { open: "11:00 AM", close: "7:00 PM" }, saturday: { open: "11:00 AM", close: "7:00 PM" }, sunday: { open: "11:00 AM", close: "7:00 PM" }
    },
    images: nehru, isActive: true
  },
  {
    _id: "mus_13",
    name: "Rabindra Bharati Museum (Jorasanko Thakur Bari)",
    description: "Jorasanko Thakur Bari, the ancestral home of the illustrious Tagore family, is one of Kolkata's most revered cultural and historical landmarks...",
    location: {
      address: "Jorasanko, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3610, 22.5850] }
    },
    packages: ["pkg_jor_1", "pkg_jor_2"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "10:30 AM", close: "5:00 PM" }, wednesday: { open: "10:30 AM", close: "5:00 PM" },
      thursday: { open: "10:30 AM", close: "5:00 PM" }, friday: { open: "10:30 AM", close: "5:00 PM" }, saturday: { open: "10:30 AM", close: "5:00 PM" }, sunday: { open: "10:30 AM", close: "5:00 PM" }
    },
    images:rabindraBharti, isActive: true
  },
  {
    _id: "mus_14",
    name: "Shibpur Botanical Garden",
    description: "The Acharya Jagadish Chandra Bose Indian Botanic Garden, more commonly known as the Shibpur Botanical Garden, is a vast expanse of greenery...",
    location: {
      address: "Shibpur, Howrah (Kolkata)", city: "Howrah", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3000, 22.5600] }
    },
    packages: ["pkg_shi_1"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "10:00 AM", close: "5:00 PM" }, wednesday: { open: "10:00 AM", close: "5:00 PM" },
      thursday: { open: "10:00 AM", close: "5:00 PM" }, friday: { open: "10:00 AM", close: "5:00 PM" }, saturday: { open: "10:00 AM", close: "5:00 PM" }, sunday: { open: "10:00 AM", close: "5:00 PM" }
    },
    images:shibpur, isActive: true
  },
  {
    _id: "mus_15",
    name: "Marble Palace",
    description: "The Marble Palace, located in a quiet lane in North Kolkata, is one of the city's most unusual and fascinating landmarks...",
    location: {
      address: "Machuabazar, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3660, 22.5860] }
    },
    packages: ["pkg_free_1"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "10:00 AM", close: "4:00 PM" }, wednesday: { open: "10:00 AM", close: "4:00 PM" },
      thursday: { open: "Closed", close: "Closed" }, friday: { open: "10:00 AM", close: "4:00 PM" }, saturday: { open: "10:00 AM", close: "4:00 PM" }, sunday: { open: "10:00 AM", close: "4:00 PM" }
    },
    images:marble, isActive: true
  },
  {
    _id: "mus_16",
    name: "Town Hall",
    description: "Kolkata's Town Hall, standing gracefully in the B.B.D. Bagh area near the Esplanade, is a magnificent heritage building...",
    location: {
      address: "Esplanade, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3530, 22.5660] }
    },
    packages: ["pkg_free_1"],
    openingHours: {
      monday: { open: "10:00 AM", close: "5:00 PM" }, tuesday: { open: "10:00 AM", close: "5:00 PM" }, wednesday: { open: "10:00 AM", close: "5:00 PM" },
      thursday: { open: "10:00 AM", close: "5:00 PM" }, friday: { open: "10:00 AM", close: "5:00 PM" }, saturday: { open: "10:00 AM", close: "5:00 PM" }, sunday: { open: "Closed", close: "Closed" }
    },
    images: townHall, isActive: true
  },
  {
    _id: "mus_17",
    name: "Metcalfe Hall",
    description: "Metcalfe Hall is a striking heritage building located at the junction of Strand Road and Hare Street in the heart of Kolkata's business district...",
    location: {
      address: "Esplanade, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3490, 22.5730] }
    },
    packages: ["pkg_free_1"],
    openingHours: {
      monday: { open: "10:00 AM", close: "5:00 PM" }, tuesday: { open: "10:00 AM", close: "5:00 PM" }, wednesday: { open: "10:00 AM", close: "5:00 PM" },
      thursday: { open: "10:00 AM", close: "5:00 PM" }, friday: { open: "10:00 AM", close: "5:00 PM" }, saturday: { open: "10:00 AM", close: "5:00 PM" }, sunday: { open: "Closed", close: "Closed" }
    },
    images: metcalfe, isActive: true
  },
  {
    _id: "mus_18",
    name: "Jorasanko Thakur Bari",
    description: "Jorasanko Thakur Bari, the ancestral seat of the Tagore family, is a cultural sanctuary nestled in the bustling lanes of North Kolkata...",
    location: {
      address: "Jorasanko, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3610, 22.5850] }
    },
    packages: ["pkg_jor_1", "pkg_jor_2"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "10:30 AM", close: "5:00 PM" }, wednesday: { open: "10:30 AM", close: "5:00 PM" },
      thursday: { open: "10:30 AM", close: "5:00 PM" }, friday: { open: "10:30 AM", close: "5:00 PM" }, saturday: { open: "10:30 AM", close: "5:00 PM" }, sunday: { open: "10:30 AM", close: "5:00 PM" }
    },
    images: thakurBari, isActive: true
  },
  {
    _id: "mus_19",
    name: "Shaheed Minar",
    description: "The Shaheed Minar, or Martyrs' Monument, stands tall and proud in the northern part of the Maidan in Esplanade, Kolkata...",
    location: {
      address: "Esplanade, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3530, 22.5620] }
    },
    packages: ["pkg_free_1"],
    openingHours: {
      monday: { open: "10:00 AM", close: "6:00 PM" }, tuesday: { open: "10:00 AM", close: "6:00 PM" }, wednesday: { open: "10:00 AM", close: "6:00 PM" },
      thursday: { open: "10:00 AM", close: "6:00 PM" }, friday: { open: "10:00 AM", close: "6:00 PM" }, saturday: { open: "10:00 AM", close: "6:00 PM" }, sunday: { open: "Closed", close: "Closed" }
    },
    images: shaheed, isActive: true
  },
  {
    _id: "mus_20",
    name: "Netaji Bhawan",
    description: "Netaji Bhawan, located on Elgin Road in South Kolkata, is a place of immense historical and national importance...",
    location: {
      address: "Elgin Road, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3470, 22.5330] }
    },
    packages: ["pkg_net_1", "pkg_net_2"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "11:00 AM", close: "4:30 PM" }, wednesday: { open: "11:00 AM", close: "4:30 PM" },
      thursday: { open: "11:00 AM", close: "4:30 PM" }, friday: { open: "11:00 AM", close: "4:30 PM" }, saturday: { open: "11:00 AM", close: "4:30 PM" }, sunday: { open: "11:00 AM", close: "4:30 PM" }
    },
    images:netaji, isActive: true
  },
  {
    _id: "mus_21",
    name: "Mother’s Wax Museum",
    description: "Mother's Wax Museum, located in the rapidly developing area of New Town, is Kolkata's answer to the world-famous Madame Tussauds...",
    location: {
      address: "New Town, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.4750, 22.6100] }
    },
    packages: ["pkg_wax_1"],
    openingHours: {
      monday: { open: "Closed", close: "Closed" }, tuesday: { open: "12:00 PM", close: "7:30 PM" }, wednesday: { open: "12:00 PM", close: "7:30 PM" },
      thursday: { open: "12:00 PM", close: "7:30 PM" }, friday: { open: "12:00 PM", close: "7:30 PM" }, saturday: { open: "12:00 PM", close: "7:30 PM" }, sunday: { open: "12:00 PM", close: "7:30 PM" }
    },
    images: motherWax, isActive: true
  },
  {
    _id: "mus_22",
    name: "Rabindra Sarobar Lake",
    description: "Rabindra Sarobar, formerly known as Dhakuria Lake, is a vast artificial lake located in South Kolkata that serves as the green lungs for the southern part of the city...",
    location: {
      address: "Southern Avenue, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3580, 22.5000] }
    },
    packages: ["pkg_free_1"],
    openingHours: {
      monday: { open: "5:00 AM", close: "8:00 PM" }, tuesday: { open: "5:00 AM", close: "8:00 PM" }, wednesday: { open: "5:00 AM", close: "8:00 PM" },
      thursday: { open: "5:00 AM", close: "8:00 PM" }, friday: { open: "5:00 AM", close: "8:00 PM" }, saturday: { open: "5:00 AM", close: "8:00 PM" }, sunday: { open: "5:00 AM", close: "8:00 PM" }
    },
    images: rabindraSarovar, isActive: true
  },
  {
    _id: "mus_23",
    name: "Millennium Park",
    description: "Millennium Park is a beautifully landscaped public park situated along the eastern bank of the Hooghly River on Strand Road, Kolkata...",
    location: {
      address: "Strand Road, Hooghly Riverside, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3470, 22.5780] }
    },
    packages: ["pkg_mil_1"],
    openingHours: {
      monday: { open: "10:00 AM", close: "6:00 PM" }, tuesday: { open: "10:00 AM", close: "6:00 PM" }, wednesday: { open: "10:00 AM", close: "6:00 PM" },
      thursday: { open: "10:00 AM", close: "6:00 PM" }, friday: { open: "10:00 AM", close: "6:00 PM" }, saturday: { open: "10:00 AM", close: "6:00 PM" }, sunday: { open: "10:00 AM", close: "6:00 PM" }
    },
    images: millennium, isActive: true
  },
  {
    _id: "mus_24",
    name: "Aquatica Water Park",
    description: "Aquatica is a premier water theme park and resort located in Kestopur, on the eastern outskirts of Kolkata...",
    location: {
      address: "Kestopur, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.4600, 22.6000] }
    },
    packages: ["pkg_aqu_1"],
    openingHours: {
      monday: { open: "10:00 AM", close: "6:00 PM" }, tuesday: { open: "10:00 AM", close: "6:00 PM" }, wednesday: { open: "10:00 AM", close: "6:00 PM" },
      thursday: { open: "10:00 AM", close: "6:00 PM" }, friday: { open: "10:00 AM", close: "6:00 PM" }, saturday: { open: "10:00 AM", close: "6:00 PM" }, sunday: { open: "10:00 AM", close: "6:00 PM" }
    },
    images: aquatica, isActive: true
  },
  {
    _id: "mus_25",
    name: "Mohor Kunja",
    description: "Mohor Kunja, formerly known as Citizen's Park, is a beautiful and tranquil public park located in the heart of Kolkata...",
    location: {
      address: "Cathedral Road, Maidan, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3500, 22.5480] }
    },
    packages: ["pkg_free_1"],
    openingHours: {
      monday: { open: "5:00 AM", close: "9:00 PM" }, tuesday: { open: "5:00 AM", close: "9:00 PM" }, wednesday: { open: "5:00 AM", close: "9:00 PM" },
      thursday: { open: "5:00 AM", close: "9:00 PM" }, friday: { open: "5:00 AM", close: "9:00 PM" }, saturday: { open: "5:00 AM", close: "9:00 PM" }, sunday: { open: "5:00 AM", close: "9:00 PM" }
    },
    images: mohor, isActive: true
  },
  {
    _id: "mus_26",
    name: "Smaranika Tram Museum",
    description: "The Smaranika Tram Museum offers a nostalgic journey into the heritage of Kolkata's iconic public transport system...",
    location: {
      address: "Esplanade, Maidan, Kolkata", city: "Kolkata", state: "West Bengal",
      geo: { type: 'Point', coordinates: [88.3520, 22.5640] }
    },
    packages: ["pkg_tram_1"],
    openingHours: {
      monday: { open: "1:00 PM", close: "8:00 PM" }, tuesday: { open: "1:00 PM", close: "8:00 PM" }, wednesday: { open: "1:00 PM", close: "8:00 PM" },
      thursday: { open: "Closed", close: "Closed" }, friday: { open: "1:00 PM", close: "8:00 PM" }, saturday: { open: "1:00 PM", close: "8:00 PM" }, sunday: { open: "1:00 PM", close: "8:00 PM" }
    },
    images: tram, isActive: true
  }
];






 export const feedbacks = [
  {
    name: "Elon Musk",
    img: "/images/elon-musk.jpg",
    text: "TicketKaku's use of AI to simplify ticket bookings is truly futuristic. The chatbot understands natural language, works across multiple languages, and delivers real-time results. This is what smart city infrastructure should look like — efficient, intelligent, and people-friendly.",
    rating: "★★★★☆",
    date: "Reviewed on 02/08/2025"
  },
  {
    name: "Bill Gates",
    img: "/images/bill-gates.jpg",
    text: "I’ve always believed in technology that empowers communities, and TicketKaku is doing just that. By providing seamless access to cultural and educational venues through a clean interface and multilingual support, they’re setting a benchmark for digital inclusion in public services",
    rating: "★★★★☆",
    date: "Reviewed on 05/08/2025"
  },
  {
    name: "Mahendra Singh Dhoni",
    img: "/images/msd.jpg",
    text: "Whether it’s on the field or planning a weekend with family, timing matters. With TicketKaku, booking tickets is quick, simple, and super reliable — no last-minute drama. It’s the kind of calm-under-pressure system I appreciate. Great job!",
    rating: "★★★★★",
    date: "Reviewed on 07/08/2025"
  },
  {
    name: "Salman Khan",
    img: "/images/salman-khan.jpg",
    text: "What I liked about TicketKaku is how easy it makes the whole ticket booking process. No stress, no complicated steps — just a few taps and you're done. The chatbot even speaks Hindi! It's stylish, simple, and straight to the point — just like me.",
    rating: "★★★★★",
    date: "Reviewed on 12/08/2025"
  },
  {
    name: "Dr. Sabyasachi Bagchi",
    img: "/images/hod.jpg",
    text: "As an academic, I often organize student visits to museums and cultural sites. TicketKaku has made this process unbelievably smooth. The multilingual interface is perfect for students from diverse backgrounds, and the AI chatbot handles queries with precision. Highly recommended for institutional use.",
    rating: "★★★★★",
    date: "Reviewed on 15/08/2025"
  },
  {
    name: "Priyanka Chopra",
    img: "/images/priyanka-chopra.jpg",
    text: "TicketKaku makes exploring culture easier and smarter. I love that it supports multiple languages and uses AI to simplify bookings. It’s modern, inclusive, and exactly what today’s travelers need.",
    rating: "★★★★★",
    date: "Reviewed on 21/08/2025"
  }
];



   export const faqs = [
    {
      question: "What is Ticketkaku?",
      answer: "TicketKaku is an AI-powered assistant that helps users book tickets for popular parks, museums, and tourist attractions across Kolkata. It provides a seamless experience through simple chat-based interaction—no need to fill out long forms!"
    },
    {
      question: "How do I book a ticket through the chatbot?",
      answer: "Just start a chat and type your desired destination by clicking on Book Now. The chatbot will guide you to choose the date, number of visitors, ticket type, and payment method. After successful payment, your digital ticket will be generated instantly."
    },
    {
      question: "Which places can I book tickets for?",
      answer: "You can book tickets for major attractions such as Eco Park, Science City, Nicco Park, Victoria Memorial, Indian Museum, Birla Planetarium, Alipore Zoo, and many more."
    },
    {
      question: "Do I need to sign up or log in to book tickets?",
      answer: "Yes, users need to sign up or log in using their email or phone number to make bookings. This ensures that your tickets and booking history are securely stored and easily accessible at any time."
    },
    {
      question: "Can I make payment through UPI or credit/debit cards?",
      answer: "Absolutely! Our chatbot supports secure payment methods including UPI (Paytm, Google Pay, PhonePe), credit/debit cards, and net banking. All transactions are encrypted and processed through trusted payment gateways."
    },
    {
      question: "Will I receive a digital ticket or QR code?",
      answer: "Yes, after booking you will receive a digital ticket containing a QR code. This will be emailed to you and can also be accessed in your “My Bookings” section. You’ll just need to show the QR code at the venue entrance."
    },
    {
      question: "Can I book for multiple people in one transaction?",
      answer: "Yes, you can book for multiple visitors at once. While chatting with the bot, you’ll be asked how many adult, child, or senior citizen tickets you need—perfect for families and groups."
    },
    {
      question: "How do I view or manage my previous bookings?",
      answer: "Once logged in, you can go to the “My Bookings” section to view all your past and upcoming bookings. You can also download tickets or check your visit history from there."
    },
    {
      question: "Can I cancel or reschedule a booking after payment?",
      answer: "Yes, cancellations and rescheduling are allowed based on the venue's policy. Just type “Cancel booking” or “Reschedule” in the chatbot, and follow the instructions. Refunds (if applicable) are processed automatically within a few business days."
    },
    {
      question: "Is the chatbot available 24/7 for support and booking?",
      answer: "The Ticketkaku Chatbot is available 24/7 to help with bookings, payments, cancellations, and general inquiries. You can access it anytime from your phone, tablet, or desktop."
    },
    {
      question: "What happens if my payment fails but money is deducted?",
      answer: "In such cases, your money is safe. Most failed transactions are automatically refunded by your bank within 5–7 working days. If not, you can raise a support request directly in the chatbot."
    },
    {
      question: "Is there a mobile app, or is it web-based only?",
      answer: "Currently, TicketKaku works through a web-based platform. However, we’re working on a mobile app to make the experience even smoother and more accessible on the go."
    }
  ];
