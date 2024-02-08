import { useQuery } from "@tanstack/react-query";
import fetchBreeds from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreeds);

  return [results?.data?.breeds ?? [], results.status];
}
