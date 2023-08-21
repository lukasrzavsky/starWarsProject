import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "../api";
import { API_PATHS } from "../api/paths";

const PLANETS_KEY = "planets";
const FIRST_PAGE_NUMBER = 1;
const PAGE_SIZE = 10;

type RequestParams = {
  page?: number;
  search?: string;
};

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type ResponseData = {
  count: number;
  next?: string;
  previous?: string;
  results?: Planet[];
};

const fetchPlanetsList = async (
  pageParam: number,
  search?: string
): Promise<ResponseData> => {
  const params: RequestParams = {
    page: pageParam,
    search: search,
  };

  const { data } = await api().get(API_PATHS.PLANETS, {
    params,
  });

  return data;
};

export const useGetPlanetsListQuery = (
  search?: string
): UseInfiniteQueryResult<ResponseData, AxiosError | Error> =>
  useInfiniteQuery({
    queryKey: [PLANETS_KEY, search],
    queryFn: ({ pageParam = FIRST_PAGE_NUMBER }) =>
      fetchPlanetsList(pageParam, search),
    getNextPageParam: (lastPage, allPages) =>
      (lastPage.results.length === PAGE_SIZE && (allPages.length ?? 0) + 1) ??
      false,
  });
