import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { api } from "../api";
import { API_PATHS } from "../api/paths";
import { FIRST_PAGE_NUMBER, PAGE_SIZE } from "../constants";

const PEOPLE_KEY = "people";

type RequestParams = {
  page?: number;
};

type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

type ResponseData = {
  count: number;
  next?: string;
  previous?: string;
  results?: Person[];
};

const fetchPeopleList = async (pageParam: number): Promise<ResponseData> => {
  const params: RequestParams = {
    page: pageParam,
  };

  const { data } = await api().get(API_PATHS.PEOPLE, {
    params,
  });

  return data;
};

export const useGetPeopleListQuery = (): UseInfiniteQueryResult<
  ResponseData,
  AxiosError | Error
> =>
  useInfiniteQuery({
    queryKey: [PEOPLE_KEY],
    queryFn: ({ pageParam = FIRST_PAGE_NUMBER }) => fetchPeopleList(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      (lastPage.results.length === PAGE_SIZE && (allPages.length ?? 0) + 1) ??
      false,
  });
