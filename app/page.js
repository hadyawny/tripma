import ExploreMore from "./components/exploreMore";
import FlightDeals from "./components/flightDeals/flightDeals";
import WideFlightDealCard from "./components/flightDeals/wideFlightDealCard";
import Hero from "./components/hero/hero";
import PlacesToStay from "./components/placesToStay/placesToStay";
import Reviews from "./components/reviews/reviews";

export default function Home() {
  return <>
  <Hero/>
  <FlightDeals/>
  <WideFlightDealCard/>
  <PlacesToStay/>
  <ExploreMore/>
  <Reviews/>
  </>;
}
