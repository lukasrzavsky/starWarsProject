import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "../api";
import { API_PATHS } from "../api/paths";

const STARSHIPS_KEY = "starships";
const FIRST_PAGE_NUMBER = 1;
const PAGE_SIZE = 10;

type RequestParams = {
  page?: number;
};

type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type ResponseData = {
  count: number;
  next?: string;
  previous?: string;
  results?: Starship[];
};

const fetchStarshipsList = async (pageParam: number): Promise<ResponseData> => {
  const params: RequestParams = {
    page: pageParam,
  };

  const { data } = await api().get(API_PATHS.STARSHIPS, {
    params,
  });

  return data;
};

export const useGetStarshipsListQuery = (): UseInfiniteQueryResult<
  ResponseData,
  AxiosError | Error
> =>
  useInfiniteQuery({
    queryKey: [STARSHIPS_KEY],
    queryFn: ({ pageParam = FIRST_PAGE_NUMBER }) =>
      fetchStarshipsList(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      (lastPage.results.length === PAGE_SIZE && (allPages.length ?? 0) + 1) ??
      false,
  });
