import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetPeopleListQuery } from "./useGetPeopleListQuery";
import { renderHook } from "@testing-library/react-hooks";
import { useGetPlanetsListQuery } from "./useGetPlanetsListQuery";
import { useGetStarshipsListQuery } from "./useGetStarshipsListQuery";

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Queries", () => {
  test("useGetPeopleListQuery data is defined", async () => {
    const { result, waitFor } = renderHook(() => useGetPeopleListQuery(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 3000,
    });

    expect(result.current.data).toBeDefined();
  });

  test("useGetPlanetsListQuery data is defined", async () => {
    const { result, waitFor } = renderHook(() => useGetPlanetsListQuery(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 3000,
    });

    expect(result.current.data).toBeDefined();
  });

  test("useGetStarshipsListQuery data is defined", async () => {
    const { result, waitFor } = renderHook(() => useGetStarshipsListQuery(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 3000,
    });

    expect(result.current.data).toBeDefined();
  });
});
