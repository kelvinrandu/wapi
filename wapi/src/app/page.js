"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

import App from "@/components/App";
import ItemSingle from "@/components/ItemSingle";
import SearchBar from "@/components/SearchBar";
import {
  Text,
  Flex,
  Spinner,
  Box,
  Center,
  Button,
  Input,
} from "@chakra-ui/react";
import { useSearch } from "../utils/search";

const items = [
  {
    name: "TRIBEEARTH",
    longitude: "39.583367066599514",
    latitude: "-4.294665222783007",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "SALTY SQUID",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "SAILS BEACH BAR & RESTAURANT",
    longitude: "39.562976940151174",
    latitude: "-4.352362700456087",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "BLUE MARLIN RESTAURANT",
    longitude: "39.56326661873653",
    latitude: "-4.3500412534520985",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "SOUL BREEZE BEACH BAR AND RESTAURANT",
    longitude: "39.563438280120444",
    latitude: "-4.3657988277469855",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "PALLET CAFÉ",
    longitude: "39.556100237793544",
    latitude: "-4.373016329181328",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "SUNDOWNER RESTAURANT",
    longitude: "39.561287566629915",
    latitude: "-4.347790722137382",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "GOLDEN KARAFUU",
    longitude: "39.59509430666875",
    latitude: "-4.269499592008569",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "CASAMIA",
    longitude: "39.57525253142281",
    latitude: "-4.310525330618609",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "ALI BARBOUR CAVE",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },

  {
    name: "APERO",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "AMIGOS",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "HAVANA",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "JOLLY PIZZERIA",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "TIKI BAR",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "ANCHOR",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "PIRIE PIRIES",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "COAST DISHES",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "CHOCOS RESTAURANT",
    longitude: "39.563438280120444",
    latitude: "-4.350683128915565",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "OASIS BEACH BAR AND RESTAURANTS",
    longitude: "39.59726848389023",
    latitude: "-4.271700475986705",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },

  {
    name: "SIZZLERS STEAK HOIUSE",
    longitude: "39.582623029917464",
    latitude: "-4.2956598863568365",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "LEONARDOS",
    longitude: "39.58700039484341",
    latitude: "-4.2867585189546125",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "COLOBUS SHADE",
    longitude: "39.56589511457505",
    latitude: "-4.342085653197827",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "SIR WILLIAM GRILLED SEA FOOD",
    longitude: "39.56366351676967",
    latitude: "-4.341700523593282",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "QUA BRUCE",
    longitude: "39.58599652252059",
    latitude: "-4.288595784681062",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "MOMMAS BAR AND RESTAURANT",
    longitude: "39.55871554525988",
    latitude: "-4.322037124332487",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "SHAN E PUNJAB",
    longitude: "39.59055795320543",
    latitude: "-4.277723491062076",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "CHINESE RESTAURANT DIANI",
    longitude: "39.591201683341595",
    latitude: "-4.277038758111893",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "KITAMU RESTAURANT",
    longitude: "39.59480657210415",
    latitude: "-4.278750589339641",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "HIGGINS RESTAURANT",
    longitude: "39.5938205450686",
    latitude: "-4.27161425704595",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },

  {
    name: "KARAFUU UKUNDA",
    longitude: "39.56726476854782",
    latitude: "-4.281024086142147",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "EDDIES LOUNGE",
    longitude: "39.566921445808546",
    latitude: "-4.281195268546146",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "COLLINS RECEIPE FAST FOOD",
    longitude: "39.568552228820174",
    latitude: "-4.281409246497301",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "BABA BURGERS",
    longitude: "39.57056924991351",
    latitude: "-4.2829070904801085",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "CHICKEN REPUBLIC JOINT",
    longitude: "39.56816599073848",
    latitude: "-4.2765733302045765",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "EIGHTYS RESTAURANT ",
    longitude: "39.57503244552428",
    latitude: "-4.284447726945901",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "SWAHILI POT",
    longitude: "39.57296354240813",
    latitude: "-4.2844538006927975",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "PIZZERIA DA ANIELLO",
    longitude: "39.58656189806032",
    latitude: "-4.288285958987057",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "HOUSE OF WOOD FIRE",
    longitude: "39.57566711495873",
    latitude: "-4.299660255870641",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "DOUBLE FIFTEEN",
    longitude: "39.594161241945116",
    latitude: "-4.270906849016334",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "JAVA HOUSE",
    longitude: "39.58552983030114",
    latitude: "-4.290233952918005",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },

  {
    name: "AFRICAN POT",
    longitude: "39.57308781495875",
    latitude: "-4.284413944806142",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "BUNNYS FAST FOOD",
    longitude: "39.57570565084583",
    latitude: "-4.28387900191689",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "TROPICAL RESTAURANT",
    longitude: "39.55422064194511",
    latitude: "-4.304026364094802",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "PANORAMA RESTAURANT",
    longitude: "39.56596641495873",
    latitude: "-4.2867319484399555",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "CHILL SPOT",
    longitude: "39.584445223310766",
    latitude: "-4.299506449876768",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "MIAMI RESTAURANT",
    longitude: "39.568335857287515",
    latitude: "-4.2755042399499725",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "ASINS RESTAURANT",
    longitude: "39.593781284273916",
    latitude: "-4.2720577478733945",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "MOIZ SWAHILI DISHES",
    longitude: "39.58304785728753",
    latitude: "-4.288840256937211",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "ONE DAY SOMEWHERE",
    longitude: "39.58156727797434",
    latitude: "-4.288155533936566",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "LIONS CAGE RESTAURANT",
    longitude: " 39.56743875728752",
    latitude: "-4.276883246982785",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "MUMS CHOICE RESTAURANT",
    longitude: "39.5669237731786",
    latitude: "-4.279600777824325",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "SHANGAZI DISHES",
    longitude: "39.559236768931505",
    latitude: "-4.3009156538268725",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "GALAXY DIANI RESTAURANT",
    longitude: "39.59129774564356",
    latitude: "-4.277165740854807",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "COPA CABANA",
    longitude: "39.59608280632241",
    latitude: "-4.275090140704699",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },

  {
    name: "NOMAD BEACH BAR AND RESTAURANT",
    longitude: "39.572623568931505",
    latitude: "-4.3265375818588225",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "SPEEDY BISTRO",
    longitude: "39.581706241945106",
    latitude: "-4.303272757950962",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "J.JS BAR AND RESTAURANT",
    longitude: "39.563268257287525",
    latitude: "-4.298206365801642",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "MWAEPE RESTAURANT",
    longitude: "39.565830299616316",
    latitude: "-4.342426396368622",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "CHEZ NADINE RESTAURANT",
    longitude: "39.57450704194512",
    latitude: "-4.284678051885852",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "ROCKSTARZ",
    longitude: "39.57691030112015",
    latitude: "-4.285598152462292",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },

  {
    name: "CARNEVAL ROOFTOP RESTAURANT",
    longitude: "39.58242978427391",
    latitude: "-4.295790456267318",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "BB2",
    longitude: "39.57364334564355",
    latitude: "-4.31548426499606",
    phone: "",
    category: ["restaurants", "international"],
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "RAINBOW RESTAURANT",
    longitude: "39.56571679057348",
    latitude: "-4.286771434481866",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "KAYA RESTAURANT",
    longitude: "39.56322770071363",
    latitude: "-4.29357585437018",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "TSUNAMI GARDENS",
    longitude: "39.564300584273916",
    latitude: "-4.291093745963157",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "PIZZA INN",
    longitude: "39.566047257287536",
    latitude: "-4.280363742597344",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "MWAWANI RESTAURANT",
    longitude: "39.56688410646455",
    latitude: "-4.2813052461578165",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "ELITE PUB AND RESTAURANT",
    longitude: "39.570939606322405",
    latitude: "-4.283573409069707",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "CLUB LIQUID",
    longitude: "39.56819302440809",
    latitude: "-4.275699003335376",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "LA GUSTA",
    longitude: "39.57796055728752",
    latitude: "-4.315108761613289",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },

  {
    name: "PI STEAKS",
    longitude: "39.55303549961633",
    latitude: "-4.309233355387121",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "THE K KOREAN",
    longitude: "39.578436184273905",
    latitude: "-4.306218562564789",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "KOKKOS BISTRO",
    longitude: "39.57820014989064",
    latitude: "-4.307095843014619",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "CAPE OF GOOD HOPE RESTAURANT",
    longitude: "39.58248395728753",
    latitude: "-4.28882854478913",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "MADINI RESTAURANT",
    longitude: "39.57482598427391",
    latitude: "-4.300272167222669",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "SHIRO PORK CENTER",
    longitude: "39.59343275728752",
    latitude: "-4.273304652719271",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "PAPAYA BEACH BAR AND RESTAURANT",
    longitude: "39.59542832070965",
    latitude: "-4.276428757055318",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "BANDARINI RESTAURANT",
    longitude: "39.581870026602694",
    latitude: "-4.3033469665018025",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },

  {
    name: "TANGEZI SEA FOOD RESTAURANT",
    longitude: "39.56871454194512",
    latitude: "-4.337892581785989",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "IKRAM SEA FOOD",
    longitude: "39.566048414958736",
    latitude: "-4.293225652169498",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },

  {
    name: "ESTUARY RESTAURANT",
    longitude: "39.5977040419451",
    latitude: "-4.259212137502914",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "DIANIS FINEST HANGOUT",
    longitude: "39.56672101495874",
    latitude: "-4.2872803535247295",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "JIKUKU",
    longitude: "39.57400113030114",
    latitude: "-4.289207952300036",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "MEAT PLACE",
    longitude: "39.56650074194512",
    latitude: "-4.2803573513591715",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },

  {
    name: "CHICKEN INN",
    longitude: "39.56585701180896",
    latitude: "-4.280207566593799",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "AL YASMIN RESTAURANT SWAHILI",
    longitude: "39.56849630536725",
    latitude: "-4.281876595180125",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "MWIKO INN",
    longitude: "39.569998342351646",
    latitude: "-4.282818096879427",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "NEW DODOMA RESTAURANT",
    longitude: "39.565814096466546",
    latitude: "-4.284187551828252",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "HIOLLYWOOD SPEISERESTAURANT",
    longitude: "39.56589992715137",
    latitude: "-4.286412910890007",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "VICTORIOUS RESTAURANT",
    longitude: "39.56643636893151",
    latitude: "-4.286006355391131",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },

  {
    name: "HUSNA SWAHILI FOOD",
    longitude: "39.582013230301136",
    latitude: "-4.298185955022138",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "CHUI GRILL",
    longitude: "39.59124328701717",
    latitude: "-4.283507392005464",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },

  {
    name: "FUNKY MONKEY",
    longitude: "39.578542466599494",
    latitude: "-4.306222526179475",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
  {
    name: "OCTO CAFÉ",
    longitude: "39.57680498631497",
    latitude: "-4.308123501099578",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "PIZZA CORNER",
    longitude: "39.57349975747937",
    latitude: "-4.317735986351276",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "MVURENI FISHERMANS INN",
    longitude: "39.56222236660027",
    latitude: "-4.358650176329024",
    phone: "",
    category: ["restaurants", "local"],
    tags: ["restaurants", "local"],
  },
  {
    name: "SHASHINKA",
    longitude: "39.578189",
    latitude: "-4.306546611118894",
    phone: "",
    category: ["restaurants", "international"],
    tags: ["restaurants", "international"],
  },
];

export default function Home() {
  const options = [
    { label: "all", value: "all" },
    { label: "near me", value: "near" },
  ];
  const [_latitude, setLatitude1] = useState();
  const [_longitude, setLongitude] = useState();
  const [selected, setSelected] = useState(options[0]);
  const [filtered, setFiltered] = useState(items);

  return (
    <App setSelected={setSelected} selected={selected} options={options}>
      <Box
        display={{ base: "grid", md: "none" }}
        p={0}
        backgroundColor={"#DCF9FF"}
      >
        <Image
          src="/Background.png"
          width={1024}
          height={1024}
          alt="Picture of the author"
        />

        <Box width={"100%"} display={"grid"} mt={"2px"}>
          <Center p={4} width={"100%"}>
            <Box width={"100%"} p={0} mt={4}>
              <Box p={2} display={"grid"}>
                <Text
                  fontSize={"20px"}
                  width={"100%"}
                  fontWeight={500}
                  fontStyle={"normal"}
                  color={"#171717"}
                  fontFamily={"Plus Jakarta Sans"}
                >
                  Enter Your City to Start Exploring
                </Text>
              </Box>

              <Box p={0} mt={"20px"} display={"grid"}>
                <Input
                  padding={2}
                  width={"100%"}
                  backgroundColor={"white"}
                  placeholder="Type your city here..."
                  borderRadius={"20px"}
                  type="email"
                />
                <Button
                  borderRadius={"20px"}
                  mt={4}
                  backgroundColor={"#F80"}
                  colorScheme="#F80"
                >
                  Explore Now
                </Button>
                <Button
                  mt={4}
                  borderRadius={"20px"}
                  color={"#F80"}
                  variant="ghost"
                  colorScheme="#F80"
                >
                  Share my location
                </Button>
              </Box>
            </Box>
          </Center>
        </Box>

        <Box display={"grid"} p={2} backgroundColor={"rgba(37, 37, 37, 0.10)"}>
          <Box p={2}>✅ Thousands of Local Gems Uncovered</Box> 
          <Box p={2}>✅ Curated Picks, Just for You</Box>
          <Box p={2}>✅ Direct Connect with Local Businesses</Box>
        </Box>

        <Box
          display={"grid"}
          p={2}
          backgroundColor={"#57E5F3, #79CDD6"}
          bgGradient="linear(to-r, #57E5F3, #79CDD6)"
          pb={6}
        >
          <Text
            fontSize={"24px"}
            width={"353px"}
            mx={2}
            fontWeight={500}
            lineHeight={"36px"}
            fontStyle={"normal"}
            letterSpacing={"-0.4px"}
            color={"#171717"}
            fontFamily={"Plus Jakarta Sans"}
          >
            Discover Your World with Wapi.ke.com - Unveiling the Joy of Local
            Exploration
          </Text>

          <Text
            fontSize={"18px"}
            width={"353px"}
            my={2}
            mx={2}
            fontWeight={400}
            lineHeight={"27px"}
            fontStyle={"normal"}
            letterSpacing={"-0.4px"}
            color={"#171717"}
            fontFamily={"Plus Jakarta Sans"}
          >
            Welcome to wapi.ke.com, your ultimate compass to everything
            significant and exciting around you!
          </Text>

          <Text
            fontSize={"18px"}
            width={"353px"}
            my={2}
            mx={2}
            fontWeight={400}
            lineHeight={"27px"}
            fontStyle={"normal"}
            letterSpacing={"-0.4px"}
            color={"#171717"}
            fontFamily={"Plus Jakarta Sans"}
          >
            Imagine having a personal local guide that navigates you through the
            wonders nestled in your vicinity - from the coziest coffee shops and
            buzzing local markets to serene parks and pulsating events. That's
            what wapi.ke.com is all about; transforming the way you explore your
            neighborhood and beyond.
          </Text>
          <Text
            fontSize={"18px"}
            width={"353px"}
            mx={2}
            my={2}
            fontWeight={400}
            lineHeight={"27px"}
            fontStyle={"normal"}
            letterSpacing={"-0.4px"}
            color={"#171717"}
            fontFamily={"Plus Jakarta Sans"}
          >
            Since our inception, we've been on a mission to make your search for
            nearby attractions, services, and activities as seamless and
            enjoyable as a leisurely stroll on a sunny beach. We're not just any
            platform; we're your gateway to uncovering the hidden gems and
            possibilities that lie just around the corner.
          </Text>
          <Text
            fontSize={"18px"}
            width={"353px"}
            my={2}
            mx={2}
            fontWeight={400}
            lineHeight={"27px"}
            fontStyle={"normal"}
            letterSpacing={"-0.4px"}
            color={"#171717"}
            fontFamily={"Plus Jakarta Sans"}
          >
            With thousands of listings and an ever-expanding community,
            Wapi.ke.com is rapidly becoming the go-to hub for millions of users
            seeking to enrich their local experiences.
          </Text>
          <Text
            fontSize={"18px"}
            width={"353px"}
            my={2}
            mx={2}
            fontWeight={400}
            lineHeight={"27px"}
            fontStyle={"normal"}
            letterSpacing={"-0.4px"}
            color={"#171717"}
            fontFamily={"Plus Jakarta Sans"}
          >
            Month after month, we grow, adding more features, listings, and
            areas to explore, all with the aim of being your first stop in the
            quest for discovering what's near you.
          </Text>
          <Text
            fontSize={"18px"}
            width={"353px"}
            my={2}
            mx={2}
            fontWeight={400}
            lineHeight={"27px"}
            fontStyle={"normal"}
            letterSpacing={"-0.4px"}
            color={"#171717"}
            fontFamily={"Plus Jakarta Sans"}
          >
            Whether you're looking for a new dining experience, the nearest
            laundry service, or exciting local activities, Wapi.ke.com brings
            the world around you to your fingertips.
          </Text>
          <Text
            fontSize={"18px"}
            width={"353px"}
            my={2}
            mx={2}
            fontWeight={400}
            lineHeight={"27px"}
            fontStyle={"normal"}
            letterSpacing={"-0.4px"}
            color={"#171717"}
            fontFamily={"Plus Jakarta Sans"}
          >
            Dive into Wapi.ke.com, where every search is the beginning of a new
            adventure. Let's make every day a journey to discover the joy of
            local exploration together!
          </Text>
        </Box>
        <Box  pb={6}display={"grid"} p={2}>
          <Box p={2}>
            <Text
              fontSize={"24px"}
              width={"353px"}
              mx={2}
              fontWeight={500}
              lineHeight={"36px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              color={"#171717"}
              fontFamily={"Plus Jakarta Sans"}
            >
              Popular Categories
            </Text>
          </Box>

          <Center display={"grid"}>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Top Locations
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Curated by the editorial team
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Discover Beachfront Cafés
              </Text>
              <Text
                fontSize={"18px"}
                maxWidth={"340px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Sip your favorite brew with a view at Diani's best beachfront
                cafés, where the coffee is as invigorating as the ocean breeze.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Explore Local Markets
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Dive into the vibrant culture of Diani by exploring local
                markets, a treasure trove of crafts, fresh produce, and unique
                finds.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Adventure Sports in Diani
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Thrill-seekers, rejoice! From kite surfing to skydiving, Diani's
                adventure sports are sure to get your adrenaline pumping.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Marine Wildlife Tours
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Embark on a marine wildlife tour to witness Diani's underwater
                marvels, including dolphins, turtles, and the elusive whale
                shark.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Cultural Experiences
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Immerse yourself in the rich cultural tapestry of Diani with
                experiences that bring you closer to its history and heritage.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Eco-Friendly Stays
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Stay sustainably in Diani's eco-friendly accommodations, where
                luxury meets environmental consciousness.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Wellness Retreats
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Rejuvenate your mind, body, and soul at Diani's wellness
                retreats, your sanctuary for health and harmony.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Culinary Tours
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Taste your way through Diani on a culinary tour, savoring the
                flavors that make Swahili cuisine a delightful journey.
              </Text>
            </Box>
            <Button
              borderRadius={"20px"}
              width={"100%"}
              mt={4}
              variant="outline"
              borderColor={"#F8"}
              color={"#F80"}
              // colorScheme="#F80"
            >
              Show me all categories
            </Button>
          </Center>
        </Box>
        <Box display={"grid"} p={2} backgroundColor={"white"}>
          <Box p={2}> Discover diani gems</Box>
        </Box>
        <Box display={"grid"} p={2}>
          <Box p={2}>
            <Text
              fontSize={"18px"}
              width={"353px"}
              mx={2}
              color={"#F80"}
              fontWeight={500}
              lineHeight={"36px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              fontFamily={"Plus Jakarta Sans"}
            >
              Explore by Category
            </Text>
            <Text
              fontSize={"24px"}
              width={"353px"}
              mx={2}
              fontWeight={500}
              lineHeight={"36px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              color={"#171717"}
              fontFamily={"Plus Jakarta Sans"}
            >
              Diani's Diverse Attractions
            </Text>
            <Text
              fontSize={"18px"}
              width={"353px"}
              mx={2}
              fontWeight={400}
              lineHeight={"27px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              color={"#575757"}
              fontFamily={"Plus Jakarta Sans"}
            >
              Your guide to the wonders of Diani, sorted for every interest
            </Text>
          </Box>

          <Center display={"grid"}>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                🏝️ Beachfront Leisure
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Indulge in the serene beauty of Diani’s sandy shores and
                waterfront relaxation spots.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                🏄‍♂️ Adventure and Sports
              </Text>
              <Text
                fontSize={"18px"}
                maxWidth={"340px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Get your heart racing with kite surfing, diving, and more
                adrenaline-pumping activities
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                👩‍🌾 Cultural Heritage Sites
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Discover the rich history and traditions at sites like the Kongo
                Mosque and local museums.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                🦁 Wildlife and Nature Reserves
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Connect with nature and wildlife in reserves like Shimba Hills
                and the Colobus Conservation
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                🐳 Marine Exploration
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Embark on underwater adventures in the Kisite-Mpunguti Marine
                Park.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                🌮 Culinary Journeys
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Savor the tastes of Diani with traditional Swahili cooking
                classes and food tours
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                🧘‍♀️ Wellness and Spa
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Relax and rejuvenate at Diani’s top wellness retreats and spa
                facilities.
              </Text>
            </Box>
            <Box
              mt={2}
              display={"grid"}
              borderRadius={"20px"}
              backgroundColor={"white"}
              border={"1px solid rgba(22, 104, 112, 0.80)"}
              p={2}
            >
              <Text
                fontSize={"20px"}
                width={"353px"}
                mx={2}
                fontWeight={500}
                lineHeight={"36px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#171717"}
                fontFamily={"Plus Jakarta Sans"}
              >
                🎨 Local Markets and Art
              </Text>
              <Text
                fontSize={"18px"}
                width={"353px"}
                mx={2}
                fontWeight={400}
                lineHeight={"27px"}
                fontStyle={"normal"}
                letterSpacing={"-0.4px"}
                color={"#575757"}
                fontFamily={"Plus Jakarta Sans"}
              >
                Experience the vibrant local markets and galleries showcasing
                Kenyan art and crafts.
              </Text>
            </Box>

            <Button
              borderRadius={"20px"}
              width={"100%"}
              mt={4}
              variant="outline"
              color={"#F80"}
              // backgroundColor={"#F80"}
              colorScheme="#F80"
            >
              Show me all categories
            </Button>
          </Center>
        </Box>

        <Box display={"grid"} p={2} backgroundColor={"white"}>
          <Box p={2}>
            {" "}
            <Text
              fontSize={"24px"}
              width={"353px"}
              mx={2}
              fontWeight={500}
              lineHeight={"36px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              color={"#171717"}
              fontFamily={"Plus Jakarta Sans"}
            >
              Popular Searches
            </Text>
          </Box>
          <Box p={2}>
            {" "}
            <Text
              fontSize={"18px"}
              width={"353px"}
              mx={2}
              fontWeight={400}
              lineHeight={"27px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              color={"#252525"}
              fontFamily={"Plus Jakarta Sans"}
            >
              Dive into Diani's highlights with our 'Popular Searches' guide,
              designed to lead you straight to the heart of this Kenyan
              paradise. From sun-kissed beach accommodations and lively dining
              spots to adventurous water sports and serene natural escapes,
              we've curated the top categories to match every interest. Whether
              you're looking to connect with local culture through safaris and
              markets, seeking wellness retreats, or needing practical travel
              tips, our guide simplifies your journey to discovering Diani's
              best
            </Text>
          </Box>

        </Box>
        <Box display={"grid"} p={2}>
              <Box p={2}>
            <Text
              fontSize={"18px"}
              width={"353px"}
              mx={2}
              color={"#F80"}
              fontWeight={500}
              lineHeight={"36px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              fontFamily={"Plus Jakarta Sans"}
            >
          Discover Diani with wapiii
            </Text>
            <Text
              fontSize={"24px"}
              width={"353px"}
              mx={2}
              fontWeight={500}
              lineHeight={"36px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              color={"#171717"}
              fontFamily={"Plus Jakarta Sans"}
            >
             Your Ultimate Local Guide
            </Text>
            <Text
              fontSize={"18px"}
              width={"353px"}
              mx={2}
              fontWeight={400}
              lineHeight={"27px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              color={"#575757"}
              fontFamily={"Plus Jakarta Sans"}
            >
              Unveil the beauty and excitement of Diani, Kenya, tailored to your interests and location.
            </Text>
          </Box>
          <Box p={2}>
    
            <Text
              fontSize={"24px"}
              width={"353px"}
              mx={2}
              fontWeight={500}
              lineHeight={"36px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              color={"#171717"}
              fontFamily={"Plus Jakarta Sans"}
            >
            Explore the Best of Diani Beach Activities
            </Text>
            <Text
              fontSize={"18px"}
              width={"353px"}
              mx={2}
              fontWeight={400}
              lineHeight={"27px"}
              fontStyle={"italic"}
              letterSpacing={"-0.4px"}
              color={"#575757"}
              fontFamily={"Plus Jakarta Sans"}
            >
            From serene sunbathing to adrenaline-pumping water sports, discover what makes Diani's beaches unforgettable.
            </Text>
            <Text
              fontSize={"18px"}
              width={"353px"}
              mx={2}
              fontWeight={400}
              lineHeight={"27px"}
              fontStyle={"normal"}
              letterSpacing={"-0.4px"}
              color={"#171717"}
              fontFamily={"Plus Jakarta Sans"}
            >
           Embrace the sun-kissed shores and crystal-clear waters of Diani, where beach life is elevated to art. Whether you're eager to dive into 'water sports in Diani, Kenya' or simply relax by the sea, wapiii guides you to the perfect spots
            </Text>
          </Box>
        </Box>
      </Box>
    </App>
  );
}
