"use client";

import { useState } from "react";

interface Branch {
  name: string;
  address: string;
  mapUrl: string;
  img: string;
}

const branches: Branch[] = [
  {
    name: "International Taika Martial Arts Academy (Corporate Branch)",
    address:
      "4th Floor, Main Corporate Building, Baraib, Hyderabad, Telangana 500090",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.259455333538!2d78.4067001!3d17.495123799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9160a4a7f18d%3A0xc180e0b2890f068e!2sINTERNATIONAL%20TAIKA%20MARTIAL%20ARTS%20ACADEMY%20(Corporate%20Branch)!5e0!3m2!1sen!2sin!4v1758948730662!5m2!1sen!2sin",
    img: "./images/IMG_9330.jpg",
  },
  {
    name: "International Taika martial arts academy",
    address:
      "4th Floor, Harsha Pride, Botanical Garden Rd, Above KS Bakers, Kondapur, Hyderabad, Telangana 500084",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.937875615098!2d78.3498631097783!3d17.462687300564372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e7bb8473c3%3A0x883e20598d92b492!2sInternational%20Taika%20martial%20arts%20academy!5e0!3m2!1sen!2sin!4v1756624208470!5m2!1sen!2sin",
    img: "./images/gimage12.jpg",
  },
  {
    name: "International Taika Martial Arts Academy",
    img: "./images/gimage21.jpg",
    address:
      "Plot No. 92, Near Venkateswara Swamy Temple, Gayatri Nagar, Vivekananda Nagar, Kukatpally, Hyderabad, Telangana 500072",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60894.978352703976!2d78.3111467889542!3d17.462770020842587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9160a4a7f18d%3A0xc180e0b2890f068e!2sINTERNATIONAL%20TAIKA%20MARTIAL%20ARTS%20ACADEMY%20(Corporate%20Branch)!5e0!3m2!1sen!2sin!4v1756624575840!5m2!1sen!2sin",
  },
  {
    img: "./images/gimage30.jpg",
    name: "International Taika Martial Arts Academy",
    address:
      "4th Floor, Gokul Plots, Opposite Prajay Apartments, Near Tinder Cuts, KPHB Colony, Kukatpally, Hyderabad, Telangana 500085",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60894.92643716719!2d78.31097503147326!3d17.46292529501998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f41cae6639%3A0xf43b4e6a769bed0f!2sINTERNATIONAL%20TAIKA%20MARTIAL%20ARTS%20ACADEMY!5e0!3m2!1sen!2sin!4v1756624659159!5m2!1sen!2sin",
  },
  {
    img: "./images/gimage23.jpg",
    name: "International Taika Martial Arts Academy",
    address:
      "Gate No. 1, Plot No. 436, Mathrusree Nagar, Miyapur, Telangana 500049",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7610.536042301259!2d78.36283845925844!3d17.4947146159777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b581424e53%3A0x283a44759d0c820!2sInternational%20Taika%20Martial%20Arts%20Academy!5e0!3m2!1sen!2sin!4v1756625478539!5m2!1sen!2sin",
  },
  {
    img: "./images/gimage2.jpg",
    name: "International Taika martial arts academy",
    address:
      "Back of Huda Park, Road No. 22, Near Old Age Home, Huda Complex, Mayuri Nagar, Miyapur, Hyderabad, Telangana 500049",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.9603411163107!2d78.37124728885496!3d17.509406499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d535c7813d%3A0xa8a670424a225dbb!2sInternational%20Taika%20Martial%20Arts%20Academy!5e0!3m2!1sen!2sin!4v1756627071548!5m2!1sen!2sin",
  },
  {
    img: "./images/gimage6.jpg",
    name: "International Taika Martial Arts Academy",
    address:
      "Plot No. 25, 180, Road No. 9B, Swamy Ayyappa Society, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.260710710826581!2d78.385507809778!3d17.447231451011206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913f13b91999%3A0xf8939dd5178a1c09!2sInternational%20Taika%20Martial%20Arts%20Academy!5e0!3m2!1sen!2sin!4v1756627219960!5m2!1sen!2sin",
  },
  {
    img: "./images/gimage7.jpg",
    name: "International Taika Martial Arts Academy",
    address:
      "Mahadev Puram, Sai Krupa Apartment, Beside Sai Baba Temple, Gajularamaram, Hyderabad, Telangana 500117",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15218.989060203956!2d78.3973822554199!3d17.519574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f46f0cffc59%3A0xc58123b5d14de14e!2sInternational%20Taika%20Martial%20Arts%20Academy!5e0!3m2!1sen!2sin!4v1756627275232!5m2!1sen!2sin",
  },
  {
    img: "./images/gimage14.jpg",
    name: "International Taika Martial Arts Academy",
    address: "V.V Nagar, Kukatpally, Hyderabad, Telangana",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60888.0768387739!2d78.30755734926882!3d17.48340004185497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9160a4a7f18d%3A0xc180e0b2890f068e!2sINTERNATIONAL%20TAIKA%20MARTIAL%20ARTS%20ACADEMY%20(Corporate%20Branch)!5e0!3m2!1sen!2sin!4v1756643723160!5m2!1sen!2sin",
  },
  {
    img: "./images/karate20.jpg",
    name: "International Taika Martial Arts Academy",
    address:
      "4th Floor, Harmony Towers, adjacent to Ratnadeep, Pragathi Nagar, Kukatpally, Hyderabad, Telangana 500090",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.7064258524933!2d78.3965265!3d17.5215221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f0682a150b1%3A0xbe2838c41007f4c0!2sInternational%20Taika%20Martial%20Arts%20Academy!5e0!3m2!1sen!2sin!4v1758948378271!5m2!1sen!2sin",
  },
  {
    img: "./images/karate10.jpg",
    name: "International Taika Martial Arts Academy",
    address:
      "Beerumguda, Krishna Reddy Pet Rd, beside Bachpan school, Hyderabad, Telangana 502032",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.471178937274!2d78.2982319!3d17.532739700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d5a29dadefd%3A0x1f4aa78b445b206e!2sThe%20Art%20of%20Fight%20%7C%20Martial%20arts%20Academy%20%7C%20karate%20academy%7C%20kung%20Fu%20academy!5e0!3m2!1sen!2sin!4v1758948522490!5m2!1sen!2sin",
  },
  {
    img: "./images/karate2.jpg",
    name: "International Taika Martial Arts Academy",
    address:
      "Dharma’s House, Plot No 145, Road No 11, near Ganesh Mandapam, 4th Phase, SLN, Patelguda, Hyderabad, Telangana 502319",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.228449859039!2d78.2825682!3d17.544306799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf3930ba6bc0b%3A0x7fff533de24fe6c7!2sTaika%20Martial%20Arts%20Academy!5e0!3m2!1sen!2sin!4v1758948634006!5m2!1sen!2sin",
  },
];

export default function Branches() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapSrc, setMapSrc] = useState(branches[0].mapUrl);
  const handleViewOnMap = (mapUrl: string) => {
    setMapSrc(mapUrl);
    setMapLoaded(false);
    const mapElement = document.getElementById("map");
    if (mapElement)
      mapElement.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white pt-6 container-padding">
      {/* <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-red-600">🥋 Taika Martial Arts Academy</h1>
        <p className="text-white text-lg mb-4">Find Your Nearest Dojo Location in Hyderabad</p>
        <input
          type="text"
          placeholder="Search for a dojo location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 rounded-full text-black bg-red-200 placeholder-black"
        />
      </div> */}
      <div className="mb-2 md:mb-4 rounded-lg overflow-hidden border border-red-600 relative w-full h-[200px] md:h-[450px]">
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10 transition-opacity duration-500">
            <div className="w-8 h-8 border border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <iframe
          id="map"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Map"
          onLoad={() => setMapLoaded(true)}
        ></iframe>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {filteredBranches.map((branch, index) => (
          <div
            key={index}
            className="branch-card bg-black text-white rounded-2xl p-2 shadow-lg 
                 border border-primary"
          >
            <img
              src={branch.img}
              alt={branch.name}
              className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-700"
              onError={(e) =>
                ((e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/300x150?text=No+Image")
              }
            />

            <h2 className="text-sm md:text-xl font-bold mb-1 md:mb-2 text-white">{branch.name}</h2>
            <p className="text-gray-300 text-xs md:text-sm mb-2 md:mb-4 leading-relaxed">
              {branch.address}
            </p>

            <button
              onClick={() => handleViewOnMap(branch.mapUrl)}
              className="w-full py-2 text-sm md:text-md rounded-full bg-white text-black font-semibold 
                   border border-red-600 hover:bg-red-600 hover:text-white 
                   transition-all duration-300"
            >
              📍 View on Map
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
